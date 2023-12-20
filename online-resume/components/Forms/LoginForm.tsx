import { CloseChildDialogProps } from "@/utils/props";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import useAuthStore from "@/stores/authstore";

import { useEffect, useState } from "react";

const LoginForm: React.FC<CloseChildDialogProps> = ({ closeDialog }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => {
    return state.isAuthenticated;
  });
  const handleLogin = (event: React.MouseEvent) => {
    login(username, password);
    // if (isAuthenticated) {
    //   closeDialog(event);
    // }
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
        ".MuiButtonGroup-grouped:hover": {
          // class selector
          borderColor: "green",
          color: "white",
          background: "green",
        },
      }}
    >
      <Paper className="rounded-md bg-transparent" elevation={0}>
        <div className="flex items-center flex-col">
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
        <div className="pt-10 mb-7">
          <ButtonGroup variant="outlined" fullWidth>
            <Button
              className="text-white bg-green-600"
              fullWidth
              onClick={handleLogin}
            >
              Sign In
            </Button>
          </ButtonGroup>
        </div>
      </Paper>
    </Box>
  );
};

export default LoginForm;
