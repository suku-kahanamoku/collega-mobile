import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

import { useMenus } from "@/hooks/useMenus";
import { useTheme } from "@/providers/ThemeProvider";

const SettingsCmp = ({}: {}) => {
  const { colors } = useTheme();
  const { menuList } = useMenus();

  return (
    <Link href={menuList.settings.href}>
      <FontAwesome name="cog" size={24} color={colors.text} />
    </Link>
  );
};
export default SettingsCmp;
