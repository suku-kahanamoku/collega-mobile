import React, { useCallback } from "react";
import { TextInput, StyleSheet } from "react-native";

import { StyleProps } from "@/types/component";
import RowCmp from "@/modules/Ui/components/Row";
import { TextField as TextFieldType } from "../../type";
import { DEBOUNCE } from "@/modules/Common/utils/delay";
import { useTheme } from "@/providers/ThemeProvider";

interface FieldProps {
  field: TextFieldType;
  style?: StyleProps;
  onChange?: (text: string) => void;
  [rest: string]: any;
}

const TextField: React.FC<FieldProps> = ({
  field,
  style,
  onChange,
  ...rest
}) => {
  const { colors } = useTheme();

  const handleChange = useCallback(
    DEBOUNCE((text: string) => {
      onChange && onChange(text);
    }),
    []
  );

  return (
    <RowCmp label={field.label} variant={field.variant} style={style} {...rest}>
      <TextInput
        style={{ ...styles.input, color: colors.text }}
        placeholder={field.placeholder}
        placeholderTextColor="gray"
        inputMode={field.inputMode}
        autoComplete={field.autoComplete}
        autoFocus={field.autoFocus}
        value={field.value}
        onChangeText={handleChange}
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
