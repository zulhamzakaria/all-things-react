import { EditDialogItemIdStore } from "@/lib/use-dialog";
import { useUser } from "@clerk/nextjs";
import DialogContainer from "../dialog-container";
import EditEducation from "../educations/edit-education";
import { Button } from "../ui/button";
import EditDetails from "../details/edit-details";

interface EditDialogWrapperProps {
  id: string;
  dialogId: string;
  dialogTitle: string;
  dialogDescription: string;
  childComponent: "EditEducation" | "EditDetails";
}

const EditDialogWrapper = ({
  id,
  dialogId,
  dialogTitle,
  dialogDescription,
  childComponent,
}: EditDialogWrapperProps) => {
  const { user } = useUser();
  const { setItemId, setUserId } = EditDialogItemIdStore();

  const renderChildcomponent = () => {
    switch (childComponent) {
      case "EditDetails":
        return <EditDetails />;
      case "EditEducation":
        return <EditEducation />;
    }
  };

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
        {/* <EditEducation /> */}
        {renderChildcomponent()}
      </DialogContainer>
    </div>
  );
};

export default EditDialogWrapper;
