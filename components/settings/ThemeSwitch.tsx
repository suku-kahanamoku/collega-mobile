import React from "react";
import { StyleSheet } from "react-native";

import { useTheme } from "@/providers/ThemeProvider";
import { useLocale } from "@/modules/Lang/hooks/useLocale";
import RowCmp from "@/modules/Ui/components/Row";
import { Switch } from "@rneui/themed";

const ThemeSwitchCmp = () => {
  const { t } = useLocale();
  const { changeTheme, isDark } = useTheme();

  const toggleDarkMode = () => {
    changeTheme(isDark ? "light" : "dark");
  };

  return (
    <RowCmp label={t("settings.dark_mode")} variant="inline" style={styles}>
      <Switch
        value={isDark}
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
