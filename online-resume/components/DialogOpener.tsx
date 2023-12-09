import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { ComponentType } from "react";
import LoginForm from "./Forms/LoginForm";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import SummaryForm from "./Forms/SummaryForm";
import SkillsForm from "./Forms/SkillsForm";
import ExperiencesForm from "./Forms/ExperiencesForm";

interface DialogOpenerProps {
  open: boolean;
  form: string;
  title?: string;
  onCloseDialog: (event: React.MouseEvent) => void;
}

const formComponents: Record<string, ComponentType<any>> = {
  LoginForm: LoginForm,
  SummaryForm: SummaryForm,
  SkillsForm: SkillsForm,
  ExperiencesForm: ExperiencesForm,
};

const DialogOpener = ({
  open,
  form,
  title,
  onCloseDialog,
}: DialogOpenerProps) => {
  const FormComponent = formComponents[form] || null;
  return (
    <React.Fragment>
      <Dialog open={open} className="opacity-100">
        <div className="text-end pt-1 pr-1 bg-gradient-to-t from-red-900 to-red-950">
          <CloseIcon onClick={onCloseDialog} className="text-white" />
        </div>
        <DialogTitle className="text-center font-bold text-3xl text-white bg-gradient-to-b from-red-900 to-red-950">
          {title?.toUpperCase()}
        </DialogTitle>
        <DialogContent className="rounded-t-lg">
          {FormComponent && <FormComponent closeDialog={onCloseDialog} />}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogOpener;
