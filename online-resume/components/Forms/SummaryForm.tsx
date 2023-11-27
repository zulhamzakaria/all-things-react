import React from "react";
import TextField from "@mui/material/TextField";
import TipTapEditor from "../TipTapEditor";
import { Box } from "@mui/material";

const SummaryForm = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          background: "transparent",
          "& > :not(style)": {
            width: 900,
          },
          ".MuiButtonGroup-grouped:hover": {
            // class selector
            borderColor: "green",
            color: "white",
            background: "green",
          },
        }}
      >
        <TipTapEditor />
      </Box>
    </div>
  );
};

export default SummaryForm;
