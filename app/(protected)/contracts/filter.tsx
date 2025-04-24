import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import { useContract } from "@/modules/Contract/hooks/useContract";
import FieldCmp from "@/modules/Form/components/fields/Field";
import { useForm } from "@/modules/Form/hooks/useForm";

export default function FilterScreen() {
  const { fields } = useContract();
  const { control, handleSubmit } = useForm(fields);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {fields.map((field) => (
        <FieldCmp key={field.name} field={field} control={control} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
