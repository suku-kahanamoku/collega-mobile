import { Redirect, Stack } from "expo-router";

import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { useRoute } from "@/hooks/useRoute";

export default function PagesLayout() {
  const { session, isLoading } = useAuth();
  const { menuList, menus } = useRoute();
  const settingsMenu = menuList.settings;

  if (!session) {
    return <Redirect href={menuList.login.href} />;
  }

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
