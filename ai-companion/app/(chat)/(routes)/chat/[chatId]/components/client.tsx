"use client";

import ChatHeader from "@/components/chat-header";
import { Companion, Message } from "@prisma/client";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

const ChatClient = ({ companion }: ChatClientProps) => {
  return (
    <div className="flex flex-col h-full space-y-2">
      <ChatHeader companion={companion} />
    </div>
  );
};

export default ChatClient;
