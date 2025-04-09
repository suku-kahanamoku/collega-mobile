import React from "react";
import { StyleSheet, View } from "react-native";
import LoginCmp from "@/components/Login";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginCmp />
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
