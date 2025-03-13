import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import RowCmp from "@/modules/Ui/components/Row";
import { useContract } from "@/modules/Contract/hooks/useContract";
import Field from "@/modules/Form/components/fields/Field";

export default function FilterScreen() {
  const { fields } = useContract();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {fields.map((field) => (
        <RowCmp key={field.name} label={field.label}>
          <Field field={field} />
        </RowCmp>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
