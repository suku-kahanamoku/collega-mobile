import React from "react";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

import { useTheme } from "@/providers/ThemeProvider";
import { ViewCmp } from "@/components/Themed";
import { IMenu } from "@/providers/RouteProvider";

interface MenuListProps {
  menus: IMenu[];
  onPress?: () => void;
}

const MenuListCmp: React.FC<MenuListProps> = ({ menus, onPress }) => {
  const { colors } = useTheme();

  return (
    <ViewCmp style={styles.container}>
      {menus.map((menu, index) => (
        <Link
          key={index}
          href={menu.href}
          style={[
            styles.link,
            {
              color: colors.text,
              backgroundColor: menu.active ? colors.primary : "transparent",
            },
          ]}
          onPress={onPress}
        >
          {menu.title}
        </Link>
      ))}
    </ViewCmp>
  );
};

export default MenuListCmp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  link: {
    marginVertical: 10,
    fontSize: 18,
    padding: 10,
    borderRadius: 5,
  },
});
