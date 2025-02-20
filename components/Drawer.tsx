import React from "react";
import { Drawer as DefaultDrawer } from "react-native-drawer-layout";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";
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
  return (
    <DefaultDrawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => (
        <View style={{ padding: 20 }}>
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              style={{
                marginVertical: 10,
                fontSize: 18,
                color: menu.active ? "white" : "black",
                backgroundColor: menu.active ? "#007bff" : "transparent",
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
