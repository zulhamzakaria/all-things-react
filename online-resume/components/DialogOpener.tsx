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
  handleClose: boolean;
  form?: string;
}

const DialogOpener = ({ open, handleClose, form }: DialogOpenerProps) => {
  // const [open, setOpen] = useState(true);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <React.Fragment>
      <Dialog open={open}>
        <DialogTitle>This is a generic dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <LoginForm />
          </DialogContentText>
          <LoginForm />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogOpener;
