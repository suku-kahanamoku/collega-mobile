import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { useTheme } from "@/providers/ThemeProvider";
import { ContractProviderCmp } from "@/providers/ContractProvider";
import { useRoute } from "@/providers/RouteProvider";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  color: string;
  name?: React.ComponentProps<typeof FontAwesome>["name"];
}) {
  return <FontAwesome size={24} {...props} />;
}

export default function ContractsLayout() {
  const { colors } = useTheme();
  const { menuList } = useRoute();
  const contractMenu = menuList.contracts;

  return (
    <ContractProviderCmp>
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
            title: contractMenu.title,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name={contractMenu.icon} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="[id]"
          options={{
            title: "Contract",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="file-text" color={color} />
            ),
          }}
        />
      </Tabs>
    </ContractProviderCmp>
  );
}
