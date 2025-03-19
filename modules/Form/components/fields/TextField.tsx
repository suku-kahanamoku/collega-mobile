import React from "react";
import { TextInput, StyleSheet } from "react-native";

import { StyleProps } from "@/types/component";
import RowCmp from "@/modules/Ui/components/Row";
import { TextField as TextFieldType } from "../../type";

interface FieldProps {
  field: TextFieldType;
  style?: StyleProps;
  [rest: string]: any;
}

const TextField: React.FC<FieldProps> = ({ field, style, ...rest }) => {
  return (
    <RowCmp label={field.label} variant={field.variant} style={style} {...rest}>
      <TextInput
        style={styles.input}
        placeholder={field.placeholder}
        inputMode={field.inputMode}
        autoComplete={field.autoComplete}
        autoFocus={field.autoFocus}
        value={field.value}
      />
    </RowCmp>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    height: 44,
  },
});

export default TextField;
