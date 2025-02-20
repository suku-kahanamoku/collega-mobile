import { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, Link } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { Image, TouchableOpacity } from "react-native";

import Drawer from "@/components/Drawer";
import { View } from "@/components/Themed";
import logo from "@/assets/images/logo.png";
import { useMenus } from "@/hooks/useMenus";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts(FontAwesome.font);
  const [open, setOpen] = useState(false);
  const { menus, activeMenu } = useMenus();
  const [theme, setTheme] = useState("dark");

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer open={open} setOpen={setOpen} menus={menus}>
        <Stack>
          <Stack.Screen
            name="(pages)"
            options={{
              headerLeft: LogoCmp,
              headerRight: () => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <ThemeToggleCmp toggleTheme={toggleTheme} theme={theme} />
                  <HamburgerCmp setOpen={setOpen} theme={theme} />
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
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <ThemeToggleCmp toggleTheme={toggleTheme} theme={theme} />
                  <HamburgerCmp setOpen={setOpen} theme={theme} />
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
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <ThemeToggleCmp toggleTheme={toggleTheme} theme={theme} />
                  <HamburgerCmp setOpen={setOpen} theme={theme} />
                </View>
              ),
              headerTitle: "Page not found",
              headerTitleAlign: "center",
            }}
          />
        </Stack>
      </Drawer>
    </ThemeProvider>
  );
}

function LogoCmp() {
  return (
    <Link href="/">
      <Image
        source={logo}
        style={{ width: 60, height: 30 }}
        resizeMode="contain"
      />
    </Link>
  );
}

function HamburgerCmp({
  setOpen,
  theme,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
}) {
  return (
    <TouchableOpacity onPress={() => setOpen((prevOpen) => !prevOpen)}>
      <FontAwesome
        name="bars"
        size={24}
        color={theme === "dark" ? "#fff" : "#000"}
      />
    </TouchableOpacity>
  );
}

function ThemeToggleCmp({
  toggleTheme,
  theme,
}: {
  toggleTheme: () => void;
  theme: string;
}) {
  return (
    <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 16 }}>
      <FontAwesome
        name={theme === "dark" ? "sun-o" : "moon-o"}
        size={24}
        color={theme === "dark" ? "#FFD700" : "#4B0082"}
      />
    </TouchableOpacity>
  );
}
