import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Flag from "react-native-flags";

import useLocale from "@/i18n/useLocale";

const LangSwitchCmp = () => {
  const { locale, locales, changeLanguage } = useLocale();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Language:</Text>
      <View style={styles.flagsContainer}>
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
      </View>
    </View>
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
