import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Flag from "react-native-flags";

import { useLocale } from "@/modules/Lang/hooks/useLocale";
import RowCmp from "@/modules/Ui/components/Row";

const LangSwitchCmp = () => {
  const { locale, locales, t, changeLanguage } = useLocale();

  return (
    <RowCmp
      label={t("settings.language")}
      variant="inline"
      style={{ children: styles.flagsContainer }}
    >
      {locales.map((loc) => (
        <TouchableOpacity
          key={loc.code}
          onPress={() => changeLanguage(loc.code)}
        >
          <Flag
            code={loc.mark}
            size={32}
            style={locale === loc.code ? styles.selectedFlag : styles.flag}
          />
        </TouchableOpacity>
      ))}
    </RowCmp>
  );
};

export default LangSwitchCmp;

const styles = StyleSheet.create({
  flagsContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-end",
  },
  flag: {
    opacity: 1,
  },
  selectedFlag: {
    opacity: 0.6,
  },
});
