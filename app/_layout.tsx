import { useState, useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { I18nextProvider } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useMenus } from "@/hooks/useMenus";
import DrawerCmp from "@/components/Drawer";
import ThemeToggleCmp from "@/components/ThemeToggle";
import HamburgerCmp from "@/components/Hamburger";
import LogoCmp from "@/components/Logo";
import LangSwitchCmp from "@/components/LangSwitch";
import i18n from "../lang/i18n";

export default function RootLayout() {
  const [theme, setTheme] = useState("");
  const [open, setOpen] = useState(false);
  const { menus, activeMenu } = useMenus();

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem("LANGUAGE");
        if (storedLanguage) {
          i18n.changeLanguage(storedLanguage);
        }
      } catch (e) {
        console.log(e);
      }
    };
    loadLanguage();
  }, []);

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
                  <>
                    <ThemeToggleCmp setTheme={setTheme} />
                    <LangSwitchCmp />
                    <HamburgerCmp setOpen={setOpen} />
                  </>
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
                  <>
                    <ThemeToggleCmp setTheme={setTheme} />
                    <LangSwitchCmp />
                    <HamburgerCmp setOpen={setOpen} />
                  </>
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
                  <>
                    <ThemeToggleCmp setTheme={setTheme} />
                    <LangSwitchCmp />
                    <HamburgerCmp setOpen={setOpen} />
                  </>
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
