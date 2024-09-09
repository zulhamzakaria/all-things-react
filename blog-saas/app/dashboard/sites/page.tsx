import { EmptyState } from "@/app/components/dashboard/EmptyState";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FileIcon, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getSites(userId: string) {
  const data = await prisma.site.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

const SitesPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return redirect("/api/auth/login");

  const data = await getSites(user.id);
  return (
    <>
      <div className=" flex w-full justify-end">
        <Button asChild>
          <Link href={"/dashboard/sites/new"}>
            <PlusCircle className=" size-4 mr-2" /> Site
          </Link>
        </Button>
      </div>

      {data === undefined || data.length === 0 ? (
        <EmptyState
          title="You do not have any site created."
          description="Please create some so that you can see them right here"
          buttonText="Create Site"
          href="/dashboard/sites/new"
        />
      ) : (
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {data.map((site) => (
            <Card key={site.id}>
              <Image
                src={site.imageUrl ?? "/logo1.png"}
                alt={site.name}
                width={400}
                height={200}
                className=" rounded-t-lg object-cover w-full h-[200px]"
              />
              <CardHeader>
                <CardTitle className=" capitalize">{site.name}</CardTitle>
                <CardDescription>{site.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                {/* button contains a child */}
                <Button asChild className=" w-full">
                  <Link href={`/dashboard/sites/${site.id}`}>
                    View articles
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default SitesPage;
