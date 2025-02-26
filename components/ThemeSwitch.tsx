import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const ThemeSwitchCmp = ({
  setTheme,
}: {
  setTheme: (value: "dark" | "light") => void;
}) => {
  const { dark } = useTheme();

  const toggleDarkMode = () => {
    setTheme(dark ? "light" : "dark");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dark Mode:</Text>
      <Switch value={dark} onValueChange={toggleDarkMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
  },
});

export default ThemeSwitchCmp;
