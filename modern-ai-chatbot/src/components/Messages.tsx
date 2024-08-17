import { Message as TMessage } from "ai/react";

interface MessagesProps {
  messages: TMessage[];
}

const Messages = ({ messages }: MessagesProps) => {
  return <div>Messages</div>;
};

export default Messages;
