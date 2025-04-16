import React, { createContext, useEffect, ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import i18n, { locales } from "@/i18n";
import { ILocale } from "@/modules/Lang/types";

interface ILangContextProps {
  locale: string;
  locales: ILocale[];
  changeLanguage: (value: string) => Promise<void>;
  t: (key: string) => string;
  i18n: typeof i18n;
}

export const LangContext = createContext<ILangContextProps | undefined>(
  undefined
);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation("$");

  const changeLanguage = async (value: string) => {
    await AsyncStorage.setItem("LOCALE", value);
    await i18n.changeLanguage(value);
  };

  const _loadLanguage = async () => {
    try {
      const storedLanguage = await AsyncStorage.getItem("LOCALE");
      if (storedLanguage) {
        i18n.changeLanguage(storedLanguage);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    _loadLanguage();
  }, []);

  return (
    <LangContext.Provider
      value={{ locale: i18n.language, locales, i18n, changeLanguage, t }}
    >
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LangContext.Provider>
  );
};
