import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { UiView, UiText } from "@/modules/Ui/components/Themed";
import { RadioField as RadioFieldType } from "../../type";
import RowCmp from "@/modules/Ui/components/Row";

const RadioField: React.FC<{ field: RadioFieldType }> = ({ field }) => {
  const inputElement = (
    <UiView style={styles.radioContainer}>
      {field.options?.map((option) => (
        <TouchableOpacity key={option.value} style={styles.radio}>
          <UiText>{option.label}</UiText>
        </TouchableOpacity>
      ))}
    </UiView>
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
  radioContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  radio: {
    margin: 5,
  },
});

export default RadioField;
