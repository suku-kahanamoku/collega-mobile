import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

import { UiView } from "@/modules/Ui/components/Themed";
import { SelectField as SelectFieldType } from "../../type";

const SelectField: React.FC<{ field: SelectFieldType }> = ({ field }) => {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <UiView style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        prompt="Pick one, just one"
      >
        {field.options?.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </UiView>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default SelectField;
