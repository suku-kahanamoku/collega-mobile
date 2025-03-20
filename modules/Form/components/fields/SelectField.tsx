import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { StyleProps } from "@/types/component";
import RowCmp from "@/modules/Ui/components/Row";
import { SelectField as SelectFieldType } from "../../type";

interface FieldProps {
  field: SelectFieldType;
  style?: StyleProps;
  onChange?: (text: string) => void;
  [rest: string]: any;
}

const SelectField: React.FC<FieldProps> = ({
  field,
  style,
  onChange,
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = useState("canceled");

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange && onChange(value);
  };

  return (
    <RowCmp
      label={field.label}
      variant={field.variant}
      style={{ ...styles, ...style }}
      {...rest}
    >
      <Picker
        selectedValue={selectedValue}
        prompt={field.prompt}
        style={{ marginLeft: -12 }}
        onValueChange={handleChange}
      >
        {field.options?.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </RowCmp>
  );
};

const styles = StyleSheet.create({
  children: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    height: 44,
  },
});

export default SelectField;
