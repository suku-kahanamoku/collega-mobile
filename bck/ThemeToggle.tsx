import React from "react";
import { TouchableOpacity } from "react-native";

import { ITheme, useTheme } from "@/providers/ThemeProvider";
import { UiIcon } from "@/modules/Ui/components/Themed";

export default function ThemeToggleCmp({
  setTheme,
}: {
  setTheme: (value: ITheme) => void;
}) {
  const { dark } = useTheme();

  const toggleTheme = () => {
    setTheme(dark ? "light" : "dark");
  };

  return (
    <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 16 }}>
      <UiIcon
        name={dark ? "sun-o" : "moon-o"}
        color={dark ? "#FFD700" : "#000"}
      />
    </TouchableOpacity>
  );
}
