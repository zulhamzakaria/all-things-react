import { AccountCircle, Login } from "@mui/icons-material";
import {
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";
import DialogOpener from "./DialogOpener";

const LoginMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div>
      <IconButton
        size="small"
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
        <MenuItem className="pl-5 pr-5">
          <ListItemIcon>
            <Login fontSize="small" />
          </ListItemIcon>
          <ListItemText>Login</ListItemText>
          <DialogOpener />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LoginMenu;
