import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

import { useRoute } from "@/hooks/useRoute";
import { useLang } from "@/modules/Lang/hooks/useLang";

export default function DashboardScreen() {
  const { t } = useLang();
  const { menuList } = useRoute();
  const loginMenu = menuList.login;
  const signupMenu = menuList.signup;
  const resetPasswordMenu = menuList.reset_password;

  return (
    <View style={styles.container}>
      <Link href={loginMenu.href} style={styles.link}>
        {t(loginMenu.title)}
      </Link>
      <Link href={signupMenu.href} style={styles.link}>
        {t(signupMenu.title)}
      </Link>
      <Link href={resetPasswordMenu.href} style={styles.link}>
        {t(resetPasswordMenu.title)}
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
