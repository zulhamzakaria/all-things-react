import React from "react";
import TextField from "@mui/material/TextField";
import TipTapEditor from "../TipTapEditor";

const SummaryForm = () => {
  return (
    <div>
      <TextField label="Add summary..." multiline rows={5} variant="outlined" />
      <TipTapEditor />
    </div>
  );
};

export default SummaryForm;
