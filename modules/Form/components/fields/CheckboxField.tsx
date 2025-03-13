import React, { useState } from "react";
import { Switch, StyleSheet } from "react-native";
import { FieldItem } from "../../type";

const CheckboxField: React.FC<{ field: FieldItem }> = ({ field }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      value={isChecked}
      onValueChange={(value) => setIsChecked(value)}
      style={styles.switch}
    />
  );
};

const styles = StyleSheet.create({
  switch: {
    flex: 1,
  },
});

export default CheckboxField;
