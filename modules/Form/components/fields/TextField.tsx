import React, { forwardRef } from "react";
import { InputModeOptions, StyleSheet } from "react-native";
import { Icon, Input } from "@rneui/themed";
import { Controller, Control } from "react-hook-form";

import { useTheme } from "@/modules/Ui/hooks/useTheme";

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
    const { colors } = useTheme();

    return (
      <Controller
        name={field.name}
        control={control}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, invalid },
        }) => (
          <Input
            ref={ref}
            label={field.required ? `${field.label} *` : field.label}
            labelStyle={invalid && { color: colors.error, opacity: 0.7 }}
            placeholder={field.placeholder}
            inputMode={inputModeMap[field.type || "text"]}
            autoComplete={field.autoComplete}
            autoFocus={field.autoFocus}
            value={value}
            secureTextEntry={field.type === "password"}
            submitBehavior="newline"
            errorMessage={error?.message}
            rightIcon={
              !field.clearableDisabled && value?.toString()?.length ? (
                <Icon
                  name="close"
                  size={20}
                  style={styles.icon}
                  onPress={() => {
                    onChange(""); // Clear the input value
                    rest.onReset?.(field); // Call the onReset method
                  }}
                />
              ) : undefined
            }
            rightIconContainerStyle={styles.right}
            inputContainerStyle={invalid && { borderColor: colors.error }}
            {...rest}
            onChangeText={(e) => {
              onChange(e);
              rest.onChange?.(e);
            }}
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
  icon: {
    opacity: 0.5,
  },
});

export default TextFieldCmp;
