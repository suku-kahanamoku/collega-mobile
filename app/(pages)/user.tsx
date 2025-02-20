import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";

export default function TabTwoScreen() {
  return (
    <LinearGradient colors={["#333", "#000"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Page Two</Text>
        <View style={styles.separator} />
        <EditScreenInfo path="app/(pages)/user.tsx" />
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
