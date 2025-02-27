import React from "react";
import { TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useTheme } from "@/providers/ThemeProvider";

export default function HamburgerCmp({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={() => setOpen((prevOpen) => !prevOpen)}>
      <FontAwesome name="bars" size={24} color={colors.text} />
    </TouchableOpacity>
  );
}
