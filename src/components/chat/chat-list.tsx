import React, { useState, useRef, useEffect } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import ChatBottombar from "./chat-bottombar";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Message, UserData } from "@/app/(main)/(pages)/chat/data";
import { ptBR } from "date-fns/locale";
import { differenceInDays, differenceInMinutes, formatRelative } from "date-fns";
import DialogEditChat from "../global/dialog-edit-chat";
import DialogDeleteChat from "../global/dialog-delete-chat";
import Image from "next/image";

interface ChatListProps {
  messages?: Message[];
  selectedUser: UserData;
  sendMessage: (newMessage: Message) => void;
  isMobile: boolean;
}

const renderMessageContent = (message: Message) => {
  switch (message.type) {
    case 'text':
      return <div>{message.message}</div>;
    case 'image':
      return <Image src={message.message} alt="image" style={{ maxWidth: '100%' }} />;
    case 'image/jpeg':
      return <Image src={message.message} alt="image" style={{ maxWidth: '100%' }} />;
    case 'image/png':
      return <Image src={message.message} alt="image" style={{ maxWidth: '100%' }} />;
    case 'video':
      return <video controls src={message.message} style={{ maxWidth: '100%' }} />;
    case 'video/mp4':
      return <video controls src={message.message} style={{ maxWidth: '100%' }} />;
    case 'audio/mpeg':
      return <audio controls src={message.message} />;
    case 'audio':
      return <audio controls src={message.message} />;
    case 'pdf':
      return <iframe src={message.message} style={{ width: '100%', height: '300px' }} />;
    case 'application/pdf':
      return <iframe src={message.message} style={{ width: '100%', height: '300px' }} />;
    case 'txt':
      return <iframe src={message.message} style={{ width: '100%', height: '300px' }} />;
    case 'text/plain':
      return <iframe src={message.message} style={{ width: '100%', height: '300px' }} />;
    default:
      return <div>{message.message}</div>;
  }
};

export function ChatList({
  messages,
  selectedUser,
  sendMessage,
  isMobile
}: ChatListProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [chatMessages, setChatMessages] = useState<Message[] | undefined>(messages);

  useEffect(() => {
    setChatMessages(messages);
  }, [messages]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSaveMessage = (messageId: number, newMessageContent: string) => {
    if (chatMessages) {
      const updatedMessages = chatMessages.map((msg) => {
        if (msg.id === messageId) {
          return { ...msg, message: newMessageContent };
        }
        return msg;
      });
      setChatMessages(updatedMessages);
    }
  };

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col bg-[#ededed] dark:bg-[#141414]">
      <div ref={messagesContainerRef} className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
        <AnimatePresence>
          {chatMessages?.map((message) => (
            <motion.div
              key={message.id}
              layout
              initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
              transition={{
                opacity: { duration: 0.1 },
                layout: { type: "spring", bounce: 0.3, duration: chatMessages.indexOf(message) * 0.05 + 0.2 },
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className={cn("flex flex-col gap-2 p-4 whitespace-pre-wrap", message.name !== selectedUser.name ? "items-end" : "items-start")}
            >
              <div className="flex gap-3 items-top">
                {message.name === selectedUser.name ? (
                  <div className="flex gap-3 items-top">
                    <Avatar className="flex justify-top items-top">
                      <AvatarImage
                        src={message.avatar ? message.avatar : 'default-1.png'}
                        alt={message.name}
                        width={4}
                        height={4}
                      />
                    </Avatar>
                    <div className="bg-neutral-50 dark:bg-[#292929] p-3 rounded-md max-w-xs break-words">
                      {renderMessageContent(message)}
                      <div className="flex justify-end items-center mt-2 text-sm text-zinc-500">
                        {formatRelative(new Date(message.date ? message.date : Date.now()), new Date(), { locale: ptBR })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex gap-3 items-center">
                      {message.message && message.message !== 'Essa mensagem foi apagada' &&
                        <div className="flex flex-col gap-2">
                          {(Math.abs(differenceInDays(Date(), message.date)) == 0 && Math.abs(differenceInMinutes(Date(), message.date)) < 15 || !message.date)
                            && (message.type == 'text' || !message.type) &&
                            <DialogEditChat
                              message={message.message}
                              messageId={message.id}
                              onSave={handleSaveMessage}
                            />
                          }
                          {(Math.abs(differenceInDays(Date(), message.date)) <= 2 || !message.date) &&
                            <DialogDeleteChat
                              message={message.message}
                              messageId={message.id}
                              onSave={handleSaveMessage}
                            />
                          }
                        </div>
                      }
                      <div className="bg-[#dedede] dark:bg-[#242424] p-3 rounded-md max-w-xs break-words">
                        {message.message === 'Essa mensagem foi apagada' ?
                          <div>{message.message}</div> :
                          renderMessageContent(message)}
                        <div className="flex justify-end items-center mt-2 text-sm text-zinc-500">
                          {formatRelative(new Date(message.date ? message.date : Date.now()), new Date(), { locale: ptBR })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {message.name === selectedUser.name ? '' : <div className="flex gap-3 items-top">
                  <Avatar className="flex justify-top items-top">
                    <AvatarImage
                      src={message.avatar ? message.avatar : 'https://example.com/default-avatar.png'}
                      alt={message.name}
                      width={4}
                      height={4}
                    />
                  </Avatar>
                </div>}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <ChatBottombar sendMessage={sendMessage} isMobile={isMobile} data={messages} />
    </div>
  );
}
