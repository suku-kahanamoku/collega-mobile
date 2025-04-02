import React from "react";
import { StyleSheet } from "react-native";

import { useTheme } from "@/providers/ThemeProvider";
import { useLocale } from "@/modules/Lang/hooks/useLocale";
import { Field as FieldType } from "@/modules/Form/type";
import RowCmp from "@/modules/Ui/components/Row";
import { Switch } from "@rneui/themed";

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

  return (
    <RowCmp label={field.label} variant={field.variant} style={styles}>
      <Switch
        value={field.value}
        trackColor={{ false: "gray" }}
        onValueChange={toggleDarkMode}
      />
    </RowCmp>
  );
};

export default ThemeSwitchCmp;

const styles = StyleSheet.create({
  children: {
    justifyContent: "flex-end",
  },
});
