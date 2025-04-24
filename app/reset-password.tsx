import React from "react";
import { ScrollView } from "react-native";

import ResetPasswordCmp from "@/modules/Auth/components/ResetPassword";

export default function ResetPasswordScreen() {
  return (
    <ScrollView>
      <ResetPasswordCmp />
    </ScrollView>
  );
}
