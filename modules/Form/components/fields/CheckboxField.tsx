import React, { useState } from "react";
import { Switch, StyleSheet } from "react-native";
import { CheckboxField as CheckboxFieldType } from "../../type";
import { UiView, UiText } from "@/modules/Ui/components/Themed";
import RowCmp from "@/modules/Ui/components/Row";

const CheckboxField: React.FC<{ field: CheckboxFieldType }> = ({ field }) => {
  const [isChecked, setIsChecked] = useState(false);

  const inputElement = (
    <Switch value={isChecked} style={styles.switch} onValueChange={(value) => setIsChecked(value)} />
  );

  if (field.variant === "inline") {
    return <RowCmp label={field.label}>{inputElement}</RowCmp>;
  }

  return (
    <UiView style={styles.container}>
      <UiText style={styles.label}>{field.label}</UiText>
      <UiView style={styles.switchContainer}>{inputElement}</UiView>
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
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  switch: {
    marginLeft: 10,
  },
});

export default CheckboxField;
