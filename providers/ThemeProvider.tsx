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

export type ITheme = "light" | "dark";

interface ThemeContextProps {
  theme: ITheme;
  changeTheme: (value: ITheme) => Promise<void>;
  colors: Theme["colors"];
  dark: boolean;
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

  const currentTheme = theme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
        colors: currentTheme.colors,
        dark: theme === "dark",
      }}
    >
      <ThemeProvider value={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
