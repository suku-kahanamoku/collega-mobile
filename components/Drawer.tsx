import React from "react";
import { StyleSheet } from "react-native";
import { Drawer } from "react-native-drawer-layout";
import { Link } from "expo-router";

import { IMenu } from "@/hooks/useMenus";
import { useTheme } from "@/providers/ThemeProvider";
import { ViewCmp } from "@/components/Themed";

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
              onPress={() => setOpen(false)}
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
