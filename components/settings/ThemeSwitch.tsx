import React from "react";
import { Switch, StyleSheet } from "react-native";

import { useLocale } from "@/providers/LocaleProvider";
import { useTheme } from "@/providers/ThemeProvider";
import { TextCmp, ViewCmp } from "@/components/Themed";

const ThemeSwitchCmp = () => {
  const { t } = useLocale();
  const { changeTheme, theme } = useTheme();

  const toggleDarkMode = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ViewCmp style={styles.container}>
      <TextCmp style={styles.label}>{t("settings.dark_mode")}:</TextCmp>
      <Switch value={theme === "dark"} onValueChange={toggleDarkMode} />
    </ViewCmp>
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
  },
});

export default ThemeSwitchCmp;
