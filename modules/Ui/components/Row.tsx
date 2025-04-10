import React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Text } from "@rneui/themed";

interface IStyleProps {
  container?: ViewStyle;
  label?: TextStyle;
  children?: ViewStyle;
}

interface IRowProps {
  label: string;
  variant?: "inline";
  style?: IStyleProps;
  children: React.ReactNode;
  [rest: string]: any;
}

export default function RowCmp({
  label,
  variant,
  style,
  children,
  ...rest
}: IRowProps) {
  if (variant === "inline") {
    return (
      <View style={[styles.container, style?.container]} {...rest}>
        <Text style={[styles.label, styles.inlineLabel, style?.label]}>
          {label}:
        </Text>
        <View style={[styles.children, style?.children]}>{children}</View>
      </View>
    );
  }

  return (
    <View style={style?.container} {...rest}>
      <Text style={[styles.label, style?.label]}>{label}</Text>
      <View style={style?.children}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  label: {
    fontWeight: "bold",
  },
  inlineLabel: {
    justifyContent: "center",
    alignSelf: "center",
    marginRight: 10,
    width: "30%",
  },
  children: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});
