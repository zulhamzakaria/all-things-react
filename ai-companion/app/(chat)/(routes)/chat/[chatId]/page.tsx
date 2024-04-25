interface ChatIdPageProps {
  params: {
    chatId: string;
  };
}

import prismaDb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ChatClient from "./components/client";

const ChatIdPage = async ({ params }: ChatIdPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return auth().redirectToSignIn();
  }

  const companion = await prismaDb.companion.findUnique({
    where: { id: params.chatId },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc",
        },
        where: {
          userId,
        },
      },
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });

  if (!companion) {
    return redirect("/");
  }

  return (
    <div>
      <ChatClient companion={companion} />
    </div>
  );
};

export default ChatIdPage;
