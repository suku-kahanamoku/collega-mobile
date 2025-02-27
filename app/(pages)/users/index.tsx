import { StyleSheet } from "react-native";

import { ViewCmp, TextCmp } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <ViewCmp style={styles.container}>
      <TextCmp style={styles.title}>Users page</TextCmp>
    </ViewCmp>
  );
}

const styles = StyleSheet.create({
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
