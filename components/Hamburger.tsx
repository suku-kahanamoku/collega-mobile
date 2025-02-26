import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function HamburgerCmp({
  setOpen,
  theme,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
}) {
  return (
    <TouchableOpacity onPress={() => setOpen((prevOpen) => !prevOpen)}>
      <FontAwesome
        name="bars"
        size={24}
        color={theme === "dark" ? "#fff" : "#000"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  line: {
    width: 30,
    height: 3,
    backgroundColor: "#000",
    marginVertical: 2,
  },
});
