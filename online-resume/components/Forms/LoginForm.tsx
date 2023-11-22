import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import React from "react";

const LoginForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          width: 250,
        },
        ".MuiButtonGroup-grouped:not(:last-of-type):hover": {
          // class selector
          borderColor: "green",
          color: "white",
          background: "green",
        },
      }}
    >
      <Paper className="mr-2 ml-2 " elevation={0}>
        <div className="flex items-center flex-col">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            className="mt-5"
            fullWidth
          />
          <TextField
            id="standard-basic"
            type="password"
            label="Password"
            variant="standard"
            className="mt-5"
            fullWidth
          />
        </div>
        <div className="pt-12 mb-7">
          <ButtonGroup variant="outlined" fullWidth>
            <Button className="text-white bg-green-600">Sign In</Button>
            <Button className="text-cyan-600">Cancel</Button>
          </ButtonGroup>
        </div>
      </Paper>
    </Box>
  );
};

export default LoginForm;
