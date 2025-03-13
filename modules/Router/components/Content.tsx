import React, { useState } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";

import LogoCmp from "@/components/Logo";
import UiIconBtn from "@/modules/Ui/components/button/IconBtn";
import UiIconLink from "@/modules/Ui/components/button/IconLink";
import SideMenuCmp from "@/modules/Router/components/SideMenu";
import { IMenu } from "@/modules/Router/type";
import { useRouter } from "@/modules/Router/hooks/useRouter";

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
      {/* pokud aktivni menu neni settings, tak zobrazi ozubene kolecko, presmeruje na settings */}
      {activeMenu !== settingsMenu && (
        <UiIconLink name={settingsMenu.icon!} href={settingsMenu.href} />
      )}

      {/* hamburger btn, po kliku zobrazi bocni menu */}
      <UiIconBtn name="bars" onPress={() => setOpen((prevOpen) => !prevOpen)} />
    </View>
  );
};

export default function Content() {
  const { menuList, menus, activeMenu } = useRouter();

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
