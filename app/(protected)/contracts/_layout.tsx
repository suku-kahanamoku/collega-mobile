import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Icon } from "@rneui/themed";

import { useRoute } from "@/hooks/useRoute";
import { useTheme } from "@/modules/Ui/hooks/useTheme";
import { ContractProvider } from "@/modules/Contract/providers/ContractProvider";
import SearchCmp from "@/modules/Contract/components/Search";
import { useLang } from "@/modules/Lang/hooks/useLang";

export default function ContractsLayout() {
  const { t } = useLang();
  const { colors } = useTheme();
  const { menuList } = useRoute();
  const contractsMenu = menuList.contracts;
  const contractMenu = menuList.contract;

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
            title: t(contractsMenu.title),
            tabBarIcon: ({ color }) => (
              <Icon name={contractsMenu.icon!} color={color} />
            ),
            headerTitle: () => <SearchCmp />,
            headerTitleContainerStyle: {
              width: "100%",
            },
          }}
        />

        <Tabs.Screen
          name="[id]"
          options={{
            title: t(contractMenu.title),
            tabBarIcon: ({ color }) => (
              <Icon name={contractMenu.icon!} color={color} />
            ),
          }}
        />
      </Tabs>
    </ContractProvider>
  );
}
