import React from "react";
import { StyleSheet } from "react-native";

import { useTheme } from "@/hooks/useTheme";
import { useLocale } from "@/modules/Lang/hooks/useLocale";
import RowCmp from "@/modules/Ui/components/Row";
import { Switch } from "@rneui/themed";

/**
 * ThemeSwitchCmp je funkční komponenta, která poskytuje přepínač
 * pro zapnutí nebo vypnutí tmavého režimu v aplikaci. Využívá
 * lokalizační a tematické hooky pro dynamickou aktualizaci tématu
 * a zobrazení odpovídajícího popisku.
 *
 * @returns {JSX.Element} Řádková komponenta obsahující popisek a přepínač
 * pro přepínání tmavého režimu.
 *
 * @remarks
 * - Hook `useLocale` se používá k získání lokalizovaného řetězce pro popisek.
 * - Hook `useTheme` poskytuje aktuální stav tématu (`isDark`) a metodu
 *   (`changeTheme`) pro přepínání mezi světlým a tmavým tématem.
 *
 * @example
 * ```tsx
 * import ThemeSwitchCmp from './ThemeSwitch';
 *
 * const App = () => (
 *   <View>
 *     <ThemeSwitchCmp />
 *   </View>
 * );
 * ```
 */
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

const styles = StyleSheet.create({
  children: {
    justifyContent: "flex-end",
  },
});

export default ThemeSwitchCmp;
