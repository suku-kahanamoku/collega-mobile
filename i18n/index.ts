import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import defu from "defu";

import _en from "./locales/en.json";
import _cs from "./locales/cs.json";
import _sk from "./locales/sk.json";

import cEn from "@/modules/Contract/locales/en.json";
import cCs from "@/modules/Contract/locales/cs.json";
import cSk from "@/modules/Contract/locales/sk.json";

const en = defu(_en, cEn);
const cs = defu(_cs, cCs);
const sk = defu(_sk, cSk);

export const locales = [
  {
    code: "en",
    mark: "GB",
    iso: "en-GB",
  },
  {
    code: "cs",
    mark: "CZ",
    iso: "cs-CZ",
  },
  {
    code: "sk",
    mark: "SK",
    iso: "sk-SK",
  },
];

const deviceLocales = getLocales();
const deviceLocale = deviceLocales.length
  ? deviceLocales[0]?.languageCode
  : locales[0].code;
const defaultLocale =
  locales?.find((loc) => loc.code === deviceLocale)?.code || locales[0].code;

i18n.use(initReactI18next).init({
  resources: {
    en,
    cs,
    sk,
  },
  lng: defaultLocale,
  fallbackLng: defaultLocale,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
