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
  handleClose: () => {};
  form: string;
}

const formComponents: Record<string, ComponentType<any>> = {
  LoginForm: LoginForm,
};

const DialogOpener = ({ open, handleClose, form }: DialogOpenerProps) => {
  const FormComponent = formComponents[form] || null;
  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>This is a generic dialog</DialogTitle>
        <DialogContent>{FormComponent && <FormComponent />}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogOpener;
