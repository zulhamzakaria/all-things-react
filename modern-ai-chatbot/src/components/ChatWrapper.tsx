"use client";

import { useChat } from "ai/react";
import Messages from "./Messages";

interface ChatWrapperProps {
  sessionId: string;
}

const ChatWrapper = ({ sessionId }: ChatWrapperProps) => {
  const { messages, handleInputChange, handleSubmit, input } = useChat({
    // data source for ai
    api: "/api/chat-stream",
    // added session for isolation
    body: { sessionId },
  });
  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        <Messages messages={messages}>
      </div>

      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} type="text" />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default ChatWrapper;
