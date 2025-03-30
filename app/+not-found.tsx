import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Text } from "@rneui/themed";

import { UiView } from "@/modules/Ui/components/Themed";

export default function NotFoundScreen() {
  return (
    <UiView style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>

      <Link href="/" style={styles.link}>
        <Text>Go to home screen!</Text>
      </Link>
    </UiView>
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
