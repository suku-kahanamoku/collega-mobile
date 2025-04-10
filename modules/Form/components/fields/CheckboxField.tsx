import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";

import { ICheckboxField } from "../../types/field";
import { IStyleProps } from "../../types/component";

interface IFieldProps {
  field: ICheckboxField;
  style?: IStyleProps;
  onChange?: (value: boolean) => void;
  [rest: string]: any;
}

const CheckboxField: React.FC<IFieldProps> = ({
  field,
  style,
  onChange,
  ...rest
}) => {
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

export default CheckboxField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
});
