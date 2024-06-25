import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const EditDialogWrapper = ({ id }: { id: string }) => {
  return (
    <div>
      EditDialogWrapper # {id}
      <Button onClick={() => toast.success(id)}>button</Button>
    </div>
  );
};

export default EditDialogWrapper;
