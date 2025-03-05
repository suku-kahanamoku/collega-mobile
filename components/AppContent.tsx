import React, { useState } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";

import { IMenu, useRoute } from "@/providers/RouteProvider";
import LogoCmp from "@/components/Logo";
import IconBtnCmp from "@/components/button/IconBtn";
import IconLinkCmp from "@/components/button/IconLink";
import SideMenuCmp from "@/components/menu/SideMenu";

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
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      {activeMenu !== settingsMenu && (
        <IconLinkCmp name={settingsMenu.icon!} href={settingsMenu.href} />
      )}
      <IconBtnCmp
        name="bars"
        onPress={() => setOpen((prevOpen) => !prevOpen)}
      />
    </View>
  );
};

export default function AppContent() {
  const { menuList, menus, activeMenu } = useRoute();

  const [open, setOpen] = useState(false);
  const notFoundMenu = menuList["404"];
  const settingsMenu = menuList.settings;

  return (
    <SideMenuCmp open={open} setOpen={setOpen} menus={menus}>
      <Stack>
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
