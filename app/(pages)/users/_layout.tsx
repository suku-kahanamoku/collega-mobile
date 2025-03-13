import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { useTheme } from "@/providers/ThemeProvider";
import { UserProviderCmp } from "@/providers/UserProvider";
import { useRouter } from "@/modules/Router/hooks/useRouter";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  color: string;
  name?: React.ComponentProps<typeof FontAwesome>["name"];
}) {
  return <FontAwesome size={24} {...props} />;
}

export default function UsersLayout() {
  const { colors } = useTheme();
  const { menuList } = useRouter();
  const userMenu = menuList.users;

  return (
    <UserProviderCmp>
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
              <TabBarIcon name={userMenu.icon} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="[id]"
          options={{
            title: "User",
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />
      </Tabs>
    </UserProviderCmp>
  );
}
