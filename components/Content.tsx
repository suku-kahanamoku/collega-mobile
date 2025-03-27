import React, { useState } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";

import { useRoute } from "@/hooks/useRoute";
import LogoCmp from "@/components/Logo";
import SideMenuCmp from "@/components/menu/SideMenu";
import { IMenu } from "@/types/menu";
import { UiIcon } from "@/modules/Ui/components/Themed";
import { Button, Icon } from "@rneui/themed";

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
    <View style={{ flexDirection: "row", gap: 4 }}>
      {/* pokud aktivni menu neni settings, tak zobrazi ozubene kolecko, presmeruje na settings */}
      {activeMenu !== settingsMenu && (
        <Button
          radius="sm"
          type="clear"
          onPress={() => navigate(settingsMenu.href)}
        >
          <UiIcon name={settingsMenu.icon!} />
        </Button>
      )}

      {/* hamburger btn, po kliku zobrazi bocni menu */}
      <Button
        radius="sm"
        type="clear"
        onPress={() => setOpen((prevOpen) => !prevOpen)}
      >
        <UiIcon name="bars" />
      </Button>
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
