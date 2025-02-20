import React from "react";
import { Stack } from "expo-router";

import { useMenus } from "@/hooks/useMenus";

export default function StackLayout() {
  const { menus } = useMenus();

  return (
    <Stack>
      {menus.map((menu, index) => (
        <Stack.Screen
          key={index}
          name={menu.href.replace("/", "") || "index"}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack>
  );
}
