import { useContext } from "react";

import { ThemeContext } from "../providers/ThemeProvider";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProviderCmp");
  }
  return context;
};
