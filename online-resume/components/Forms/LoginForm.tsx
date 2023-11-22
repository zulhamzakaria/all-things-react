import { CloseChildDialogProps } from "@/utils/props";
import { AccountCircle } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import React, { useState } from "react";

const LoginForm: React.FC<CloseChildDialogProps> = ({ closeDialog }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    if (
      username === process.env.NEXT_PUBLIC_REACT_APP_USERNAME &&
      password === process.env.NEXT_PUBLIC_REACT_APP_PASSWORD
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        background: "transparent",
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
      <Paper className="rounded-md bg-transparent" elevation={0}>
        <div className="flex items-center flex-col">
          <AccountCircle fontSize="large" />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            className="mt-5"
            fullWidth
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="standard-basic"
            type="password"
            label="Password"
            variant="standard"
            className="mt-5"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="pt-12 mb-7">
          <ButtonGroup variant="outlined" fullWidth>
            <Button className="text-white bg-green-600" onClick={handleLogin}>
              Sign In
            </Button>
            <Button onClick={closeDialog}>Cancel</Button>
          </ButtonGroup>
        </div>
      </Paper>
    </Box>
  );
};

export default LoginForm;
