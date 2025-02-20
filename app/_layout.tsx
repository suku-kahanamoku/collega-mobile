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

import { useColorScheme } from "@/components/useColorScheme";
import Drawer from "@/components/Drawer";
import logo from "@/assets/images/logo.png";
import { useMenus } from "@/hooks/useMenus";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts(FontAwesome.font);
  const colorScheme = useColorScheme();
  const [open, setOpen] = useState(false);
  const { menus, activeMenu } = useMenus();

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

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer open={open} setOpen={setOpen} menus={menus}>
        <Stack>
          <Stack.Screen
            name="(pages)"
            options={{
              headerLeft: LogoCmp,
              headerRight: () => <HamburgerCmp setOpen={setOpen} />,
              headerTitle: activeMenu.title,
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="modal"
            options={{
              presentation: "modal",
              headerLeft: LogoCmp,
              headerRight: () => <HamburgerCmp setOpen={setOpen} />,
              headerTitle: "Modal",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="+not-found"
            options={{
              headerLeft: LogoCmp,
              headerRight: () => <HamburgerCmp setOpen={setOpen} />,
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
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <TouchableOpacity onPress={() => setOpen((prevOpen) => !prevOpen)}>
      <FontAwesome name="bars" size={24} />
    </TouchableOpacity>
  );
}
