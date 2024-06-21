import {
  FileImage,
  Heart,
  Paperclip,
  SendHorizontal,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { EmojiPicker } from "../emoji/emoji-picker";
import { TextAreaSlim } from "../ui/text-area-slim";
import { Message, loggedInUserData } from "@/app/(main)/(pages)/chat/data";
import { DialogSendFile } from "./chat-send-file";
import { UploadedFile } from "@/lib/types";

interface ChatBottombarProps {
  sendMessage: (newMessage: Message) => void;
  isMobile: boolean;
  currentUser?: string;
  data?: Message[];
}

export const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }];

export default function ChatBottombar({
  sendMessage, isMobile, currentUser, data
}: ChatBottombarProps) {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const dataLength = data?.length;
  const newId = dataLength ? dataLength + 1 : 0

  useEffect(() => {
    setMessage("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [data]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleFilesUpload = (uploadResult: UploadedFile<unknown>[]) => {
    uploadResult.forEach((file, index) => {
      const newMessage: Message = {
        id: newId + index,
        name: loggedInUserData.name,
        avatar: loggedInUserData.avatar,
        message: file.url,
        phone: '+5562985095500',
        type: file.type,
        date: new Date().toISOString(),
      };
      sendMessage(newMessage);
    });
    setMessage("");
  };

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: newId,
        name: loggedInUserData.name,
        avatar: loggedInUserData.avatar,
        message: message.trim(),
        phone: '',
        type: '',
        date: ''
      };
      sendMessage(newMessage);
      setMessage("");

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }

    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setMessage((prev) => prev + "\n");
    }
  };

  return (
    <div className="p-2 flex justify-between w-full items-center gap-2">
      <DialogSendFile onFilesUpload={handleFilesUpload} />
      <AnimatePresence initial={false}>
        <motion.div
          key="input"
          className="w-full relative"
          layout
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            opacity: { duration: 0.05 },
            layout: {
              type: "spring",
              bounce: 0.15,
            },
          }}
        >
          <TextAreaSlim
            autoComplete="off"
            value={message}
            ref={inputRef}
            onKeyDown={handleKeyPress}
            onChange={handleInputChange}
            name="message"
            placeholder="Mensagem"
            className=" w-full border rounded-full flex items-center h-9 resize-none overflow-hidden bg-background"
          ></TextAreaSlim>
          <div className="absolute right-2 bottom-0.5  ">
            <EmojiPicker onChange={(value) => {
              setMessage(message + value)
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }} />
          </div>
        </motion.div>

        {message.trim() ? (
          <Link
            href="#"
            onClick={handleSend}
          >
            <Button variant={"gooeyLeftDark"} size={"icon"}>
              <SendHorizontal size={18} />
            </Button>
          </Link> 
        ) : (
          null
        )}
      </AnimatePresence>
    </div>
  );
}
