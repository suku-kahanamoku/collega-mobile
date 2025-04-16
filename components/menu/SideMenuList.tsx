import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "@rneui/themed";

import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { useTheme } from "@/modules/Ui/hooks/useTheme";
import { IMenu } from "@/types/menu.interface";
import { useLang } from "@/modules/Lang/hooks/useLang";
import { useRoute } from "@/hooks/useRoute";
import MenuListCmp from "./MenuList";

/**
 * Parametry pro komponentu `SideMenuList`.
 *
 * @interface ISideMenuListProps
 * @property {IMenu[]} menus - Pole položek menu, které se zobrazí v bočním menu.
 * @property {(value: boolean) => void} [setOpen] - Nepovinný callback pro nastavení stavu otevření bočního menu.
 */
interface ISideMenuListProps {
  menus: IMenu[];
  setOpen?: (value: boolean) => void;
}

/**
 * SideMenuListCmp je React funkční komponenta, která vykresluje boční menu
 * a poskytuje funkčnost přihlášení/odhlášení na základě stavu uživatelské relace.
 *
 * @component
 * @param {ISideMenuListProps} props - Parametry komponenty.
 * @param {IMenu[]} props.menus - Pole položek menu, které se zobrazí v bočním menu.
 * @param {(open: boolean) => void} [props.setOpen] - Nepovinný callback pro nastavení stavu otevření menu.
 *
 * @returns {JSX.Element} Vykreslená komponenta bočního menu.
 *
 * @remarks
 * - Tato komponenta používá hook `useLang` pro lokalizaci, `useAuth` pro správu relace,
 *   `useTheme` pro barvy tématu a `useRoute` pro navigaci.
 * - Pokud je uživatel přihlášen, zobrazí se tlačítko pro odhlášení. Jinak se zobrazí tlačítka pro přihlášení a registraci.
 * - Handler `onPress` naviguje na příslušnou trasu a volitelně zavře menu.
 *
 * @example
 * ```tsx
 * <SideMenuListCmp
 *   menus={[
 *     { id: 1, title: "Domů", href: "/home" },
 *     { id: 2, title: "Profil", href: "/profile" },
 *   ]}
 *   setOpen={(open) => console.log("Stav otevření menu:", open)}
 * />
 * ```
 */
const SideMenuListCmp: React.FC<ISideMenuListProps> = ({ menus, setOpen }) => {
  const { t } = useLang();
  const { session, signOut } = useAuth();
  const { Colors } = useTheme();
  const { menuList, navigate } = useRoute();
  const loginMenu = menuList.login;
  const signupMenu = menuList.signup;

  const onPress = (menu: IMenu) => {
    navigate(menu.href);
    setOpen && setOpen(false);
  };

  return (
    <>
      <MenuListCmp menus={menus} onPress={onPress} />
      <View
        style={[styles.container, { backgroundColor: Colors.dark.primary }]}
      >
        {session ? (
          <Button
            title={t("btn.logout")}
            uppercase={true}
            color={Colors.dark.info}
            icon={{ name: "logout", color: Colors.dark.text }}
            iconContainerStyle={{ marginRight: 8 }}
            onPress={() => {
              signOut();
              navigate(loginMenu.href);
              setOpen && setOpen(false);
            }}
          />
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <Button
              title={t("btn.login")}
              uppercase={true}
              color={Colors.dark.info}
              containerStyle={{ flex: 1 }}
              onPress={() => {
                navigate(loginMenu.href);
                setOpen && setOpen(false);
              }}
            />
            <Button
              title={t("btn.signup")}
              uppercase={true}
              color={Colors.dark.secondary}
              containerStyle={{ flex: 1 }}
              onPress={() => {
                navigate(signupMenu.href);
                setOpen && setOpen(false);
              }}
            />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
});

export default SideMenuListCmp;
