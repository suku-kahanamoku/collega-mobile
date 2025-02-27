import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ViewCmp, TextCmp } from "@/components/Themed";

export default function NotFoundScreen() {
  return (
    <ViewCmp style={styles.container}>
      <TextCmp style={styles.title}>This screen doesn't exist.</TextCmp>

      <Link href="/" style={styles.link}>
        <TextCmp>Go to home screen!</TextCmp>
      </Link>
    </ViewCmp>
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
