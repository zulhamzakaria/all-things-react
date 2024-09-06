import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Book, PlusCircle, Settings } from "lucide-react";
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
        <h1>no post</h1>
      ) : (
        <h1>data</h1>
      )}
    </>
  );
};

export default Site;
