import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  params: { slug: string; name: string };
}) {
  const post = await getPost(params.slug);
  return (
    <>
      <div className=" flex items-center gap-x-3 pt-10 pb-5">
        {/* asChild since theres a Link inside */}
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={`/blog/${params.name}`}>
            <ChevronLeft className=" size-4" />
          </Link>
        </Button>
        <h1 className=" text-xl font-medium">Go Back</h1>
      </div>

      <div className=" flex flex-col items-center justify-center mb-10 ">
        <div className=" m-auto w-full text-center md:w-7/12">
          <p className=" m-auto my-5 w-10/12 text-sm font-light text-muted-foreground md:text-base">
            16 Apr 2024
          </p>
          <h1 className=" mb-5 text-3xl font-bold md:text-6xl tracking-tight">
            {post.title}
          </h1>
          <p className=" m-auto w-10/12 text-muted-foreground line-clamp-3">
            {post.smallDescription}
          </p>
        </div>
      </div>

      <div className=" flex items-center relative m-auto mb-10 h-80 md:rounded-2xl lg:w-2/3 md:w-5/6 md:mb-20 md:h-[450px] w-full max-w-screen-lg overflow-hidden">
        <Image
          src={post.imageUrl}
          alt="🖼️"
          height={1200}
          width={630}
          className=" object-cover h-full w-full"
          priority
        />
      </div>
    </>
  );
}
