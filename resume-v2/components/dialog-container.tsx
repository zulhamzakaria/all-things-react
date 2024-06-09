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
        <DialogContent className={style || " bg-amber-50"}>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
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
