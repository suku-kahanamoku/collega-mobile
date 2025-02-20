import React from "react";
import { Drawer as DefaultDrawer } from "react-native-drawer-layout";
import { Link } from "expo-router";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";

import { IMenu } from "@/hooks/useMenus";

export default function Drawer({
  children,
  open,
  setOpen,
  menus,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  menus: IMenu[];
}) {
  const { colors } = useTheme();

  return (
    <DefaultDrawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => (
        <View
          style={{ flex: 1, padding: 20, backgroundColor: colors.background }}
        >
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              style={{
                marginVertical: 10,
                fontSize: 18,
                color: menu.active ? colors.text : colors.text,
                backgroundColor: menu.active ? colors.primary : "transparent",
                padding: 10,
                borderRadius: 5,
              }}
            >
              {menu.title}
            </Link>
          ))}
        </View>
      )}
      drawerPosition="right"
    >
      {children}
    </DefaultDrawer>
  );
}
