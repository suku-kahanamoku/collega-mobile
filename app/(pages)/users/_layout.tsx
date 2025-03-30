import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Icon } from "@rneui/themed";

import { useRoute } from "@/hooks/useRoute";
import { useTheme } from "@/providers/ThemeProvider";
import { UserProvider } from "@/modules/User/providers/UserProvider";

export default function UsersLayout() {
  const { colors } = useTheme();
  const { menuList } = useRoute();
  const usersMenu = menuList.users;
  const userMenu = menuList.user;

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
            title: usersMenu.title,
            tabBarIcon: ({ color }) => (
              <Icon name={usersMenu.icon!} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="[id]"
          options={{
            title: "User",
            tabBarIcon: ({ color }) => (
              <Icon name={userMenu.icon!} color={color} />
            ),
          }}
        />
      </Tabs>
    </UserProvider>
  );
}
