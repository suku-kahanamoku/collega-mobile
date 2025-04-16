import { useContext } from "react";

import { LocaleContext } from "../providers/LangProvider";

export const useLang = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};
