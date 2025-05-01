import React, { forwardRef } from "react";
import { InputModeOptions, StyleSheet, Text } from "react-native";
import { Icon, Input } from "@rneui/themed";
import { Controller, Control } from "react-hook-form";

import { ITextField } from "../../types/field.interface";
import { useTheme } from "@/modules/Ui/hooks/useTheme";

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
    const { colors } = useTheme();

    return (
      <Controller
        name={field.name}
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error, invalid },
        }) => (
          <Input
            ref={ref}
            label={field.required ? `${field.label} *` : field.label}
            inputContainerStyle={{
              borderColor: invalid ? colors.error : undefined,
            }}
            placeholder={field.placeholder}
            inputMode={inputModeMap[field.type || "text"]}
            autoComplete={field.autoComplete}
            autoFocus={field.autoFocus}
            value={value}
            secureTextEntry={field.type === "password"}
            errorMessage={error?.message}
            rightIcon={
              !field.clearableDisabled && value?.toString()?.length ? (
                <Icon
                  name="close"
                  size={20}
                  onPress={() => {
                    onChange(""); // Clear the input value
                    rest.onReset?.(field); // Call the onReset method
                  }}
                />
              ) : undefined
            }
            rightIconContainerStyle={styles.right}
            {...rest}
            onChangeText={onChange}
            onBlur={(e) => {
              onBlur(); // Mark the field as touched
              rest.onBlur?.(e); // Call the onBlur method
            }}
          />
        )}
      />
    );
  }
);

const styles = StyleSheet.create({
  right: {
    marginVertical: 0,
  },
});

export default TextFieldCmp;
