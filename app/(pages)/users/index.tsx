import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ViewCmp, TextCmp } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <LinearGradient colors={["#333", "#000"]} style={styles.wrapper}>
      <ViewCmp style={styles.container}>
        <TextCmp style={styles.title}>Users page</TextCmp>
      </ViewCmp>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
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
