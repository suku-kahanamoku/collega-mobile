import React, { createContext, useState, useEffect, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

import i18n, { locales } from "@/i18n";

interface ILocaleContextProps {
  locale: string;
  changeLanguage: (value: string) => Promise<void>;
  t: (key: string) => string;
  locales: typeof locales;
}

export const LocaleContext = createContext<ILocaleContextProps | undefined>(
  undefined
);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation("$");
  const [locale, setLocale] = useState(i18n.language);

  const changeLanguage = async (value: string) => {
    await AsyncStorage.setItem("LOCALE", value);
    i18n.changeLanguage(value);
  };

  const _loadLanguage = async () => {
    try {
      const storedLanguage = await AsyncStorage.getItem("LOCALE");
      if (storedLanguage) {
        i18n.changeLanguage(storedLanguage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    _loadLanguage();
    i18n.on("languageChanged", setLocale);

    return () => {
      i18n.off("languageChanged", setLocale);
    };
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, changeLanguage, t, locales }}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LocaleContext.Provider>
  );
};
