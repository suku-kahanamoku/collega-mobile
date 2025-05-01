import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import { useContract } from "@/modules/Contract/hooks/useContract";
import FieldCmp from "@/modules/Form/components/fields/Field";
import { useForm } from "@/modules/Form/hooks/useForm";

export default function FilterScreen() {
  const { fields, updateQueryParams } = useContract();
  const { fieldRefs, control, onSubmitField, getValues } = useForm(fields);

  const handleFieldSubmit = (fieldName: string) => {
    onSubmitField(fieldName);
    onSubmit(getValues());
  };

  const onSubmit = async (data: Record<string, any>) => {
    updateQueryParams(data); // Update queryParams with form data
    /* navigate(dashboardMenu.href); */
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {fields.map((field) => (
        <FieldCmp
          ref={fieldRefs.current[field.name]}
          key={field.name}
          field={field}
          control={control}
          onSubmitEditing={() => handleFieldSubmit(field.name)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
