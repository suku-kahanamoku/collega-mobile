import React from "react";
import { ScrollView } from "react-native";

import LoginCmp from "@/modules/Auth/components/Login";

export default function LoginScreen() {
  return (
    <ScrollView>
      <LoginCmp />
    </ScrollView>
  );
}
