import React from "react";
import { Switch, StyleSheet } from "react-native";

import { useTheme } from "@/providers/ThemeProvider";
import { UiText, UiView } from "@/modules/Ui/components/Themed";
import { useLocale } from "@/modules/Lang/hooks/useLocale";

const ThemeSwitchCmp = () => {
  const { t } = useLocale();
  const { changeTheme, theme } = useTheme();

  const toggleDarkMode = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <UiView style={styles.container}>
      <UiText style={styles.label}>{t("settings.dark_mode")}:</UiText>
      <Switch value={theme === "dark"} onValueChange={toggleDarkMode} />
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
  },
});

export default ThemeSwitchCmp;
