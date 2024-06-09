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
  children: [
    React.ReactElement<typeof Button>,
    React.ReactElement<React.ComponentType<any>>
  ];
}

const DialogContainer = ({ children }: DialogContainerProps) => {
  const [buttonChild, pageChild] = React.Children.toArray(children);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{buttonChild}</DialogTrigger>
        <DialogContent className=" bg-amber-50">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <Separator />
          <div>{pageChild}</div>
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
