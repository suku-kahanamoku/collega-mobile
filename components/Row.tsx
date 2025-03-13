import React from "react";
import { StyleSheet } from "react-native";
import { UiView, UiText } from "@/modules/Ui/components/Themed";

interface RowProps {
  label: string;
  children: React.ReactNode;
}

export default function RowCmp({ label, children }: RowProps) {
  return (
    <UiView style={styles.row}>
      <UiText style={styles.label}>{label}:</UiText>
      <UiView style={styles.value}>{children}</UiView>
    </UiView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 10,
  },
  label: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    marginRight: 10,
    width: "30%",
    fontSize: 16,
  },
  value: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});
