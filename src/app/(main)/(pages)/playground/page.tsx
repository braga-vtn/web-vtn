"use client"

import React, { useRef, useEffect, useState, RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, CopyIcon, ThumbsDownIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import 'katex/dist/katex.min.css';
import TextRenderer from "./components/text-render";
import CommandPlayground from "./components/commandPlayground";
import { InputPlayground } from "./components/inputPlayground";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useUploadFile } from "@/hooks/use-upload-file";
import { toast } from "sonner";

const fakeResponse = [



  `Aqui está outra imagem incrível:

  %%IMAGE%https://images.unsplash.com/photo-1715584083775-30132089b98d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%%IMAGE%`,



  `Vamos ver como as vendas deste ano estão se comparando às do ano passado:

  ~~~

  [

    { "name": "jan", "value": 3650 },

    { "name": "fev", "value": 3450 },

    { "name": "mar", "value": 3150 },

    { "name": "abr", "value": 3200 },

    { "name": "jun", "value": 2800 },

    { "name": "jul", "value": 3000 },

    { "name": "ago", "value": 2600 },

    { "name": "set", "value": 3400 },

    { "name": "out", "value": 3600 },

    { "name": "nov", "value": 3100 },

    { "name": "dec", "value": 2700 }

  ]

  ~~~`
];

const simulationData = {
  avatarUser: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+%C3%A0(s)+16.04.19_0e0cf0ae.jpg',
  interactions: 1000000,
  planUser: "company"
}

