import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import defu from "defu";

import { ILocale } from "./types/lang.interface";

export const initializeLocales = (locales: Array<{ [key: string]: any }>) => {
  return locales.reduce((acc, locale) => defu(acc, locale), {});
};

export const initializeI18n = (
  resources: { [key: string]: any },
  locales: ILocale[]
) => {
  const deviceLocales = getLocales();

  const deviceLocale = deviceLocales.length
    ? deviceLocales[0]?.languageCode
    : locales[0].code;

  const defaultLocale =
    locales?.find((loc) => loc.code === deviceLocale)?.code || locales[0].code;

  i18n.use(initReactI18next).init({
    resources,
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
};
