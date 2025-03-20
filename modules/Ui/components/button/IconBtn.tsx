import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useTheme } from "@/providers/ThemeProvider";
import { UiIcon } from "../Themed";

interface IconBtnProps extends TouchableOpacityProps {
  name: keyof typeof FontAwesome.glyphMap;
  size?: number;
}

const UiIconBtn: React.FC<IconBtnProps> = ({
  name,
  size = 24,
  onPress,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <UiIcon name={name} size={size} color={colors.text} />
    </TouchableOpacity>
  );
};

export default UiIconBtn;
