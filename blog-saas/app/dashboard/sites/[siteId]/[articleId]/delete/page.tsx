import { SubmitButton } from "@/app/components/dashboard/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function DeleteArticle({
  params,
}: {
  params: {
    siteId: string;
    articleId: string;
  };
}) {
  return (
    <div className=" flex flex-1 items-center justify-center">
      <Card className=" max-w-xl">
        <CardHeader>
          <CardTitle>Are you sure?</CardTitle>
          <CardDescription>
            This action will delete the data from the database and irreversible
          </CardDescription>
        </CardHeader>
        <CardFooter className=" w-full flex justify-between">
          <Button variant={"secondary"} asChild>
            <Link href={`/dashboard/sites/${params.siteId}`}>Cancel</Link>
          </Button>
          <form>
            <SubmitButton text="Delete Article" variant={"destructive"} />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
