import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { TextField as TextFieldType } from "../../type";

const TextField: React.FC<{ field: TextFieldType }> = ({ field }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={field.placeholder}
      inputMode={field.inputMode}
      autoComplete={field.autoComplete}
      autoFocus={field.autoFocus}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default TextField;
