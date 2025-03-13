import { StyleSheet } from "react-native";

import { UiView } from "@/modules/Ui/components/Themed";
import ThemeSwitchCmp from "@/components/settings/ThemeSwitch";
import LangSwitchCmp from "@/components/settings/LangSwitch";

export default function SettingsScreen() {
  return (
    <UiView style={styles.container}>
      <UiView style={styles.content}>
        <ThemeSwitchCmp />
        <LangSwitchCmp />
      </UiView>
    </UiView>
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
