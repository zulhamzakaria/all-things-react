import { ragChat } from "@/lib/rag-chat";

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
  const url = reconstructUrl({ url: params.url as string[] });
  await ragChat.context.add({
    type: "html",
    source: url,
    config: { chunkOverlap: 50, chunkSize: 200 },
  });

  return <p>{params.url}</p>;
};

export default Page;
