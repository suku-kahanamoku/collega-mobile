import { useState } from "react";
import { Stack } from "expo-router";
import { StatusBar, View, StyleSheet } from "react-native";

import { useMenus } from "@/hooks/useMenus";
import DrawerCmp from "@/components/Drawer";
import LogoCmp from "@/components/Logo";
import HamburgerCmp from "@/components/HamburgerBtn";
import SettingBtnCmp from "@/components/settings/SettingBtn";
import { ThemeProviderCmp } from "@/providers/ThemeProvider";
import { LocaleProviderCmp } from "@/providers/LocaleProvider";

export default function RootLayout() {
  const { menuList, menus, activeMenu } = useMenus();
  const [open, setOpen] = useState(false);

  const page404 = menuList["404"];
  const settingsPage = menuList.settings;

  return (
    <LocaleProviderCmp>
      <ThemeProviderCmp>
        <StatusBar barStyle={"default"} />

        <DrawerCmp open={open} setOpen={setOpen} menus={menus}>
          <Stack>
            <Stack.Screen
              name="(pages)"
              options={{
                headerLeft: LogoCmp,
                headerRight: () => (
                  <View style={styles.rightMenu}>
                    {activeMenu !== settingsPage && (
                      <SettingBtnCmp menu={settingsPage} />
                    )}
                    <HamburgerCmp setOpen={setOpen} />
                  </View>
                ),
                headerTitle: activeMenu.title,
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name={page404.name}
              options={{
                headerLeft: LogoCmp,
                headerRight: () => (
                  <View style={styles.rightMenu}>
                    <SettingBtnCmp menu={settingsPage} />
                    <HamburgerCmp setOpen={setOpen} />
                  </View>
                ),
                headerTitle: page404.title,
                headerTitleAlign: "center",
              }}
            />
          </Stack>
        </DrawerCmp>
      </ThemeProviderCmp>
    </LocaleProviderCmp>
  );
}

const styles = StyleSheet.create({
  rightMenu: { flexDirection: "row", gap: 12 },
});
