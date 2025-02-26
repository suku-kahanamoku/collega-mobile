import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ThemeToggleCmp({
  toggleTheme,
  theme,
}: {
  toggleTheme: () => void;
  theme: string;
}) {
  return (
    <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 16 }}>
      <FontAwesome
        name={theme === "dark" ? "sun-o" : "moon-o"}
        size={24}
        color={theme === "dark" ? "#FFD700" : "#000"}
      />
    </TouchableOpacity>
  );
}
