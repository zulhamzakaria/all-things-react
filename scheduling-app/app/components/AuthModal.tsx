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
import { GithubAuthButton, GoogleAuthButton } from "./SubmitButtons";

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
              <GoogleAuthButton />
            </form>

            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
              className=" w-full"
            >
              <GithubAuthButton />
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
