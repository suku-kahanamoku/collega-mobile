import React from "react";
import { ScrollView } from "react-native";
import SignupCmp from "@/modules/Auth/components/Signup";

export default function SignupScreen() {
  return (
    <ScrollView>
      <SignupCmp />
    </ScrollView>
  );
}
