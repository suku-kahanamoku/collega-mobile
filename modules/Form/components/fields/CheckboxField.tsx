import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";

import { StyleProps } from "@/types/component";
import RowCmp from "@/modules/Ui/components/Row";
import { CheckboxField as CheckboxFieldType } from "../../type";

interface FieldProps {
  field: CheckboxFieldType;
  style?: StyleProps;
  [rest: string]: any;
}

const CheckboxField: React.FC<FieldProps> = ({ field, style, ...rest }) => {
  const [isChecked, setIsChecked] = useState(field.value);

  return (
    <RowCmp
      label={field.label}
      variant={field.variant}
      style={{ ...styles, ...style }}
      {...rest}
    >
      <Switch
        value={isChecked}
        onValueChange={(value) => setIsChecked(value)}
      />
    </RowCmp>
  );
};

const styles = StyleSheet.create({
  children: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 44
  },
});

export default CheckboxField;
