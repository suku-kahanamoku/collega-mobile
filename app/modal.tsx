import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ViewCmp, TextCmp } from "@/components/Themed";

export default function ModalScreen() {
  return (
    <LinearGradient colors={["#333", "#000"]} style={styles.wrapper}>
      <ViewCmp style={styles.container}>
        <TextCmp style={styles.title}>Modal</TextCmp>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
