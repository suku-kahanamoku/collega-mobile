import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export function TextCmp(props: Text["props"]) {
  const { colors } = useTheme();
  return <Text {...props} style={[props.style, { color: colors.text }]} />;
}

export function ViewCmp(props: View["props"]) {
  const { colors } = useTheme();
  return (
    <View
      {...props}
      style={[props.style, { backgroundColor: colors.background }]}
    />
  );
}
