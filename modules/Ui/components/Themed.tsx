import React from "react";
import { Text, View } from "react-native";

import { useTheme } from "@/providers/ThemeProvider";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Icon, IconProps } from "@expo/vector-icons/build/createIconSet";

export function UiText(props: Text["props"]) {
  const { colors } = useTheme();
  return <Text {...props} style={[props.style, { color: colors.text }]} />;
}

export function UiView(props: View["props"]) {
  const { colors } = useTheme();
  return (
    <View
      {...props}
      style={[props.style, { backgroundColor: colors.background }]}
    />
  );
}

export function UiIcon(props: Icon<string, string>["defaultProps"]) {
  const { colors } = useTheme();
  return (
    <FontAwesome
      name={props.name}
      size={props.size || 24}
      color={props.color || colors.text}
    />
  );
}
