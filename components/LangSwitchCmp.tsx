import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useLocale from "../i18n/useLocale";

const LangSwitchCmp = () => {
  const { locale, locales, changeLanguage } = useLocale();

  return (
    <View style={styles.container}>
      {locales.map((loc) => (
        <TouchableOpacity
          key={loc.code}
          onPress={() => changeLanguage(loc.code)}
          style={styles.button}
        >
          <Text style={locale === loc.code ? styles.selectedText : styles.text}>
            {loc.iso}
          </Text>
        </TouchableOpacity>
      ))}
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
