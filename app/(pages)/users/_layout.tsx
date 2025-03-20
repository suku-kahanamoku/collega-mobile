import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { useRoute } from "@/hooks/useRoute";
import { useTheme } from "@/providers/ThemeProvider";
import { UserProvider } from "@/modules/User/providers/UserProvider";
import { UiIcon } from "@/modules/Ui/components/Themed";

export default function UsersLayout() {
  const { colors } = useTheme();
  const { menuList } = useRoute();
  const userMenu = menuList.users;

  return (
    <UserProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.secondary,
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: userMenu.title,
            tabBarIcon: ({ color }) => (
              <UiIcon name={userMenu.icon} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="[id]"
          options={{
            title: "User",
            tabBarIcon: ({ color }) => <UiIcon name="user" color={color} />,
          }}
        />
      </Tabs>
    </UserProvider>
  );
}
