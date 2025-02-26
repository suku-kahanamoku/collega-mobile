import React from "react";
import { Text as DefaultText, View as DefaultView } from "react-native";
import { useTheme } from "@react-navigation/native";

export function Text(props: DefaultText["props"]) {
  const { colors } = useTheme();
  return (
    <DefaultText {...props} style={[props.style, { color: colors.text }]} />
  );
}

export function View(props: DefaultView["props"]) {
  const { colors } = useTheme();
  return (
    <DefaultView
      {...props}
      style={[props.style, { backgroundColor: colors.background }]}
    />
  );
}
