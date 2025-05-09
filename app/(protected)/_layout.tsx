import { Redirect, Stack } from "expo-router";

import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { useRoute } from "@/hooks/useRoute";

export default function PagesLayout() {
  const { session } = useAuth();
  const { menuList, protectedRootMenus } = useRoute();

  if (!session) {
    return <Redirect href={menuList.login.href} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {protectedRootMenus.map((menu, index) => (
        <Stack.Screen key={index} name={menu.name} />
      ))}
    </Stack>
  );
}
