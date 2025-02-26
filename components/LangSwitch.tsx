import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import i18n from "../lang/i18n";

const LangSwitchCmp = () => {
  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLocale(lng);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => changeLanguage("en")}
        style={styles.button}
      >
        <Text style={locale === "en" ? styles.selectedText : styles.text}>
          English
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeLanguage("cs")}
        style={styles.button}
      >
        <Text style={locale === "cs" ? styles.selectedText : styles.text}>
          Czech
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  button: {
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
  selectedText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LangSwitchCmp;
