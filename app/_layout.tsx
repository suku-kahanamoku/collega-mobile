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
import SettingsCmp from "@/components/Settings";

export default function RootLayout() {
  const [theme, setTheme] = useState("");
  const [open, setOpen] = useState(false);
  const { menus, activeMenu } = useMenus();

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
                    <SettingsCmp setTheme={setTheme} />
                    <HamburgerCmp setOpen={setOpen} />
                  </View>
                ),
                headerTitle: activeMenu.title,
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="modal"
              options={{
                presentation: "modal",
                headerLeft: LogoCmp,
                headerRight: () => (
                  <View style={styles.rightMenu}>
                    <SettingsCmp setTheme={setTheme} />
                    <HamburgerCmp setOpen={setOpen} />
                  </View>
                ),
                headerTitle: "Modal",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="+not-found"
              options={{
                headerLeft: LogoCmp,
                headerRight: () => (
                  <View style={styles.rightMenu}>
                    <SettingsCmp setTheme={setTheme} />
                    <HamburgerCmp setOpen={setOpen} />
                  </View>
                ),
                headerTitle: "Page not found",
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
