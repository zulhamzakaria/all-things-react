import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import DialogContainer from "./dialog-container";
import EditEducation from "./educations/edit-education";

interface EditDialogWrapperProps {
  id: string;
  dialogId: string;
  dialogTitle: string;
  dialogDescription: string;
}

const EditDialogWrapper = ({
  id,
  dialogId,
  dialogTitle,
  dialogDescription,
}: EditDialogWrapperProps) => {
  const [editId, setEditId] = useState(id);
  return (
    <div className="flex justify-end">
      <DialogContainer
        dialogId={dialogId}
        dialogTitle={dialogTitle}
        dialogDescription={dialogDescription}
      >
        <Button
          onClick={() => toast.success(id)}
          className=" font-mono rounded-full bg-blue-500 hover:bg-blue-700 text-white font-semibold"
        >
          edit
        </Button>
        <EditEducation id={editId} />
      </DialogContainer>
    </div>
  );
};

export default EditDialogWrapper;
