import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { View } from "@/components/Themed";

export default function ModalScreen() {
  return (
    <LinearGradient colors={["#333", "#000"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Modal</Text>
        <View style={styles.separator} />

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
    </LinearGradient>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
