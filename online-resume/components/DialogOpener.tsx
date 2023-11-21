import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import LoginForm from "./Forms/LoginForm";

interface DialogOpenerProps {
  open: boolean;
  handleClose: () => {};
  form: string;
}

const DialogOpener = ({ open, handleClose, form }: DialogOpenerProps) => {
  return (
    <React.Fragment>
      <Dialog open={open}>
        <DialogTitle>This is a generic dialog</DialogTitle>
        <DialogContent>
          <LoginForm />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogOpener;
