import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createTheme, ThemeProvider as UiThemeProvider } from "@rneui/themed";

import uiConfig from "@/ui.config.json";

type ITheme = "light" | "dark";

interface IThemeContextProps {
  theme: ITheme;
  isDark: boolean;
  colors: typeof uiConfig.colors.light;
  Colors: typeof uiConfig.colors;
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
    ...((isDark
      ? uiConfig.colors.dark
      : uiConfig.colors.light) as unknown as Theme["colors"]),
  };

  const uiTheme = createTheme({
    lightColors: uiConfig.colors.light,
    darkColors: uiConfig.colors.dark,
    mode: theme,
    components: {
      Text: uiConfig.fontSizes,
      CardTitle: uiConfig.fontSizes,
      Card: {
        containerStyle: {
          backgroundColor: currentTheme.colors.background,
        },
      },
    },
  });

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        colors: currentTheme.colors as unknown as typeof uiConfig.colors.light,
        Colors: uiConfig.colors,
        changeTheme,
      }}
    >
      <ThemeProvider value={currentTheme}>
        <UiThemeProvider theme={uiTheme}>{children}</UiThemeProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
