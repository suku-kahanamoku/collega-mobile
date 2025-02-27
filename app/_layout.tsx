import { useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar, View, StyleSheet } from "react-native";
import { I18nextProvider } from "react-i18next";

import i18n from "@/i18n/config";
import { useMenus } from "@/hooks/useMenus";
import DrawerCmp from "@/components/Drawer";
import HamburgerCmp from "@/components/Hamburger";
import LogoCmp from "@/components/Logo";
import SettingBtnCmp from "@/components/SettingBtn";

export default function RootLayout() {
  const { menuList, menus, activeMenu } = useMenus();

  const [theme, setTheme] = useState("");
  const [open, setOpen] = useState(false);

  const page404 = menuList["404"];

  console.log(activeMenu)

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
        <StatusBar barStyle={"default"} />

        <DrawerCmp open={open} setOpen={setOpen} menus={menus}>
          <Stack>
            <Stack.Screen
              name="(pages)"
              options={{
                headerLeft: LogoCmp,
                headerRight: () => (
                  <View style={styles.rightMenu}>
                    <SettingBtnCmp />
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
                    <SettingBtnCmp />
                    <HamburgerCmp setOpen={setOpen} />
                  </View>
                ),
                headerTitle: page404.title,
                headerTitleAlign: "center",
              }}
            />
          </Stack>
        </DrawerCmp>
      </ThemeProvider>
    </I18nextProvider>
  );
}

const styles = StyleSheet.create({
  rightMenu: { flexDirection: "row", gap: 12 },
});
