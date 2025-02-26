import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import cs from "./cs.json";

const resources = {
  en: en,
  cs: cs,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  resources,
  lng: "en", // default language to use.
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
