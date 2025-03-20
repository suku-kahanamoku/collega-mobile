import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack, Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Platform, View } from "react-native";

import { useRoute } from "@/hooks/useRoute";
import { useTheme } from "@/providers/ThemeProvider";
import { ContractProvider } from "@/modules/Contract/providers/ContractProvider";
import Field from "@/modules/Form/components/fields/Field";

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
  const filterMenu = menuList.contracts_filter;
  const searchField = {
    name: "search",
    label: "",
    placeholder: "Search",
  };

  return (
    <ContractProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.secondary,
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
            headerShown: true,
            title: contractsMenu.title,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name={contractsMenu.icon} color={color} />
            ),
            headerTitle: () => (
              <Field
                key={searchField.name}
                field={searchField}
                style={{
                  label: { height: 0 },
                  children: { height: 44 },
                }}
              />
            ),
            headerTitleContainerStyle: {
              width: "100%",
            },
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
    </ContractProvider>
  );
}
