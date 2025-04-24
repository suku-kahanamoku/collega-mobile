import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Icon } from "@rneui/themed";

import { useRoute } from "@/hooks/useRoute";
import { useTheme } from "@/modules/Ui/hooks/useTheme";
import { ContractProvider } from "@/modules/Contract/providers/ContractProvider";
import FieldCmp from "@/modules/Form/components/fields/Field";
import { useForm } from "@/modules/Form/hooks/useForm";

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
  const { control, handleSubmit } = useForm([searchField]);

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
              <Icon name={contractsMenu.icon!} color={color} />
            ),
            headerTitle: () => (
              <FieldCmp
                key={searchField.name}
                field={searchField}
                control={control}
                renderErrorMessage={false}
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
              <Icon name={contractMenu.icon!} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="filter"
          options={{
            title: filterMenu.title,
            tabBarIcon: ({ color }) => (
              <Icon name={filterMenu.icon!} color={color} />
            ),
          }}
        />
      </Tabs>
    </ContractProvider>
  );
}
