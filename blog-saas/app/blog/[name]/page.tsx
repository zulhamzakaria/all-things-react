import { ThemeToggle } from "@/app/components/dashboard/ThemeToggle";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getSubdirectory(subdirectory: string) {
  const data = await prisma.site.findUnique({
    where: {
      subdirectory: subdirectory,
    },
    select: {
      name: true,
      posts: {
        select: {
          smallDescription: true,
          title: true,
          imageUrl: true,
          createdAt: true,
          slug: true,
          id: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}

export default async function BlogIndexPage({
  params,
}: {
  params: { name: string };
}) {
  const subDirectory = await getSubdirectory(params.name);
  return (
    <>
      <nav className=" grid grid-cols-3 my-10">
        <div className=" col-span-1" />
        <div className=" flex items-center gap-x-2 justify-center">
          <Image src="/logo1.png" alt="logo" width={40} height={40} />
          <h1 className=" text-3xl font-semibold">{subDirectory.name} </h1>
        </div>

        <div className=" col-span-1 flex w-full justify-end">
          <ThemeToggle />
        </div>
      </nav>

      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {subDirectory.posts.map((post) => (
          <Card key={post.id}>
            <Image
              src={post.imageUrl ?? "/logo1.png"}
              alt={post.title}
              width={400}
              height={200}
              className=" rounded-t-lg object-cover w-full h-[200px]"
            />
            <CardHeader>
              <CardTitle className=" capitalize truncate">
                {post.title}
              </CardTitle>
              <CardDescription className=" line-clamp-2">
                {post.smallDescription}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              {/* button contains a child */}
              <Button asChild className=" w-full">
                <Link href={`/blog/${params.name}/${post.slug}`}>
                  View article
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
