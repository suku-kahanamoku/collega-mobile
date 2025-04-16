import React, { useCallback } from "react";
import { Input } from "@rneui/themed";

import { DEBOUNCE } from "@/modules/Common/utils/delay";
import { ITextField } from "../../types/field.interface";

interface IFieldProps {
  field: ITextField;
  onChange?: (text: string) => void;
  [rest: string]: any;
}

const TextField: React.FC<IFieldProps> = ({ field, onChange, ...rest }) => {
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
      secureTextEntry={field.type === "password" ? true : false}
      {...rest}
      onChangeText={handleChange}
    />
  );
};

export default TextField;
