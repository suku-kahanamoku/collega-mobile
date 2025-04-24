import React, { useEffect, useState } from "react";
import { SplashScreen, Stack } from "expo-router";

import { useRoute } from "@/hooks/useRoute";
import SideMenuCmp from "@/components/menu/SideMenu";
import HeaderCmp from "@/components/Header";
import { useAuth } from "@/modules/Auth/hooks/useAuth";

// Dokud aplikace neni nactena, nic nezobrazuji
SplashScreen.preventAutoHideAsync();

/**
 * Komponenta `ContentCmp` slouží jako hlavní rozvržení aplikace, spravuje boční menu
 * a vykresluje různé obrazovky v rámci navigátoru typu stack. Využívá hook `useRoute`
 * pro získání dat souvisejících s menu a dynamicky konfiguruje možnosti obrazovek.
 *
 * @komponenta
 *
 * @returns {JSX.Element} Vykreslená komponenta `ContentCmp`.
 *
 * @remarks
 * - Tato komponenta obsahuje boční menu (`SideMenuCmp`), které lze otevřít nebo zavřít.
 * - Definuje několik obrazovek pomocí navigátoru `Stack`, včetně stránky 404 "Not Found",
 *   přihlašovací obrazovky, registrace a resetování hesla.
 * - Každá obrazovka může mít vlastní komponentu záhlaví (`HeaderCmp`) s konfigurovatelnými možnostmi.
 *
 * @example
 * ```tsx
 * import ContentCmp from './components/Content';
 *
 * export default function App() {
 *   return <ContentCmp />;
 * }
 * ```
 */
export default function ContentCmp() {
  const { sessionLoading } = useAuth();
  const { menuList, menus } = useRoute();
  const [open, setOpen] = useState(false);

  const notFoundMenu = menuList["404"];

  useEffect(() => {
    if (!sessionLoading) {
      setTimeout(SplashScreen.hideAsync);
    }
  }, [sessionLoading]);

  if (sessionLoading) {
    return null;
  }

  return (
    <SideMenuCmp open={open} setOpen={setOpen} menus={menus}>
      <Stack>
        {/* vsechny zabezpecene podstranky */}
        <Stack.Screen
          name="(protected)"
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
          name={menuList.login.name}
          options={{
            header: () => <HeaderCmp hideTitle={true} setOpen={setOpen} />,
          }}
        />

        {/* signup screen */}
        <Stack.Screen
          name={menuList.signup.name}
          options={{
            header: () => <HeaderCmp hideTitle={true} setOpen={setOpen} />,
          }}
        />

        {/* reset-password screen */}
        <Stack.Screen
          name={menuList.reset_password.name}
          options={{
            header: () => <HeaderCmp hideTitle={true} setOpen={setOpen} />,
          }}
        />
      </Stack>
    </SideMenuCmp>
  );
}
