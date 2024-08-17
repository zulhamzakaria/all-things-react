import { cn } from "@/lib/utils";
import React from "react";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div
      className={cn({
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25": !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="max-w-3xl mx-auto flex items-start gap-2.5">
          <div
            // display ai and user's message differently
            className={cn(
              "size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center ",
              {
                "bg-blue-950 border-blue-700 text-zinc-200": isUserMessage,
              }
            )}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Message;
