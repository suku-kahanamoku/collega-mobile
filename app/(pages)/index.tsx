import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

import { useLocale } from "@/modules/Lang/hooks/useLocale";

export default function DashboardScreen() {
  const { t } = useLocale();

  return (
    <View style={styles.container}>
      <Link href="/login" style={styles.link}>
        {t("btn.login")}
      </Link>
      <Link href="/signup" style={styles.link}>
        {t("btn.signup")}
      </Link>
      <Link href="/reset-password" style={styles.link}>
        {t("forgot_password.title")}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    fontSize: 18,
    color: "blue",
    marginVertical: 10,
  },
});
