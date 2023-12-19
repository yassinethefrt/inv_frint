import * as React from "react";
import {
  AppBar,
  LocalesMenuButton,
  Logout,
  TitlePortal,
  Toolbar,
  UserMenu,
  useUserMenu,
} from "react-admin";
import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

// It's important to pass the ref to allow Material UI to manage the keyboard navigation
const SettingsMenuItem = React.forwardRef((props, ref) => {
  // We are not using MenuItemLink so we retrieve the onClose function from the UserContext
  const { onClose } = useUserMenu();
  return (
    <MenuItem
      onClick={onClose}
      ref={ref}
      // It's important to pass the props to allow Material UI to manage the keyboard navigation
      {...props}
    >
      <ListItemIcon>
        <SettingsIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>Customize</ListItemText>
    </MenuItem>
  );
});
export const MyAppBar = () => (
  <AppBar
    sx={{
      color: "#fff",
      backgroundColor: "#20B486",
      "& .RaAppBar-toolbar": { padding: 0 },
    }}
    userMenu={
      <UserMenu>
        <SettingsMenuItem />
        <Logout />
      </UserMenu>
    }
  >
    {/* <Toolbar>
      <TitlePortal />
      <LocalesMenuButton />
    </Toolbar> */}
  </AppBar>
);
