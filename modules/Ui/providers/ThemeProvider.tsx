import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider as UiThemeProvider, type Colors } from "@rneui/themed";

import { colors, createUiTheme } from "../ui.module";
import { ITheme } from "../types/theme.interface";

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
  const [theme, setTheme] = useState<ITheme>("light");

  const changeTheme = async (value: ITheme) => {
    await AsyncStorage.setItem("THEME", value);
    setTheme(value);
  };

  const loadTheme = async () => {
    try {
      const storedTheme = await AsyncStorage.getItem("THEME");
      if (storedTheme) {
        setTheme(storedTheme as ITheme);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  const isDark = theme === "dark";
  const currentTheme = isDark ? DarkTheme : DefaultTheme;
  currentTheme.colors = {
    ...currentTheme.colors,
    ...((isDark ? colors.dark : colors.light) as unknown as Theme["colors"]),
  };

  const uiTheme = createUiTheme(theme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
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
