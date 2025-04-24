import { Redirect, Stack } from "expo-router";

import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { useRoute } from "@/hooks/useRoute";

export default function PagesLayout() {
  const { session } = useAuth();
  const { menuList, menus } = useRoute();

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
        name={menuList.settings.name}
        options={{
          headerTitle: session?.user?.name,
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
