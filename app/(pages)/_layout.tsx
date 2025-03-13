import { Stack } from "expo-router";

import { useRoute } from "@/hooks/useRoute";

export default function PagesLayout() {
  const { menuList, menus } = useRoute();
  const settingsMenu = menuList.settings;

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
        name={settingsMenu.name}
        options={{
          headerTitle: "Nazev prihlaseneho uzivatele",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
