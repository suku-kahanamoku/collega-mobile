import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import defu from "defu";

import _en from "./locales/en.json";
import _cs from "./locales/cs.json";
import _sk from "./locales/sk.json";

import aEn from "@/modules/Auth/locales/en.json";
import aCs from "@/modules/Auth/locales/cs.json";
import aSk from "@/modules/Auth/locales/sk.json";

import cEn from "@/modules/Contract/locales/en.json";
import cCs from "@/modules/Contract/locales/cs.json";
import cSk from "@/modules/Contract/locales/sk.json";

import uEn from "@/modules/User/locales/en.json";
import uCs from "@/modules/User/locales/cs.json";
import uSk from "@/modules/User/locales/sk.json";

const en = defu(_en, aEn, cEn, uEn);
const cs = defu(_cs, aCs, cCs, uCs);
const sk = defu(_sk, aSk, cSk, uSk);

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

/**
 * Výchozí export modulu i18n, který je zodpovědný za zpracování
 * internacionalizace (i18n) v aplikaci. To obvykle zahrnuje
 * správu překladů, nastavení lokalizace a další související funkce.
 */
export default i18n;
