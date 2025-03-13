import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { TextField as TextFieldType } from "../../type";
import { UiView, UiText } from "@/modules/Ui/components/Themed";
import RowCmp from "@/modules/Ui/components/Row";

const TextField: React.FC<{ field: TextFieldType }> = ({ field }) => {
  const inputElement = (
    <TextInput
      style={styles.input}
      placeholder={field.placeholder}
      inputMode={field.inputMode}
      autoComplete={field.autoComplete}
      autoFocus={field.autoFocus}
    />
  );

  if (field.variant === "inline") {
    return <RowCmp label={field.label}>{inputElement}</RowCmp>;
  }

  return (
    <UiView style={styles.container}>
      <UiText style={styles.label}>{field.label}</UiText>
      {inputElement}
    </UiView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default TextField;
