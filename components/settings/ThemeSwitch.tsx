import React from "react";
import { StyleSheet } from "react-native";

import { useTheme } from "@/providers/ThemeProvider";
import { useLocale } from "@/modules/Lang/hooks/useLocale";
import Field from "@/modules/Form/components/fields/Field";
import { Field as FieldType } from "@/modules/Form/type";

const ThemeSwitchCmp = () => {
  const { t } = useLocale();
  const { changeTheme, theme } = useTheme();
  const field = {
    type: "checkbox",
    name: "theme",
    label: t("settings.dark_mode"),
    variant: "inline",
    value: theme === "dark",
  } as FieldType;

  const toggleDarkMode = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  return <Field field={field} style={styles} onChange={toggleDarkMode} />;
};

export default ThemeSwitchCmp;

const styles = StyleSheet.create({
  children: {
    justifyContent: "flex-end",
  },
});
