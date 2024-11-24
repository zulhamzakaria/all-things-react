import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

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
              <div className=" text-3xl font-semibold font-mono">
                authentication
              </div>
            </DialogTitle>
          </DialogHeader>
          <div>cock!</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
