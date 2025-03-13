import { useContext } from "react";
import { LocaleContext } from "../providers/LangProvider";

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LangProvider");
  }
  return context;
};
