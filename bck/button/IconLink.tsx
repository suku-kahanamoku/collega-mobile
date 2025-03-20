import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { LinkProps } from "expo-router/build/link/Link";

import { useTheme } from "@/providers/ThemeProvider";
import { UiIcon } from "../../modules/Ui/components/Themed";

interface IconLinkProps extends LinkProps {
  name: keyof typeof FontAwesome.glyphMap;
  size?: number;
}

const UiIconLink: React.FC<IconLinkProps> = ({
  name,
  href,
  size = 24,
  onPress,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Link href={href} onPress={onPress} {...rest}>
      <UiIcon name={name} size={size} color={colors.text} />
    </Link>
  );
};
export default UiIconLink;
