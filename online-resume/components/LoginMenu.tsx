import { AccountCircle, Login } from "@mui/icons-material";
import {
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
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
  const handleOpenDialog = (event: React.MouseEvent) => {
    setDialogOpener(true);
  };
  const handleCloseDialog = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDialogOpener(false);
    handleClose();
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
          <ListItemText>Sign In</ListItemText>
          <DialogOpener
            open={dialogOpener}
            onCloseDialog={handleCloseDialog}
            form="LoginForm"
            title="Sign In"
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LoginMenu;
