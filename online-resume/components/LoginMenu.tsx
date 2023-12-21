import { AccountCircle, Login, Logout } from "@mui/icons-material";
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
import useAuthStore from "@/stores/authstore";

const LoginMenu = () => {
  const { logout } = useAuthStore();
  const [dialogOpener, setDialogOpener] = useState(false);
  const [signedOut, setsignedOut] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isAuthenticated = useAuthStore((state) => {
    return state.isAuthenticated;
  });
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setsignedOut(false);
  };
  const handleOpenDialog = (event: React.MouseEvent) => {
    setDialogOpener(true);
    handleClose();
  };
  const handleCloseDialog = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDialogOpener(false);
    handleClose();
  };
  const handleSigningOut = () => {
    logout();
    handleClose();
    setsignedOut(true);
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
        {isAuthenticated ? (
          <div>
            <MenuItem className="pl-5 pr-5" onClick={handleSigningOut}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText>Sign Out</ListItemText>
            </MenuItem>
          </div>
        ) : (
          <div>
            {!signedOut && (
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
            )}
          </div>
        )}
      </Menu>
    </div>
  );
};

export default LoginMenu;
