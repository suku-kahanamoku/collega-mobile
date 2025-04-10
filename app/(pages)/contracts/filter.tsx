import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import { useContract } from "@/modules/Contract/hooks/useContract";
import Field from "@/modules/Form/components/fields/Field";

export default function FilterScreen() {
  const { fields } = useContract();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {fields.map((field) => (
        <Field field={field} key={field.name} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
