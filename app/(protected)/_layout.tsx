import { Redirect, Stack } from "expo-router";

import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { useRoute } from "@/hooks/useRoute";
import { useLang } from "@/modules/Lang/hooks/useLang";

export default function PagesLayout() {
  const { t } = useLang();
  const { session } = useAuth();
  const { menuList, menus } = useRoute();
  const settingsMenu = menuList.settings;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* settings screen */}
      <Stack.Screen
        name={settingsMenu.name}
        options={{
          headerTitle: t(settingsMenu.title),
          presentation: "formSheet",
        }}
      />

      {/* protected screens */}
      {session ? (
        menus.map((menu, index) => (
          <Stack.Screen key={index} name={menu.name} />
        ))
      ) : (
        <Redirect href={menuList.login.href} />
      )}
    </Stack>
  );
}
