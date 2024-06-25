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
import { useDialog } from "@/lib/use-dialog";

interface DialogContainerProps {
  dialogId: string;
  dialogTitle: string;
  dialogDescription: string;
  style?: string;
  id?: string;
  children: [
    React.ReactElement<typeof Button>,
    React.ReactElement<React.ComponentType<any>>
  ];
}

const DialogContainer = ({
  children,
  dialogId,
  dialogTitle,
  dialogDescription,
  style,
}: DialogContainerProps) => {
  const [buttonChild, pageChild] = React.Children.toArray(children);

  const { dialogs, onOpen, onClose } = useDialog();
  const isOpen = dialogs[dialogId]?.isOpen || false;
  return (
    <div>
      <Dialog
        onOpenChange={isOpen ? () => onClose(dialogId) : () => onOpen(dialogId)}
        open={isOpen}
        defaultOpen={isOpen}
      >
        <DialogTrigger asChild onClick={() => onOpen(dialogId)}>
          {buttonChild}
        </DialogTrigger>
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
          <DialogFooter style={{ display: "none" }}>
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
