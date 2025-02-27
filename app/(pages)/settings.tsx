import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ViewCmp } from "@/components/Themed";
import ThemeSwitchCmp from "@/components/settings/ThemeSwitch";
import LangSwitchCmp from "@/components/settings/LangSwitch";

export default function ModalScreen() {
  return (
    <LinearGradient colors={["#333", "#000"]} style={styles.wrapper}>
      <ViewCmp style={styles.container}>
        <ViewCmp style={styles.content}>
          <ThemeSwitchCmp />
          <LangSwitchCmp />
        </ViewCmp>
      </ViewCmp>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    gap: 8,
  },
});
