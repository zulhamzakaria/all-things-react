import { Button } from "@/components/ui/button";
import { Book, PlusCircle, Settings } from "lucide-react";
import Link from "next/link";

const Site = () => {
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
    </>
  );
};

export default Site;
