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
import ItemCard from "./item-card";

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
        <DialogContent className={style || " bg-rose-950"}>
          <DialogHeader>
            <DialogTitle className=" text-4xl font-light my-10 flex justify-center text-white">
              {dialogTitle.toUpperCase()}
            </DialogTitle>
            <DialogDescription className="font-sans font-light text-white">
              {dialogDescription}
            </DialogDescription>
          </DialogHeader>
          <Separator className=" bg-gray-50" />
          <ItemCard>{pageChild}</ItemCard>
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
