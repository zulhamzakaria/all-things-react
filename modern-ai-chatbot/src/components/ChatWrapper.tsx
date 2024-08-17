"use client";

import { useChat } from "ai/react";

interface ChatWrapperProps {
  sessionId: string;
}

const ChatWrapper = ({ sessionId }: ChatWrapperProps) => {
  const { messages, handleInputChange, input } = useChat({
    // data source for ai
    api: "/api/chat-stream",
    // added session for isolation
    body: { sessionId },
  });
  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        {JSON.stringify(messages)}
      </div>
      <input value={input} onChange={handleInputChange} type="text" />
    </div>
  );
};

export default ChatWrapper;
