import React, { forwardRef } from "react";
import { StyleSheet } from "react-native";
import { Icon, Input } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import { Controller, Control } from "react-hook-form";

import { useTheme } from "@/modules/Ui/hooks/useTheme";

import { IOption, ISelectField } from "../../types/field.interface";

interface IFieldProps {
  field: ISelectField;
  control: Control<any>;
  [rest: string]: any;
}

const SelectFieldCmp = forwardRef<any, IFieldProps>(
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
            label={field.label}
            labelStyle={invalid && { color: colors.error, opacity: 0.7 }}
            placeholder={field.placeholder}
            value={value}
            errorMessage={error?.message}
            InputComponent={forwardRef(() => (
              <Picker
                ref={ref}
                selectedValue={value}
                prompt={field.prompt}
                style={{
                  color: colors.text,
                  width: "100%",
                }}
                onValueChange={(e) => {
                  onChange(e);
                  rest.onChange?.(e);
                }}
              >
                {field.options?.map((option: IOption) => (
                  <Picker.Item
                    key={option.value}
                    label={option.label}
                    value={option.value}
                  />
                ))}
              </Picker>
            ))}
            inputContainerStyle={invalid && { borderColor: colors.error }}
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
            {...rest}
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

export default SelectFieldCmp;
