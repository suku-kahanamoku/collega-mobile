import { StyleSheet, View } from "react-native";

import { useLocale } from "@/modules/Lang/hooks/useLocale";
import LoginCmp from "@/components/Login";

export default function DashboardScreen() {
  const { t } = useLocale();

  return (
    <View style={styles.container}>
      <LoginCmp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
