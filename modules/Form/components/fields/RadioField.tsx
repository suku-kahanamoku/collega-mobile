import React from "react";
import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";
import { Controller, Control } from "react-hook-form";

import { IRadioField } from "../../types/field.interface";

interface IFieldProps {
  field: IRadioField;
  control: Control<any>;
  [rest: string]: any;
}

const RadioFieldCmp: React.FC<IFieldProps> = ({ field, control, ...rest }) => {
  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <React.Fragment>
          {field.options?.map((option, index) => (
            <CheckBox
              key={index}
              checked={value === option.value} // Check if value matches the option's value
              title={option.label || option.value}
              containerStyle={styles.container}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              {...rest}
              onPress={() => {
                const newValue = value === option.value ? null : option.value; // Toggle the value
                onChange(newValue);
                rest.onChange?.(newValue);
              }}
            />
          ))}
        </React.Fragment>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
});

export default RadioFieldCmp;
