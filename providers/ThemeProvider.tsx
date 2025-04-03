import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createTheme, ThemeProvider as UiThemeProvider } from "@rneui/themed";

import { Colors, FontSizes } from "@/constants/Theme";

export type ITheme = "light" | "dark";

interface ThemeContextProps {
  theme: ITheme;
  isDark: boolean;
  colors: Theme["colors"] & typeof Colors.light;
  Colors: typeof Colors;
  changeTheme: (value: ITheme) => Promise<void>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProviderCmp");
  }
  return context;
};

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
  const colors = {
    ...currentTheme.colors,
    secondary: isDark ? Colors.dark.secondary : Colors.light.secondary,
    info: isDark ? Colors.dark.info : Colors.light.info,
    warning: isDark ? Colors.dark.warning : Colors.light.warning,
    error: isDark ? Colors.dark.error : Colors.light.error,
    success: isDark ? Colors.dark.success : Colors.light.success,
    primary2: isDark ? Colors.dark.primary2 : Colors.light.primary2,
  };

  const uiTheme = createTheme({
    lightColors: Colors.light,
    darkColors: Colors.dark,
    mode: theme,
    components: {
      Text: FontSizes,
      CardTitle: FontSizes,
    },
  });

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        colors,
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
