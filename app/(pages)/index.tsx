import { StyleSheet } from "react-native";

import { ViewCmp, TextCmp } from "@/components/Themed";
import { useLocale } from "@/providers/LocaleProvider";

export default function DashboardScreen() {
  const { t } = useLocale();

  return (
    <ViewCmp style={styles.container}>
      <TextCmp style={styles.title}>{t("dashboard.title")}</TextCmp>
    </ViewCmp>
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
