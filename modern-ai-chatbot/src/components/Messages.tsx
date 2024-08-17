import { Message as TMessage } from "ai/react";
import Message from "./Message";

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
        <div></div>
      )}
    </div>
  );
};

export default Messages;
