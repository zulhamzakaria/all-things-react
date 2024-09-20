import { DeleteBanner } from "@/app/actions";
import SubmitButton from "@/app/components/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function DeleteBannerPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className=" h-[80vh] w-full flex items-center justify-center">
      <Card className=" max-w-xl">
        <CardHeader>
          <CardTitle>Are you sure?</CardTitle>
          <CardDescription>
            This action is irrecoverable and will delete the banner
          </CardDescription>
        </CardHeader>
        <CardFooter className=" w-full flex justify-between">
          <Button variant={"secondary"} asChild>
            <Link href={"/dashboard/banner"}>Cancel</Link>
          </Button>
          <form action={DeleteBanner}>
            <input name="bannerId" value={params.id} type="hidden" />
            <SubmitButton text="Delete Product" variant={"destructive"} />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
