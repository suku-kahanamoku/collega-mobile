import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

import { IMenu } from "@/hooks/useMenus";
import { useTheme } from "@/providers/ThemeProvider";

const SettingBtnCmp = ({ menu }: { menu: IMenu }) => {
  const { colors } = useTheme();

  return (
    <Link href={menu.href}>
      <FontAwesome name={menu.icon} size={24} color={colors.text} />
    </Link>
  );
};
export default SettingBtnCmp;
