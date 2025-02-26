import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <LinearGradient colors={["#333", "#000"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Page One</Text>
        <View style={styles.separator} />
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
