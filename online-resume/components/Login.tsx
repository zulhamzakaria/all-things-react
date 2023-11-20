import { AccountCircle } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //   const [Open, setOpen] = useState(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  return (
    <div>
      <IconButton
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className="flex flex-col">
          <span className="py-2 px-0">Login</span>
          <form noValidate className="flex flex-col">
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              className="mt-1"
            />
          </form>
          <div className="mt-2 flex">
            <Button
              variant="outlined"
              color="success"
              className="mr-2"
              fullWidth
            >
              Login
            </Button>
            <Button
              variant="outlined"
              onClick={handleClose}
              color="error"
              fullWidth
            >
              Cancel
            </Button>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Login;
