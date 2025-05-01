import React, { forwardRef } from "react";
import { StyleSheet } from "react-native";
import { CheckBox, Input } from "@rneui/themed";
import { Controller, Control } from "react-hook-form";

import { useTheme } from "@/modules/Ui/hooks/useTheme";

import { ICheckboxField } from "../../types/field.interface";

interface IFieldProps {
  field: ICheckboxField;
  control: Control<any>;
  [rest: string]: any;
}

const CheckboxFieldCmp = forwardRef<any, IFieldProps>(
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
            value={value}
            errorMessage={error?.message}
            InputComponent={forwardRef(() => (
              <CheckBox
                checked={!!value} // Ensure value is treated as a boolean
                title={field.label} // Display the label in the checkbox
                containerStyle={styles.checkbox}
                center={true}
                onPress={() => {
                  const newValue = !value; // Toggle the boolean value
                  onChange(newValue);
                  rest.onChange?.(newValue);
                }}
              />
            ))}
            inputContainerStyle={styles.container}
            {...rest}
          />
        )}
      />
    );
  }
);

const styles = StyleSheet.create({
  container: { borderBottomWidth: 0, flex: 1, gap: 10 },
  checkbox: {
    backgroundColor: "transparent",
    marginVertical: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingHorizontal: 0,
  },
});

export default CheckboxFieldCmp;
