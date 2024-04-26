"use client";

import { Companion } from "@prisma/client";

interface ChatMessagesProps {
  messages: any[];
  isLoading: boolean;
  companion: Companion;
}

export const ChatMessages = ({
  messages = [],
  isLoading,
  companion,
}: ChatMessagesProps) => {
  return <div className="flex-1 overflow-y-auto pr-4">Chat messages!</div>;
};
