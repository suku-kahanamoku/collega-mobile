import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Flag from "react-native-flags";

import { useLocale } from "@/providers/LocaleProvider";
import { UiText, UiView } from "@/modules/Ui/components/Themed";

const LangSwitchCmp = () => {
  const { locale, locales, t, changeLanguage } = useLocale();

  return (
    <UiView style={styles.container}>
      <UiText style={styles.label}>{t("settings.language")}:</UiText>
      <UiView style={styles.flagsContainer}>
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
      </UiView>
    </UiView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  flagsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  flag: {
    opacity: 1,
  },
  selectedFlag: {
    opacity: 0.6,
  },
});

export default LangSwitchCmp;