export default function PlaygroundPage() {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [chatID, setChatID] = useState<string>("");
  const generateChatID = () => `chat_${Math.random().toString(36).substr(2, 9)}${Date.now()}`;
  const [selectedModel, setSelectedModel] = useState<string>('cleo');
  const [selectedTabs, setSelectedTabs] = useState<string>('vtn-basic');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [copiedMessages, setCopiedMessages] = useState<{ [index: number]: boolean }>({});
  const [reportedMessages, setReportedMessages] = useState<{ [index: number]: boolean }>({});
  const [stopMessage, setStopMessage] = useState<boolean>(false);
  const [currentAIMessage, setCurrentAIMessage] = useState<string>("");
  const [remainingInteractions, setRemainingInteractions] = useState<number>(simulationData.interactions);
  const [hoveredMessageIndex, setHoveredMessageIndex] = useState<number | null>(null);
  const [messages, setMessages] = useState<{ text: string; sender: string, files?: File[] }[]>([]);
  const [instruction, setInstruction] = useState('');

  const handleInstructionChange = (newInstruction: string) => {
    setInstruction(newInstruction);
  };

  const { uploadFiles } = useUploadFile(
    "fileUploader",
    { defaultUploadedFiles: [] }
  )

  const handleCopyClick = () => {
    setCopied(true);
    navigator.clipboard.writeText(chatID).then(() => {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  }

  const handleCopyResponseClick = (index: number, message: string) => {
    const formattedMessage = formatMessage(message);
    navigator.clipboard.writeText(formattedMessage).then(() => {
      setCopiedMessages(prevCopied => ({ ...prevCopied, [index]: true }));

      setTimeout(() => {
        setCopiedMessages(prevCopied => ({ ...prevCopied, [index]: false }));
      }, 5000);
    });
  };

  const handleReportClick = (index: number) => {
    setReportedMessages(prevReported => ({ ...prevReported, [index]: true }));
  };

  const formatMessage = (message: string) => {
    message = message.replace(/~~~[\s\S]*?~~~/g, "[Gráfico]")
      .replace(/%%IMAGE%.*?%%IMAGE%/g, "[Imagem]");
    message = message.replace(/\\\[.*?\\\]/g, (match) => {
      return "[Fórmula]: " + match.replace(/\\\[/g, "").replace(/\\\]/g, "");
    });
    message = message.replace(/```/g, "");

    return message;
  };

  const handleMouseEnter = (index: number) => {
    setHoveredMessageIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredMessageIndex(null);
  };

  const adjustTextareaHeight = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, window.innerHeight * 0.8) + 'px';
  }

  const useAutosizeTextArea = (textareaRef: RefObject<HTMLTextAreaElement>, value: string) => {
    useEffect(() => {
      const textarea = textareaRef.current;
      if (textarea) {
        adjustTextareaHeight(textarea);
        const handler = () => adjustTextareaHeight(textarea);
        textarea.addEventListener('input', handler);

        return () => {
          textarea.removeEventListener('input', handler);
        };
      }
    }, [textareaRef, value]);
  }

  const textAreaRef2 = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef2, currentMessage);

  const handleSendMessage = (message: string, files: File[]) => {
    if (message.trim()) {
      setIsSending(true);
      setMessages(prevMessages => [...prevMessages, { text: message, sender: "user", files }]);
      setCurrentMessage("");
      setRemainingInteractions(prev => prev - (selectedTabs == "vtn-pro" ? 2 : 1));
      setTimeout(() => {

        const aiMessage = getFakeResponse();
        typeAIMessage(aiMessage);
      }, 4000);
    }
    if (files.length > 0) {
      uploadFiles(files)
        .then(() => { })
        .catch(err => { });
    }
  };

  useEffect(() => {
    setChatID(generateChatID());
  }, []);

  const handleNewChat = () => {
    setMessages([]);
    setChatID(generateChatID());
    setReportedMessages([]);
    setCopiedMessages([]);
  };

  const handleClearChat = () => {
    setMessages([]);
    setReportedMessages([]);
    setCopiedMessages([]);
  };

  const handlePauseIA = () => {

    if (isSending) {
      setStopMessage(true);
      setIsSending(false);

      if (renderNextCharacterRef.current !== null) {
        cancelAnimationFrame(renderNextCharacterRef.current);
        renderNextCharacterRef.current = null;
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `${currentAIMessage}...`, sender: selectedModel },
      ]);

      setStopMessage(true);
      setIsSending(false);
      setCurrentAIMessage("");
      setStopMessage(false)
    } else {
    }
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getFakeResponse = () => {
    return fakeResponse[Math.floor(Math.random() * fakeResponse.length)];
  };

  const renderNextCharacterRef = useRef<number | null>(null);

  const typeAIMessage = (message: string) => {
    let currentIndex = 0;
    let currentMessageBuffer: string[] = [];
    const specialElementRegex = /%%IMAGE%.*?%%IMAGE%|~~~[\s\S]*?~~~|\\\[.*?\\\]/g;
    let parts: string[] = [];
    let match: RegExpExecArray | null;
    let lastIndex = 0;

    while ((match = specialElementRegex.exec(message)) !== null) {
      if (match.index > lastIndex) {
        parts.push(message.substring(lastIndex, match.index));
      }
      parts.push(match[0]);
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < message.length) {
      parts.push(message.substring(lastIndex));
    }

    const renderNextCharacter = () => {
      if (stopMessage) {
        return;
      }

      if (currentIndex < parts.length) {
        const part = parts[currentIndex];
        if (specialElementRegex.test(part)) {
          currentMessageBuffer.push(part);
          setCurrentAIMessage(currentMessageBuffer.join(""));
          currentIndex++;
          renderNextCharacterRef.current = requestAnimationFrame(renderNextCharacter);
        } else {
          if (part.length > 0) {
            currentMessageBuffer.push(part.charAt(0));
            setCurrentAIMessage(currentMessageBuffer.join(""));
            parts[currentIndex] = part.slice(1);
            renderNextCharacterRef.current = requestAnimationFrame(renderNextCharacter);
          } else {
            currentIndex++;
            renderNextCharacterRef.current = requestAnimationFrame(renderNextCharacter);
          }
        }
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: currentMessageBuffer.join(""),
            sender: selectedModel,
          },
        ]);
        setCurrentAIMessage("");
        setIsSending(false);
      }
    };

    renderNextCharacterRef.current = requestAnimationFrame(renderNextCharacter);
  };

  const handleModelChange = (newModel: string) => {
    setSelectedModel(newModel);
    handleNewChat();
  };

  const handleTabsChange = (newTab: string) => {
    setSelectedTabs(newTab);
  };

  function formatNumber(value: number) {
    return new Intl.NumberFormat('pt-BR').format(value);
  }

  const formatFileName = (fileName: string, maxLength: number = 15) => {
    if (fileName.length > maxLength) {

      return `${fileName.substring(0, maxLength / 2)}...${fileName.substring(fileName.length - maxLength / 2)}`;
    }

    return fileName;
  };

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="ml-10 flex flex-col sm:flex-row sm:items-center justify-between md:h-16 space-y-2 sm:space-y-0 py-4">
          <h2 className="text-lg font-semibold">Playground</h2>
          <div className=" mr-5 sm:ml-auto text-sm text-neutral-400 dark:text-neutral-600">
            Você possui {formatNumber(remainingInteractions)} interações
          </div>
        </div>
        <Separator />
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <CommandPlayground
            isSending={isSending}
            planUser={simulationData.planUser}
            remainingInteractions={remainingInteractions}
            selectedModel={selectedModel}
            selectedTabs={selectedTabs}
            handleModelChange={handleModelChange}
            handleTabsChange={handleTabsChange}
            handleNewChat={handleNewChat}
            handleInstructionChange={handleInstructionChange}
          />
          <div className="relative flex h-[calc(100vh-165px)] flex-col rounded-xl bg-neutral-100 dark:bg-neutral-900 p-4 lg:col-span-2 border">
            <p className="text-sm text-neutral-400 dark:text-neutral-700">
              {chatID}
              <Button variant="ghost3" size="icon4" className='ml-3' onClick={handleCopyClick}>
                {copied ? <Check className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
              </Button>
            </p>
            <Badge variant="outline" className="absolute right-3 top-4">
              {selectedModel || 'Selecione um modelo'}
            </Badge>
            <div className="flex-1 overflow-auto my-4">
              <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 my-4 ${message.sender === "user" ? "mt-3" : ""}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className={`flex gap-2 ${message.sender !== "user" ? "items-start" : ""}`}>
                      {message.sender === "user" &&
                        <div className="bg-neutral-100 dark:bg-neutral-900 px-1 text-xs font-semibold z-10">
                          <Avatar>
                            <AvatarImage src={simulationData.avatarUser} alt="avatar-user" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>
                      }
                      <div className="flex flex-col w-full">
                        <div
                          className={`p-2 flex-1 border text-sm rounded-xl break-words max-w-full whitespace-pre-wrap  
              ${message.sender === "user" ? "bg-transparent" : "bg-neutral-200 dark:bg-neutral-800"}`}
                        >
                          {message.files && message.files.length > 0 && (
                            <div className="mb-5">
                              <ScrollArea className="w-full h-auto mb-2">
                                <div className="flex space-x-3">
                                  {message.files.map((file, fileIndex) => (
                                    <div
                                      key={fileIndex}
                                      className="p-1 border rounded-lg bg-neutral-200 dark:bg-neutral-800 text-xs w-32 truncate"
                                    >
                                      <span>{formatFileName(file.name)}</span>
                                      <a
                                        href={URL.createObjectURL(file)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-xs mt-1 text-[#6600FF] dark:text-[#6600FF]"
                                      >
                                        Visualizar
                                      </a>
                                    </div>
                                  ))}
                                </div>
                                <ScrollBar orientation="horizontal" />
                              </ScrollArea>
                            </div>
                          )}
                          {message.sender !== "user" ? <TextRenderer text={message.text} /> : message.text}
                        </div>
                        {message.sender !== "user" && (
                          <div
                            key={`buttons-${index}`}
                            className="flex gap-2 mt-2"
                            style={{ visibility: (hoveredMessageIndex === index || index === messages.length - 1) ? 'visible' : 'hidden' }}
                          >
                            <Button variant="gooeyLeft2" size="icon3" onClick={() => handleCopyResponseClick(index, message.text)}>
                              {copiedMessages[index] ? <Check className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
                            </Button>
                            <Button variant="gooeyLeft2" size="icon3" onClick={() => handleReportClick(index)}>
                              {reportedMessages[index] ? <ThumbsDownIcon className="h-3 w-3 fill-current" /> : <ThumbsDownIcon className="h-3 w-3" />}
                            </Button>
                          </div>
                        )}
                      </div>
                      {message.sender !== "user" &&
                        <div className="bg-neutral-100 dark:bg-neutral-900 px-1 text-xs font-semibold z-10">
                          <Avatar>
                            <AvatarImage src={selectedModel.includes("gpt") ? "/openai-logo.jpg" : selectedModel.includes("gemini") ? "/gemini-logo.jpg" : "/vistune-dark-perfil.png"} alt="@shadcn" />
                          </Avatar>
                        </div>
                      }
                    </div>
                  </div>
                ))}
                {isSending && currentAIMessage && (
                  <div className="mb-4 my-4 flex gap-2 items-start">
                    <div className="p-2 border text-sm rounded-xl break-words max-w-full whitespace-pre-wrap bg-neutral-200 dark:bg-neutral-800 flex-1">
                      <TextRenderer text={currentAIMessage} />
                    </div>
                    <div className="bg-neutral-100 dark:bg-neutral-900 px-1 text-xs font-semibold z-10">
                      <Avatar>
                        <AvatarImage src={selectedModel.includes("gpt") ? "/openai-logo.jpg" : selectedModel.includes("gemini") ? "/gemini-logo.jpg" : "/vistune-dark-perfil.png"} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                )}
                {isSending && !currentAIMessage && (
                  <div className="flex items-center space-x-4 w-full mt-4">
                    <div className="space-y-2 flex-grow">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-96" />
                    </div>
                    <Skeleton className="h-11 w-11 rounded-full flex-shrink-0" />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <InputPlayground
              isSending={isSending}
              remainingInteractions={remainingInteractions}
              textAreaRef2={textAreaRef2}
              currentMessage={currentMessage}
              setCurrentMessage={setCurrentMessage}
              handleSendMessage={handleSendMessage}
              handleClearChat={handleClearChat}
              handlePauseIA={handlePauseIA}
              handleNewChat={handleNewChat}
            />
          </div>
        </main >
      </div >
    </>
  )
}
