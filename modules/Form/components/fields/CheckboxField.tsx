import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";

import { StyleProps } from "@/types/component";
import RowCmp from "@/modules/Ui/components/Row";
import { CheckboxField as CheckboxFieldType } from "../../type";

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
  const [isChecked, setIsChecked] = useState(field.value);

  const handleChange = (value: boolean) => {
    setIsChecked(value);
    onChange && onChange(value);
  };

  return (
    <RowCmp
      label={field.label}
      variant={field.variant}
      style={{ ...styles, ...style }}
      {...rest}
    >
      <Switch
        value={isChecked}
        trackColor={{ false: "gray" }}
        onValueChange={handleChange}
      />
    </RowCmp>
  );
};

const styles = StyleSheet.create({
  children: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 44,
  },
});

export default CheckboxField;
