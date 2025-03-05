import { Stack } from "expo-router";

import { useRoute } from "@/providers/RouteProvider";

export default function PagesLayout() {
  const { menuList, menus } = useRoute();
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
          headerTitle: "Nazev prihlaseneho uzivatele",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
