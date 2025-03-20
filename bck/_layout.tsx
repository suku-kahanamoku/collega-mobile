import FontAwesome from "@expo/vector-icons/FontAwesome";
import { RelativePathString, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { useRoute } from "@/hooks/useRoute";
import { useTheme } from "@/providers/ThemeProvider";
import { ContractProvider } from "@/modules/Contract/providers/ContractProvider";
import Field from "@/modules/Form/components/fields/Field";
import { UiView } from "@/modules/Ui/components/Themed";
import { IMenu } from "@/types/menu";
import { useContract } from "@/modules/Contract/hooks/useContract";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  color: string;
  name?: React.ComponentProps<typeof FontAwesome>["name"];
}) {
  return <FontAwesome size={24} {...props} />;
}

function TabBar(props: {
  menu: IMenu;
  color: string;
  navigate: (href: RelativePathString) => void;
}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
      }}
      onPress={() => props.navigate(props.menu.href)}
    >
      <TabBarIcon name={props.menu.icon} color={props.color} />
      <Text style={{ color: props.color }}>{props.menu.title}</Text>
    </TouchableOpacity>
  );
}

export default function ContractsLayout() {
  const { colors } = useTheme();
  const { menuList, activeMenu, navigate } = useRoute();

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
      <UiView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerTitle: () => (
                <Field
                  key={searchField.name}
                  field={searchField}
                  style={{
                    label: { height: 0 },
                  }}
                />
              ),
              headerBackVisible: false,
            }}
          />

          <Stack.Screen
            name="[id]"
            options={() => {
              const { id } = useLocalSearchParams();
              const { contracts, fields } = useContract();
              const contract = contracts.find((c) => c.id === Number(id));
              console.log(contract?.client);

              return {
                title: contract?.partner_name || contractMenu.title,
                headerTitleAlign: "center",
              };
            }}
          />

          <Stack.Screen
            name="filter"
            options={{
              title: contractsMenu.title,
              headerTitleAlign: "center",
            }}
          />
        </Stack>

        <View style={styles.tabBarContainer}>
          <TabBar
            menu={contractsMenu}
            color={
              activeMenu.syscode === contractsMenu.syscode
                ? colors.secondary
                : colors.text
            }
            navigate={navigate}
          />

          <TabBar
            menu={contractMenu}
            color={
              activeMenu.syscode === contractMenu.syscode
                ? colors.secondary
                : colors.text
            }
            navigate={navigate}
          />

          <TabBar
            menu={filterMenu}
            color={
              activeMenu.syscode === filterMenu.syscode
                ? colors.secondary
                : colors.text
            }
            navigate={navigate}
          />
        </View>
      </UiView>
    </ContractProvider>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});
