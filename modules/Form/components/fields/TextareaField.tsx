import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { TextareaField as TextareaFieldType } from "../../type";
import { UiView, UiText } from "@/modules/Ui/components/Themed";
import RowCmp from "@/modules/Ui/components/Row";

const TextareaField: React.FC<{ field: TextareaFieldType }> = ({ field }) => {
  const inputElement = (
    <TextInput
      style={styles.textarea}
      multiline
      numberOfLines={4}
      placeholder={field.placeholder}
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
  textarea: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlignVertical: "top",
  },
});

export default TextareaField;
