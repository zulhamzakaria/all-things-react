import { Message as TMessage } from "ai/react";
import Message from "./Message";
import { MessageSquare } from "lucide-react";

interface MessagesProps {
  messages: TMessage[];
}

const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className=" flex-1 flex-col overflow-y-auto flex max-h-[calc(100vh-3.5rem-7rem)]">
      {messages ? (
        messages.map((msg, idx) => (
          <Message
            key={idx}
            content={msg.content}
            isUserMessage={msg.role === "user"}
          />
        ))
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="font-semibold text-xl">yuore all set</h3>
        </div>
      )}
    </div>
  );
};

export default Messages;
