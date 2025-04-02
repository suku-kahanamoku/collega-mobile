import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { StyleProps } from "@/types/component";
import { CheckboxField as CheckboxFieldType } from "../../type";
import { CheckBox } from "@rneui/themed";

interface FieldProps {
  field: CheckboxFieldType;
  style?: StyleProps;
  onChange?: (value: boolean) => void;
  [rest: string]: any;
}

const CheckboxField: React.FC<FieldProps> = ({
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
