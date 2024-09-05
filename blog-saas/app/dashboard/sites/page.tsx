import { Button } from "@/components/ui/button";
import { FileIcon, PlusCircle } from "lucide-react";
import Link from "next/link";

const SitesPage = () => {
  return (
    <>
      <div className=" flex w-full justify-end">
        <Button asChild>
          <Link href={"/dashboard/sites/new"}>
            <PlusCircle className=" size-4 mr-2" /> Site
          </Link>
        </Button>
      </div>

      <div className=" flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
        <div className=" flex size-20 items-center justify-center rounded-full bg-primary/10">
          <FileIcon className=" size-10 text-primary " />
        </div>
        <h2 className=" mt-6 text-xl font-semibold">You have 0 site created</h2>
        <p className=" max-w-sm mx-auto mb-8 text-center text-sm leading-tight text-muted-foreground">
          Please create some so that you can see them right here
        </p>
        <Button asChild>
          <Link href={"/dashboard/sites/new"}>
            <PlusCircle className=" size-4 mr-2" /> Site
          </Link>
        </Button>
      </div>
    </>
  );
};

export default SitesPage;
