import React from "react";
import { StyleSheet, Text } from "react-native";
import { ViewCmp, TextCmp } from "@/components/Themed";

interface RowProps {
  label: string;
  children: React.ReactNode;
}

export default function RowCmp({ label, children }: RowProps) {
  return (
    <ViewCmp style={styles.row}>
      <Text style={styles.label}>{label}:</Text>
      <ViewCmp style={styles.value}>{children}</ViewCmp>
    </ViewCmp>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 10
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
