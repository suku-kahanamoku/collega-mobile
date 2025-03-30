import React, { useState } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { Button, Icon } from "@rneui/themed";

import { useRoute } from "@/hooks/useRoute";
import LogoCmp from "@/components/Logo";
import SideMenuCmp from "@/components/menu/SideMenu";
import { IMenu } from "@/types/menu";

interface HeaderRightProps {
  activeMenu: IMenu;
  settingsMenu: IMenu;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderRightCmp: React.FC<HeaderRightProps> = ({
  activeMenu,
  settingsMenu,
  setOpen,
}) => {
  const { navigate } = useRoute();

  return (
    <View style={{ flexDirection: "row" }}>
      {/* pokud aktivni menu neni settings, tak zobrazi ozubene kolecko, presmeruje na settings */}
      {activeMenu !== settingsMenu && (
        <Button
          radius="sm"
          type="clear"
          icon={<Icon name={settingsMenu.icon!} />}
          onPress={() => navigate(settingsMenu.href)}
        />
      )}

      {/* hamburger btn, po kliku zobrazi bocni menu */}
      <Button
        radius="sm"
        type="clear"
        icon={<Icon name="menu" />}
        onPress={() => setOpen((prevOpen) => !prevOpen)}
      />
    </View>
  );
};

export default function Content() {
  const { menuList, menus, activeMenu } = useRoute();

  const [open, setOpen] = useState(false);
  const notFoundMenu = menuList["404"];
  const settingsMenu = menuList.settings;

  return (
    <SideMenuCmp open={open} setOpen={setOpen} menus={menus}>
      <Stack>
        {/* vsechny podstranky */}
        <Stack.Screen
          name="(pages)"
          options={{
            headerLeft: LogoCmp,
            headerRight: () =>
              HeaderRightCmp({ activeMenu, settingsMenu, setOpen }),
            headerTitle: activeMenu.title,
            headerTitleAlign: "center",
          }}
        />

        {/* not found 404 stranka */}
        <Stack.Screen
          name={notFoundMenu.name}
          options={{
            headerLeft: LogoCmp,
            headerRight: () =>
              HeaderRightCmp({ activeMenu, settingsMenu, setOpen }),
            headerTitle: notFoundMenu.title,
            headerTitleAlign: "center",
          }}
        />
      </Stack>
    </SideMenuCmp>
  );
}
