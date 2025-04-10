import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";

import { ICheckboxField } from "../../types/field";

interface IFieldProps {
  field: ICheckboxField;
  onChange?: (value: boolean) => void;
  [rest: string]: any;
}

const CheckboxField: React.FC<IFieldProps> = ({ field, onChange, ...rest }) => {
  const [isChecked, setIsChecked] = useState(field.value || false);

  const handleChange = () => {
    const value = !isChecked;
    setIsChecked(value);
    onChange && onChange(value);
  };

  return (
    <CheckBox
      checked={isChecked}
      title={field.label}
      containerStyle={styles.container}
      {...rest}
      onPress={handleChange}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
});

export default CheckboxField;
