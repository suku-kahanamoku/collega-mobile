import React from "react";
import { View } from "react-native";

import { useTheme } from "@/providers/ThemeProvider";

export function UiView(props: View["props"]) {
  const { colors } = useTheme();
  return (
    <View
      {...props}
      style={[props.style, { backgroundColor: colors.background }]}
    />
  );
}
