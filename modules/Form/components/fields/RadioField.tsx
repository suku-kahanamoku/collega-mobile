import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { UiView, UiText } from "@/modules/Ui/components/Themed";
import { RadioField as RadioFieldType } from "../../type";

const RadioField: React.FC<{ field: RadioFieldType }> = ({ field }) => {
  return (
    <UiView style={styles.container}>
      {field.options?.map((option) => (
        <TouchableOpacity key={option.value} style={styles.radio}>
          <UiText>{option.label}</UiText>
        </TouchableOpacity>
      ))}
    </UiView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  radio: {
    margin: 5,
  },
});

export default RadioField;
