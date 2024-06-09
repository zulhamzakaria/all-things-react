import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Separator } from "./ui/separator";

interface DialogContainerProps {
  dialogTitle: string;
  dialogDescription: string;
  style?: string;
  children: [
    React.ReactElement<typeof Button>,
    React.ReactElement<React.ComponentType<any>>
  ];
}

const DialogContainer = ({
  children,
  dialogTitle,
  dialogDescription,
  style,
}: DialogContainerProps) => {
  const [buttonChild, pageChild] = React.Children.toArray(children);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{buttonChild}</DialogTrigger>
        <DialogContent
          className={
            style ?? " lg:min-w-[800px] bg-gray-50 overflow-auto "
          }
        >
          <div>
            <DialogHeader>
              <DialogTitle className=" text-4xl font-light py-10 flex justify-center ">
                {dialogTitle.toUpperCase()}
              </DialogTitle>
              <DialogDescription className="font-sans font-light ">
                {dialogDescription}
              </DialogDescription>
            </DialogHeader>
            <Separator className=" bg-slate-950 my-5" />
            {pageChild}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogContainer;
