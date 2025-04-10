import React, { useState } from "react";
import { Stack } from "expo-router";

import { useRoute } from "@/hooks/useRoute";
import SideMenuCmp from "@/components/menu/SideMenu";
import HeaderCmp from "@/components/Header";

export default function Content() {
  const { menuList, menus } = useRoute();

  const [open, setOpen] = useState(false);
  const notFoundMenu = menuList["404"];

  return (
    <SideMenuCmp open={open} setOpen={setOpen} menus={menus}>
      <Stack>
        {/* vsechny podstranky */}
        <Stack.Screen
          name="(pages)"
          options={{
            header: () => <HeaderCmp setOpen={setOpen} />,
          }}
        />

        {/* not found 404 stranka */}
        <Stack.Screen
          name={notFoundMenu.name}
          options={{
            header: () => <HeaderCmp setOpen={setOpen} />,
            headerTitle: notFoundMenu.title,
            headerTitleAlign: "center",
          }}
        />

        {/* login screen */}
        <Stack.Screen
          name="login"
          options={{
            header: () => <HeaderCmp hideTitle={true} setOpen={setOpen} />,
          }}
        />

        {/* signup screen */}
        <Stack.Screen
          name="signup"
          options={{
            header: () => <HeaderCmp hideTitle={true} setOpen={setOpen} />,
          }}
        />

        {/* reset-password screen */}
        <Stack.Screen
          name="reset-password"
          options={{
            header: () => <HeaderCmp hideTitle={true} setOpen={setOpen} />,
          }}
        />
      </Stack>
    </SideMenuCmp>
  );
}
