import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

import { useTheme } from "@/providers/ThemeProvider";
import { RedirectProps } from "expo-router/build/link/Link";

interface IconLinkProps extends RedirectProps {
  name: string;
  size?: number;
  onPress?: () => void;
}

const IconLinkCmp: React.FC<IconLinkProps> = ({
  name,
  href,
  size = 24,
  onPress,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Link href={href} onPress={onPress} {...rest}>
      <FontAwesome name={name as any} size={size} color={colors.text} />
    </Link>
  );
};
export default IconLinkCmp;
