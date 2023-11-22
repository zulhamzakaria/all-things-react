import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { ComponentType, useState } from "react";
import LoginForm from "./Forms/LoginForm";

interface DialogOpenerProps {
  open: boolean;
  handleClose: () => void;
  form: string;
  title?: string;
}

const formComponents: Record<string, ComponentType<any>> = {
  LoginForm: LoginForm,
};

const DialogOpener = ({
  open,
  handleClose,
  form,
  title,
}: DialogOpenerProps) => {
  const FormComponent = formComponents[form] || null;
  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-center  font-semibold pt-10 text-slate-900">
          {title}
        </DialogTitle>
        <DialogContent>{FormComponent && <FormComponent />}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogOpener;
