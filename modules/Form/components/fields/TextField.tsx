import React, { useCallback } from "react";
import { Input } from "@rneui/themed";

import { StyleProps } from "@/types/component";
import { TextField as TextFieldType } from "../../type";
import { DEBOUNCE } from "@/modules/Common/utils/delay";

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
  const handleChange = useCallback(
    DEBOUNCE((text: string) => {
      onChange && onChange(text);
    }),
    []
  );

  return (
    <Input
      label={field.label}
      placeholder={field.placeholder}
      inputMode={field.inputMode}
      autoComplete={field.autoComplete}
      autoFocus={field.autoFocus}
      value={field.value}
      secureTextEntry={field.type === 'password' ? true : false}
      {...rest}
      onChangeText={handleChange}
    />
  );
};

export default TextField;
