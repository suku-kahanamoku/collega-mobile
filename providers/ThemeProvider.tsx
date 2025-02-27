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
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ITheme = "light" | "dark";

interface ThemeContextProps {
  theme: ITheme;
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

  const _loadTheme = async () => {
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
    _loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
