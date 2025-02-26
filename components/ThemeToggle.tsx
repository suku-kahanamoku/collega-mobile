import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

export default function ThemeToggleCmp({
  setTheme,
}: {
  setTheme: (value: "dark" | "light") => void;
}) {
  const { dark } = useTheme();

  const toggleTheme = () => {
    setTheme(dark ? "light" : "dark");
  };

  return (
    <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 16 }}>
      <FontAwesome
        name={dark ? "sun-o" : "moon-o"}
        size={24}
        color={dark ? "#FFD700" : "#000"}
      />
    </TouchableOpacity>
  );
}
