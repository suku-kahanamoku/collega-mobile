import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { TextareaField as TextareaFieldType } from "../../type";

const TextareaField: React.FC<{ field: TextareaFieldType }> = ({ field }) => {
  return (
    <TextInput
      style={styles.textarea}
      multiline
      numberOfLines={4}
      placeholder={field.placeholder}
    />
  );
};

const styles = StyleSheet.create({
  textarea: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlignVertical: "top",
  },
});

export default TextareaField;
