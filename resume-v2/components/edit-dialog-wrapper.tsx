import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface EditDialogWrapperProps {
  id: string;
  dialogTitle: string;
  dialogDescription: string;
}

const EditDialogWrapper = ({
  id,
  dialogTitle,
  dialogDescription,
}: EditDialogWrapperProps) => {
  return (
    <div className="flex justify-end">
      <Button
        onClick={() => toast.success(id)}
        className=" font-mono rounded-full bg-blue-500 hover:bg-blue-700 text-white font-semibold"
      >
        edit
      </Button>
    </div>
  );
};

export default EditDialogWrapper;
