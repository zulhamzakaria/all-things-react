import { UploadImageForm } from "@/app/components/dashboard/forms/UploadImageForm";
import { SubmitButton } from "@/app/components/dashboard/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function SettingsPage({
  params,
}: {
  params: { siteId: string };
}) {
  return (
    <>
      <div className=" flex items-center gap-x-2">
        <Button variant={"outline"} size={"icon"}>
          <Link href={`/dashboard/sites/${params.siteId}`}>
            <ChevronLeftIcon className=" size-4" />
          </Link>
        </Button>
        <h1 className=" font-semibold">Go back</h1>
      </div>

      <UploadImageForm />

      <Card className=" border-red-500  bg-red-500/10">
        <CardHeader>
          <CardTitle className=" text-red-500">Danger</CardTitle>
          <CardDescription>
            This will delete your site and all articles associated with it.
            Click the button below to delete everything.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <SubmitButton text="Delete Everyting" variant={"destructive"} />
        </CardFooter>
      </Card>
    </>
  );
}
