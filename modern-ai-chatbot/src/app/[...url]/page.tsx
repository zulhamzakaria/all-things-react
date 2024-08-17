import ChatWrapper from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponents = url.map((component) =>
    decodeURIComponent(component)
  );
  // joins the elements with a /
  return decodedComponents.join("/");
}

const Page = async ({ params }: PageProps) => {
  const sessionCookie = cookies().get("sessionId")?.value;
  const url = reconstructUrl({ url: params.url as string[] });

  const sessionId = (reconstructUrl + "_" + sessionCookie).replace(/\//g, "");

  //check if the website page has been indexed/added to vector db
  const isAlreadyIndexed = redis.sismember("indexed-url", reconstructUrl);

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: url,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });
    await redis.sadd("indexed-url", reconstructUrl);
  }

  return <ChatWrapper sessionId={sessionId} />;
};

export default Page;
