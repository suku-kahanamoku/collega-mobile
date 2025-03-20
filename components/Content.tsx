import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Link, Stack } from "expo-router";

import { useRoute } from "@/hooks/useRoute";
import LogoCmp from "@/components/Logo";
import SideMenuCmp from "@/components/menu/SideMenu";
import { IMenu } from "@/types/menu";
import { UiIcon } from "@/modules/Ui/components/Themed";

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
        <Link href={settingsMenu.href}>
          <UiIcon name={settingsMenu.icon!} />
        </Link>
      )}

      {/* hamburger btn, po kliku zobrazi bocni menu */}
      <TouchableOpacity onPress={() => setOpen((prevOpen) => !prevOpen)}>
        <UiIcon name="bars" />
      </TouchableOpacity>
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
