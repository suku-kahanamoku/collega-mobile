import { StyleSheet } from "react-native";

import { UiView } from "@/modules/Ui/components/Themed";
import { useLocale } from "@/modules/Lang/hooks/useLocale";
import LoginCmp from "@/components/Login";

export default function DashboardScreen() {
  const { t } = useLocale();

  return (
    <UiView style={styles.container}>
      <LoginCmp />
    </UiView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
