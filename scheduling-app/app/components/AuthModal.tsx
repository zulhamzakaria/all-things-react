import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { signIn } from "../lib/auth";

export function AuthModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Click me!</Button>
        </DialogTrigger>

        <DialogContent className=" max-w-[360px]">
          <DialogHeader className=" flex flex-row items-center gap-x-2 justify-center">
            <Image
              src={"/jn4.png"}
              alt="logo"
              height={50}
              width={50}
              className=" rounded-md object-cover"
            />
            <DialogTitle>
              <div className=" text-3xl font-semibold font-mono text-primary">
                authentication
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className=" flex flex-col mt-10 gap-y-3">
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
              className=" w-full"
            >
              <Button
                disabled
                className=" disabled:opacity-70 w-full text-md py-2  hover:border hover:border-gray-950 dark:hover:border-gray-200"
              >
                sign in with Google
              </Button>
            </form>

            <Button className=" text-md py-2  hover:border hover:border-gray-950  dark:hover:border-gray-200">
              sign in with GitHub
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
