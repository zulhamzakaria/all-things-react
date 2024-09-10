import prisma from "@/app/utils/db";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  const data = await prisma.post.findUnique({
    where: {
      slug,
    },
    select: {
      title: true,
      imageUrl: true,
      smallDescription: true,
      articleContent: true,
    },
  });
  if (!data) return notFound();
  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  return <h1>{post.imageUrl}</h1>;
}
