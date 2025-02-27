import { useState, useEffect } from "react";
import i18n, { locales } from "./config";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLocale = (ns?: string) => {
  const { t } = useTranslation(ns || "$");
  const [locale, setLocale] = useState(i18n.language);

  const changeLanguage = async (lng: string) => {
    await AsyncStorage.setItem("LANGUAGE", lng);
    i18n.changeLanguage(lng);
  };

  const loadLanguage = async () => {
    try {
      const storedLanguage = await AsyncStorage.getItem("LANGUAGE");
      if (storedLanguage) {
        i18n.changeLanguage(storedLanguage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * OnMounted
   */
  useEffect(() => {
    loadLanguage();

    i18n.on("languageChanged", setLocale);

    // OnUnmounted
    return () => i18n.off("languageChanged", setLocale);
  }, []);

  return {
    locale,
    locales: locales,
    t,
    changeLanguage,
  };
};

export default useLocale;
