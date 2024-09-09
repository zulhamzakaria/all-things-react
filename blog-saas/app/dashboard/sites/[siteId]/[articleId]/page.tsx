import { EditArticleForm } from "@/app/components/dashboard/forms/EditArticleForm";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getArticle(articleId: string) {
  const article = await prisma.post.findUnique({
    where: {
      id: articleId,
    },
    select: {
      imageUrl: true,
      title: true,
      smallDescription: true,
      slug: true,
      articleContent: true,
      id: true,
    },
  });

  if (!article) {
    return notFound();
  }

  return article;
}

export default async function EditArticle({
  params,
}: {
  params: { articleId: string; siteId: string };
}) {
  const article = await getArticle(params.articleId);
  return (
    <div>
      <div className=" flex items-center">
        <Button size={"icon"} variant={"outline"} className=" mr-2" asChild>
          <Link href={`/dashboard/sites/${params.siteId}`}>
            <ArrowLeft className=" size-4" />
          </Link>
        </Button>
        <h1 className=" text-2xl font-semibold">Edit Article</h1>
      </div>
      <EditArticleForm article={article} />
    </div>
  );
}
