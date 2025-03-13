import { Stack } from "expo-router";

import { useRouter } from "@/modules/Router/hooks/useRouter";

export default function PagesLayout() {
  const { menuList, menus } = useRouter();
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
