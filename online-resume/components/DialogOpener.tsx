import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import LoginForm from "./Forms/LoginForm";
import { format } from "path/posix";

const DialogOpener = ({ open, handleClose, form }: any) => {
  return (
    <React.Fragment>
      <Dialog open={open}>
        <DialogTitle>This is a generic dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <form />
          </DialogContentText>
          <LoginForm />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogOpener;
