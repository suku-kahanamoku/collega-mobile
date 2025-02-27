import { Stack } from "expo-router";

import { useMenus } from "@/hooks/useMenus";

export default function StackLayout() {
  const { menuList, menus } = useMenus();
  const settingsPage = menuList.settings;

  return (
    <Stack>
      {menus.map((menu, index) => (
        <Stack.Screen
          key={index}
          name={menu.name}
          options={{
            headerShown: false,
          }}
        />
      ))}

      <Stack.Screen
        name={settingsPage.name}
        options={{
          headerTitle: 'Nazev prihlaseneho uzivatele',
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
