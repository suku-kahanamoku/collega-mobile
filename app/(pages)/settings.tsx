import { StyleSheet } from "react-native";

import { ViewCmp } from "@/components/Themed";
import ThemeSwitchCmp from "@/components/settings/ThemeSwitch";
import LangSwitchCmp from "@/components/settings/LangSwitch";

export default function SettingsScreen() {
  return (
    <ViewCmp style={styles.container}>
      <ViewCmp style={styles.content}>
        <ThemeSwitchCmp />
        <LangSwitchCmp />
      </ViewCmp>
    </ViewCmp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    gap: 8,
  },
});
