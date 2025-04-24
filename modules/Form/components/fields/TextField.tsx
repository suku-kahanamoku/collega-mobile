import React, { forwardRef } from "react";
import { InputModeOptions, StyleSheet } from "react-native";
import { Input } from "@rneui/themed";
import { Controller, Control } from "react-hook-form";

import { ITextField } from "../../types/field.interface";

interface IFieldProps {
  field: ITextField;
  control: Control<any>;
  [rest: string]: any;
}

const inputModeMap: Record<string, InputModeOptions> = {
  number: "numeric",
  email: "email",
  url: "url",
  tel: "tel",
  text: "text",
  password: "text",
};

const TextFieldCmp = forwardRef<any, IFieldProps>(
  ({ field, control, ...rest }, ref) => {
    return (
      <Controller
        name={field.name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            ref={ref}
            label={field.label}
            placeholder={field.placeholder}
            inputMode={inputModeMap[field.type || "text"]}
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
  }
);

export default TextFieldCmp;
