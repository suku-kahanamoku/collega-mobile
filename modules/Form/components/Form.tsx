import React from "react";
import { Button, StyleSheet, View } from "react-native";

import Field from "./fields/Field";
import { IFormConfig } from "../types/form.interface";
import { useZod } from "../hooks/useZod";
import { useLang } from "@/modules/Lang/hooks/useLang";

interface IFormProps {
  config: IFormConfig;
  onSubmit: (data: any) => void;
}

const FormCmp: React.FC<IFormProps> = ({ config, onSubmit }) => {
  const { useZodForm } = useZod();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useZodForm(config.fields);

  return (
    <View style={styles.container}>
      {config.fields.map((field) => (
        <Field key={field.name} field={field} control={control} />
      ))}
      <Button
        title={config.submitButtonText}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});

export default FormCmp;
