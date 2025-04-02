import React, { useState } from "react";
import { Stack } from "expo-router";

import { useRoute } from "@/hooks/useRoute";
import SideMenuCmp from "@/components/menu/SideMenu";
import HeaderComponent from "@/components/HeaderComponent";

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
            header: () => (
              <HeaderComponent
                activeMenu={activeMenu}
                settingsMenu={settingsMenu}
                setOpen={setOpen}
              />
            ),
          }}
        />

        {/* not found 404 stranka */}
        <Stack.Screen
          name={notFoundMenu.name}
          options={{
            header: () => (
              <HeaderComponent
                activeMenu={activeMenu}
                settingsMenu={settingsMenu}
                setOpen={setOpen}
              />
            ),
            headerTitle: notFoundMenu.title,
            headerTitleAlign: "center",
          }}
        />
      </Stack>
    </SideMenuCmp>
  );
}
