import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack, Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { useTheme } from "@/providers/ThemeProvider";
import { ContractProviderCmp } from "@/modules/Contract/providers/ContractProvider";
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
  const contractsMenu = menuList.contracts;
  const contractMenu = menuList.contract;
  const filterMenu = menuList.contract_filter;

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
            title: contractsMenu.title,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name={contractsMenu.icon} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="[id]"
          options={{
            title: contractMenu.title,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name={contractMenu.icon} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="filter"
          options={{
            title: filterMenu.title,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name={filterMenu.icon} color={color} />
            ),
          }}
        />
      </Tabs>
    </ContractProviderCmp>
  );
}
