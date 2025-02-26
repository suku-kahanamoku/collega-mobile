import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";

import { ViewCmp, TextCmp } from "@/components/Themed";

export default function TabOneScreen() {
  const { t } = useTranslation('translation');

  return (
    <LinearGradient colors={["#333", "#000"]} style={styles.wrapper}>
      <ViewCmp style={styles.container}>
        <TextCmp style={styles.title}>{t("hello")}</TextCmp>
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
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
