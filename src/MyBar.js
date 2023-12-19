import {
  AppBar,
  LocalesMenuButton,
  TextInput,
  ToggleThemeButton,
} from "react-admin";

export const MyAppBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <ToggleThemeButton />
        <LocalesMenuButton />
      </Toolbar>
    </AppBar>
  );
};
