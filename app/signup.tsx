import React from "react";
import { StyleSheet, View } from "react-native";
import SignupCmp from "@/components/Signup";

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <SignupCmp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
