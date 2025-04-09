import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";

import { useSession } from "@/modules/Auth/hooks/useAuth";
import { useRoute } from "@/hooks/useRoute";

export default function NotFoundScreen() {
  const { session } = useSession();
  const { menuList } = useRoute();
  const loginMenu = menuList.login;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>

      <Link href={session ? "/" : loginMenu.href} style={styles.link}>
        <Text>Go to home screen!</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
