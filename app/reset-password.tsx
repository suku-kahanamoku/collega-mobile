import React from "react";
import { StyleSheet, View } from "react-native";
import ResetPasswordCmp from "@/components/ResetPassword";

export default function ResetPasswordScreen() {
  return (
    <View style={styles.container}>
      <ResetPasswordCmp />
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
