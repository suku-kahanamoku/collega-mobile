import React from "react";
import { Drawer } from "react-native-drawer-layout";
import { Link } from "expo-router";
import { useTheme } from "@react-navigation/native";

import { ViewCmp } from "@/components/Themed";
import { IMenu } from "@/hooks/useMenus";

export default function DrawerCmp({
  children,
  open,
  menus,
  setOpen,
}: {
  children: React.ReactNode;
  open: boolean;
  menus: IMenu[];
  setOpen: (open: boolean) => void;
}) {
  const { colors } = useTheme();

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => (
        <ViewCmp style={{ flex: 1, padding: 20 }}>
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              style={{
                marginVertical: 10,
                fontSize: 18,
                color: colors.text,
                backgroundColor: menu.active ? colors.primary : "transparent",
                padding: 10,
                borderRadius: 5,
              }}
            >
              {menu.title}
            </Link>
          ))}
        </ViewCmp>
      )}
      drawerPosition="right"
    >
      {children}
    </Drawer>
  );
}
