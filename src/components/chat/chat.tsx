import React, { useEffect } from "react";
import { ChatList } from "./chat-list";
import { Message, UserData } from "@/app/(main)/(pages)/chat/data";

interface ChatProps {
  messages?: Message[];
  selectedUser: UserData;
  isMobile: boolean;
}

export function Chat({ messages = [], selectedUser, isMobile }: ChatProps) {
  const [messagesState, setMessages] = React.useState<Message[]>(messages);

  // Atualizar o estado local quando as propriedades `messages` mudar
  useEffect(() => {
    setMessages(messages);
  }, [messages]);

  const sendMessage = (newMessage: Message) => {
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  return (
      <ChatList
        messages={messagesState}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
  );
}