import React from "react";
import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";
import { Controller, Control } from "react-hook-form";

import { ICheckboxField } from "../../types/field.interface";

interface IFieldProps {
  field: ICheckboxField;
  control: Control<any>;
  [rest: string]: any;
}

const CheckboxFieldCmp: React.FC<IFieldProps> = ({
  field,
  control,
  ...rest
}) => {
  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <CheckBox
          checked={value}
          title={field.label}
          containerStyle={styles.container}
          {...rest}
          onPress={() => {
            onChange(!value);
            rest.onChange?.(!value);
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
});

export default CheckboxFieldCmp;
