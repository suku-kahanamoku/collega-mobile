import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Input } from "@rneui/themed";

import { StyleProps } from "@/types/component";
import { SelectField as SelectFieldType } from "../../type";
import { useTheme } from "@/hooks/useTheme";

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
  const { colors } = useTheme();
  const [value, setValue] = useState(field.value);
  const [selectedValue, setSelectedValue] = useState("canceled");

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange && onChange(value);
  };

  const PickerComponent = React.forwardRef((props, ref) => (
    <Picker
      ref={ref as any} // Cast ref to any to avoid type errors
      selectedValue={selectedValue}
      prompt={field.prompt}
      style={{
        color: colors.text,
        width: "100%",
      }}
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
  ));

  return (
    <>
      <Input
        label={field.label}
        placeholder={field.placeholder}
        InputComponent={PickerComponent}
        {...rest}
      />
    </>
  );
};

export default SelectField;
