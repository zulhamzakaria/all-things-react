import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Book, FileIcon, PlusCircle, Settings } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getPosts(userId: string, siteId: string) {
  const data = await prisma.post.findMany({
    where: {
      userId: userId,
      siteId: siteId,
    },
    select: {
      imageUrl: true,
      title: true,
      createdAt: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

const Site = async ({ params }: { params: { siteId: string } }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/api/auth/login");

  const posts = await getPosts(user.id, params.siteId);

  return (
    <>
      <div className=" flex w-full justify-end gap-x-4">
        {/* asChild cause theres a link component */}
        <Button asChild variant={"secondary"}>
          <Link href={"#"} className=" gap-2">
            <Book className=" size-4" />
            View Blog
          </Link>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link href={"#"} className=" gap-2">
            <Settings className=" size-4" />
            Settings
          </Link>
        </Button>
        <Button asChild>
          <Link href={"#"} className=" gap-2">
            <PlusCircle className=" size-4" />
            Create Article
          </Link>
        </Button>
      </div>
      {posts === undefined || posts.length === 0 ? (
        <div className=" flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
          <div className=" flex size-20 items-center justify-center rounded-full bg-primary/10">
            <FileIcon className=" size-10 text-primary " />
          </div>
          <h2 className=" mt-6 text-xl font-semibold">
            You have 0 site created
          </h2>
          <p className=" max-w-sm mx-auto mb-8 text-center text-sm leading-tight text-muted-foreground">
            Please create some so that you can see them right here
          </p>
          <Button asChild>
            <Link href={"/dashboard/sites/new"}>
              <PlusCircle className=" size-4 mr-2" /> Site
            </Link>
          </Button>
        </div>
      ) : (
        <h1>data</h1>
      )}
    </>
  );
};

export default Site;
