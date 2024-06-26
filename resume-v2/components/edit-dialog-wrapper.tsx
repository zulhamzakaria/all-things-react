import { Button } from "./ui/button";
import { toast } from "sonner";
import DialogContainer from "./dialog-container";
import EditEducation from "./educations/edit-education";
import { useUser } from "@clerk/nextjs";
import { EditDialogItemIdStore } from "@/lib/use-dialog";

interface EditDialogWrapperProps {
  dialogId: string;
  dialogTitle: string;
  dialogDescription: string;
}

const EditDialogWrapper = ({
  dialogId,
  dialogTitle,
  dialogDescription,
}: EditDialogWrapperProps) => {
  const { user } = useUser();
  const { itemId, userId, setItemId, setUserId } = EditDialogItemIdStore();

  return (
    <div className="flex justify-end">
      <DialogContainer
        dialogId={dialogId}
        dialogTitle={dialogTitle}
        dialogDescription={dialogDescription}
      >
        <Button className=" font-mono rounded-full bg-blue-500 hover:bg-blue-700 text-white font-semibold">
          edit
        </Button>
        <EditEducation id={"cock"} />
      </DialogContainer>
    </div>
  );
};

export default EditDialogWrapper;
