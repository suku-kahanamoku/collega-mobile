import { useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

import { useMenus } from "@/hooks/useMenus";
import DrawerCmp from "@/components/Drawer";
import ThemeToggleCmp from "@/components/ThemeToggle";
import HamburgerCmp from "@/components/Hamburger";
import LogoCmp from "@/components/Logo";

export default function RootLayout() {
  const [open, setOpen] = useState(false);
  const { menus, activeMenu } = useMenus();
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
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
                  <ThemeToggleCmp toggleTheme={toggleTheme} theme={theme} />
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
                  <ThemeToggleCmp toggleTheme={toggleTheme} theme={theme} />
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
                  <ThemeToggleCmp toggleTheme={toggleTheme} theme={theme} />
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
  );
}
