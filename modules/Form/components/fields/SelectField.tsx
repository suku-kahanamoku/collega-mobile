import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import { UiView, UiText } from "@/modules/Ui/components/Themed";
import RowCmp from "@/modules/Ui/components/Row";
import { SelectField as SelectFieldType } from "../../type";

const SelectField: React.FC<{ field: SelectFieldType }> = ({ field }) => {
  const [selectedValue, setSelectedValue] = useState();

  const inputElement = (
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
  );

  if (field.variant === "inline") {
    return <RowCmp label={field.label}>{inputElement}</RowCmp>;
  }

  return (
    <UiView style={styles.container}>
      <UiText style={styles.label}>{field.label}</UiText>
      {inputElement}
    </UiView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default SelectField;
