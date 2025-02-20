import React from "react";
import { Drawer as DefaultDrawer } from "react-native-drawer-layout";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";

type Menu = {
  title: string;
  href: string;
};

export default function Drawer({
  children,
  open,
  setOpen,
  menus,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  menus: Menu[];
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
              style={{ marginVertical: 10, fontSize: 18 }}
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
