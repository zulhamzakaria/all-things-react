import { EmptyState } from "@/app/components/dashboard/EmptyState";
import prisma from "@/app/utils/db";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  Book,
  FileIcon,
  MoreHorizontal,
  PlusCircle,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getPosts(userId: string, siteId: string) {
  // let data = await prisma.post.findMany({
  //   where: {
  //     userId: userId,
  //     siteId: siteId,
  //   },
  //   select: {
  //     imageUrl: true,
  //     title: true,
  //     createdAt: true,
  //     id: true,
  //     Site: {
  //       select: {
  //         subdirectory: true,
  //       },
  //     },
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  const data = await prisma.site.findUnique({
    where: {
      id: siteId,
      userId: userId,
    },
    select: {
      subdirectory: true,
      posts: {
        select: {
          imageUrl: true,
          title: true,
          createdAt: true,
          id: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return data;
}

const Site = async ({ params }: { params: { siteId: string } }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/api/auth/login");

  const data = await getPosts(user.id, params.siteId);

  return (
    <>
      <div className=" flex w-full justify-end gap-x-4">
        {/* asChild cause theres a link component */}
        <Button asChild variant={"secondary"}>
          <Link
            href={`/blog/${data?.subdirectory}`}
            className=" gap-2"
          >
            <Book className=" size-4" />
            View Blog
          </Link>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link
            href={`/dashboard/sites/${params.siteId}/settings`}
            className=" gap-2"
          >
            <Settings className=" size-4" />
            Settings
          </Link>
        </Button>
        <Button asChild>
          <Link
            href={`/dashboard/sites/${params.siteId}/create`}
            className=" gap-2"
          >
            <PlusCircle className=" size-4" />
            Create Article
          </Link>
        </Button>
      </div>
      {data?.posts === undefined || data.posts.length === 0 ? (
        <EmptyState
          title="You do not have any Articles created"
          description="You currently do not have any articles. Please create the by clicking the 'Create Article' button"
          href={`/dashboard/sites/${params.siteId}/create`}
          buttonText="Create Article"
        />
      ) : (
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Articles</CardTitle>
              <CardDescription>
                Manage your Articles in a simple and intuitive interface
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className=" text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>
                        <Image
                          src={post.imageUrl}
                          alt="🖼️"
                          width={69}
                          height={69}
                          className=" size-16 rounded-md object-cover"
                        />
                      </TableCell>
                      <TableCell className=" font-medium">
                        {post.title}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={"outline"}
                          className=" bg-green-500/10 text-green-500"
                        >
                          Published
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Intl.DateTimeFormat("en-GB", {
                          dateStyle: "medium",
                        }).format(post.createdAt)}
                      </TableCell>
                      <TableCell className=" text-end">
                        <DropdownMenu>
                          {/* asChild cause theres a button */}
                          <DropdownMenuTrigger asChild>
                            <Button size={"icon"} variant="ghost">
                              <MoreHorizontal className=" size-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {/* asChild cause it contains Link component */}
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/dashboard/sites/${params.siteId}/${post.id}`}
                              >
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            {/* asChild cause it contains Link component */}
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/dashboard/sites/${params.siteId}/${post.id}/delete`}
                              >
                                Delete
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Site;
