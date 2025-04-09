import { StyleSheet, View } from "react-native";

import { useLocale } from "@/modules/Lang/hooks/useLocale";
import LoginCmp from "@/components/Login";
import SignupCmp from "@/components/Signup";

export default function DashboardScreen() {
  const { t } = useLocale();

  return (
    <View style={styles.container}>
      <SignupCmp />
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
