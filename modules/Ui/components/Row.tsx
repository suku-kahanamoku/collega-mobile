import React from "react";
import { StyleSheet, View } from "react-native";

import { StyleProps } from "@/types/component";
import { UiText } from "@/modules/Ui/components/Themed";

interface RowProps {
  label: string;
  variant?: "inline";
  style?: StyleProps;
  children: React.ReactNode;
  [rest: string]: any;
}

export default function RowCmp({
  label,
  variant,
  style,
  children,
  ...rest
}: RowProps) {
  if (variant === "inline") {
    return (
      <View style={[styles.container, style?.container]} {...rest}>
        <UiText style={[styles.label, styles.inlineLabel, style?.label]}>
          {label}:
        </UiText>
        <View style={[styles.children, style?.children]}>{children}</View>
      </View>
    );
  }

  return (
    <View style={style?.container} {...rest}>
      <UiText style={[styles.label, style?.label]}>{label}</UiText>
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
