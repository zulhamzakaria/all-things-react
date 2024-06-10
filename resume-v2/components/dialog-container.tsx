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
  onSave: () => void;
}

const DialogContainer = ({
  children,
  dialogTitle,
  dialogDescription,
  style,
  onSave,
}: DialogContainerProps) => {
  const [buttonChild, pageChild] = React.Children.toArray(children);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{buttonChild}</DialogTrigger>
        <DialogContent
          className={style ?? " lg:min-w-[800px] bg-gray-50 overflow-auto "}
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
            <ItemCard>{pageChild}</ItemCard>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="mt-5 font-mono rounded-lg w-full bg-emerald-500  hover:bg-emerald-700 text-white font-semibold">
                save
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogContainer;
