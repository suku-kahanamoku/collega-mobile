import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { UiView, UiText } from "@/modules/Ui/components/Themed";

export default function NotFoundScreen() {
  return (
    <UiView style={styles.container}>
      <UiText style={styles.title}>This screen doesn't exist.</UiText>

      <Link href="/" style={styles.link}>
        <UiText>Go to home screen!</UiText>
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
