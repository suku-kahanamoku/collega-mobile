import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import { useContract } from "@/modules/Contract/hooks/useContract";
import FieldCmp from "@/modules/Form/components/fields/Field";
import { useForm } from "@/modules/Form/hooks/useForm";

export default function FilterScreen() {
  const { fields } = useContract();
  const { fieldRefs, control, handleSubmit } = useForm(fields);

  const handleFieldSubmit = (fieldName: string) => {
    const fieldNames = fields.map((field) => field.name);
    const currentIndex = fieldNames.indexOf(fieldName);

    if (currentIndex < fieldNames.length - 1) {
      // Focus na další pole podle názvu
      const nextFieldName = fieldNames[currentIndex + 1];
      fieldRefs.current[nextFieldName]?.current?.focus();
    } else {
      // Zavolání handleSubmit, pokud je to poslední pole
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (data: Record<string, any>) => {
    console.log(data);
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
