import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "@rneui/themed";
import { Controller, Control } from "react-hook-form";

import { ITextField } from "../../types/field.interface";

interface IFieldProps {
  field: ITextField;
  control: Control<any>;
  [rest: string]: any;
}

const TextField: React.FC<IFieldProps> = ({ field, control, ...rest }) => {
  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Input
          label={field.label}
          placeholder={field.placeholder}
          inputMode={field.inputMode}
          autoComplete={field.autoComplete}
          autoFocus={field.autoFocus}
          value={value}
          secureTextEntry={field.type === "password"}
          errorMessage={error?.message}
          {...rest}
          onChangeText={onChange}
        />
      )}
    />
  );
};

export default TextField;
