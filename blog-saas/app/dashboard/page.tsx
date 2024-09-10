import { title } from "process";
import { EmptyState } from "../components/dashboard/EmptyState";
import prisma from "../utils/db";
import { requireUser } from "../utils/requireUser";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

async function getData(userId: string) {
  // run prisma query in parallel
  const [sites, articles] = await Promise.all([
    prisma.site.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    }),
    prisma.post.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    }),
  ]);

  return { sites, articles };
}

const DashboardIndexPage = async () => {
  const user = await requireUser();
  const { sites, articles } = await getData(user.id);
  return (
    <div>
      <h1 className=" text-2xl font-semibold mb-5">Your sites</h1>
      {sites.length > 0 ? (
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {sites.map((site) => (
            <Card key={site.id}>
              <Image
                src={site.imageUrl ?? "/logo1.png"}
                alt={site.name}
                width={400}
                height={200}
                className=" rounded-t-lg object-cover w-full h-[200px]"
              />
              <CardHeader>
                <CardTitle className=" capitalize truncate">
                  {site.name}
                </CardTitle>
                <CardDescription className=" line-clamp-2">
                  {site.description}
                </CardDescription>
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
      ) : (
        <EmptyState
          title="You dont have any sites created"
          description="0 Site found"
          href="/dashboard/sites/new"
          buttonText="Create Sites"
        />
      )}

      <h1 className=" text-2xl mt-10 font-semibold">Recent Articles</h1>
      {articles.length > 0 ? (
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {articles.map((article) => (
            <Card key={article.id}>
              <Image
                src={article.imageUrl ?? "/logo1.png"}
                alt={article.title}
                width={400}
                height={200}
                className=" rounded-t-lg object-cover w-full h-[200px]"
              />
              <CardHeader>
                <CardTitle className=" capitalize truncate">
                  {article.title}
                </CardTitle>
                <CardDescription className=" line-clamp-2">
                  {article.smallDescription}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                {/* button contains a child */}
                <Button asChild className=" w-full">
                  <Link
                    href={`/dashboard/sites/${article.siteId}/${article.id}`}
                  >
                    Edit Article
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          title="You dont have any Articles written"
          description="0 Article found"
          href="/dashboard/sites"
          buttonText="Create Article"
        />
      )}
    </div>
  );
};

export default DashboardIndexPage;
