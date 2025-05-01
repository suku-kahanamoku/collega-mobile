import React, { forwardRef } from "react";
import { StyleSheet } from "react-native";
import { CheckBox, Input } from "@rneui/themed";
import { Controller, Control } from "react-hook-form";

import { useTheme } from "@/modules/Ui/hooks/useTheme";

import { IOption, IRadioField } from "../../types/field.interface";

interface IFieldProps {
  field: IRadioField;
  control: Control<any>;
  [rest: string]: any;
}

const RadioFieldCmp = forwardRef<any, IFieldProps>(
  ({ field, control, ...rest }, ref) => {
    const { colors } = useTheme();

    return (
      <Controller
        name={field.name}
        control={control}
        render={({
          field: { value, onChange },
          fieldState: { error, invalid },
        }) => (
          <Input
            ref={ref}
            label={field.required ? `${field.label} *` : field.label}
            labelStyle={invalid && { color: colors.error, opacity: 0.7 }}
            placeholder={field.placeholder}
            value={value}
            errorMessage={error?.message}
            InputComponent={forwardRef(() => (
              <React.Fragment>
                {field.options?.map((option: IOption) => (
                  <CheckBox
                    key={option.value}
                    checked={value === option.value}
                    title={option.label || option.value}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={styles.container}
                    onPress={() => {
                      const newValue =
                        value === option.value ? "" : option.value; // Toggle the value
                      onChange(newValue);
                      rest.onChange?.(newValue);
                    }}
                  />
                ))}
              </React.Fragment>
            ))}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            {...rest}
          />
        )}
      />
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
});

export default RadioFieldCmp;
