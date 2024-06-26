import { Button } from "./ui/button";
import { toast } from "sonner";
import DialogContainer from "./dialog-container";
import EditEducation from "./educations/edit-education";
import { useUser } from "@clerk/nextjs";
import { EditDialogItemIdStore } from "@/lib/use-dialog";

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
  const { user } = useUser();
  const { setItemId, setUserId } = EditDialogItemIdStore();

  return (
    <div className="flex justify-end">
      <DialogContainer
        dialogId={dialogId}
        dialogTitle={dialogTitle}
        dialogDescription={dialogDescription}
      >
        <Button
          onClick={() => {
            setItemId(id);
            setUserId(user!.id);
          }}
          className=" font-mono rounded-full bg-blue-500 hover:bg-blue-700 text-white font-semibold"
        >
          edit
        </Button>
        <EditEducation />
      </DialogContainer>
    </div>
  );
};

export default EditDialogWrapper;
