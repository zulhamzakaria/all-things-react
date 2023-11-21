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
  const [dialogOpener, setDialogOpener] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenDialog = () => {
    setDialogOpener(true);
  };
  const handleCloseDialog = () => {
    setDialogOpener(false);
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
        <MenuItem className="pl-5 pr-5" onClick={handleOpenDialog}>
          <ListItemIcon>
            <Login fontSize="small" />
          </ListItemIcon>
          <ListItemText>Login</ListItemText>
          <DialogOpener
            open={dialogOpener}
            handleClose={handleCloseDialog}
            form="LoginForm"
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LoginMenu;
