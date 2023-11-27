import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { ComponentType, useState } from "react";
import LoginForm from "./Forms/LoginForm";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import SummaryForm from "./Forms/SummaryForm";

interface DialogOpenerProps {
  open: boolean;
  form: string;
  title?: string;
  onCloseDialog: (event: React.MouseEvent) => void;
}

const formComponents: Record<string, ComponentType<any>> = {
  LoginForm: LoginForm,
  SummaryForm: SummaryForm,
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
      <Dialog open={open}>
        <div className="text-end mt-1 mr-1">
          <CloseIcon onClick={onCloseDialog} />
        </div>
        <DialogTitle className="text-left font-semibold pt-7 text-slate-900">
          {title}
        </DialogTitle>
        <DialogContent className="rounded-t-lg">
          {FormComponent && <FormComponent closeDialog={onCloseDialog} />}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogOpener;
