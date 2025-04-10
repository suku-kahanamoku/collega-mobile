import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createTheme, ThemeProvider as UiThemeProvider } from "@rneui/themed";

import { Colors, FontSizes } from "@/configs/Theme";

type ITheme = "light" | "dark";

interface IThemeContextProps {
  theme: ITheme;
  isDark: boolean;
  colors: typeof Colors.light;
  Colors: typeof Colors;
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
      console.log(e);
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  const isDark = theme === "dark";
  const currentTheme = isDark ? DarkTheme : DefaultTheme;
  currentTheme.colors = (isDark
    ? Colors.dark
    : Colors.light) as unknown as Theme["colors"];

  const uiTheme = createTheme({
    lightColors: Colors.light,
    darkColors: Colors.dark,
    mode: theme,
    components: {
      Text: FontSizes,
      CardTitle: FontSizes,
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
        colors: currentTheme.colors as unknown as typeof Colors.light,
        Colors,
        changeTheme,
      }}
    >
      <ThemeProvider value={currentTheme}>
        <UiThemeProvider theme={uiTheme}>{children}</UiThemeProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
