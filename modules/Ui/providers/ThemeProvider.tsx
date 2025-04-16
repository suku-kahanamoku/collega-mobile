import React, { createContext, ReactNode } from "react";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import { ThemeProvider as UiThemeProvider, type Colors } from "@rneui/themed";

import { colors, createUiTheme } from "../module";
import { ITheme } from "../types/theme.interface";
import { useStorageTheme } from "../hooks/useStorageTheme";

interface IThemeContextProps {
  theme: ITheme;
  isDark: boolean;
  colors: typeof colors.light & typeof DefaultTheme.colors;
  Colors: typeof colors;
  changeTheme: (value: ITheme) => Promise<void>;
}

export const ThemeContext = createContext<IThemeContextProps | undefined>(
  undefined
);

export const ThemeProviderCmp = ({ children }: { children: ReactNode }) => {
  const [[isLoading, theme], setTheme] = useStorageTheme("THEME");

  const changeTheme = async (value: ITheme) => {
    setTheme(value);
  };

  const isDark = theme === "dark";
  const currentTheme = isDark ? DarkTheme : DefaultTheme;
  currentTheme.colors = {
    ...currentTheme.colors,
    ...((isDark ? colors.dark : colors.light) as unknown as Theme["colors"]),
  };

  const uiTheme = createUiTheme(theme || "light");

  return (
    <ThemeContext.Provider
      value={{
        theme: theme || "light",
        isDark,
        colors: currentTheme.colors as typeof colors.light &
          typeof DefaultTheme.colors,
        Colors: colors,
        changeTheme,
      }}
    >
      <ThemeProvider value={currentTheme}>
        <UiThemeProvider theme={uiTheme}>{children}</UiThemeProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
