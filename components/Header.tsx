import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Link } from "expo-router";
import { Button, Icon, Header, Text } from "@rneui/themed";

import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { useRoute } from "@/hooks/useRoute";

const logoImg = require("@/assets/images/logo.png");

/**
 * HeaderCmp je funkční React komponenta, která vykresluje přizpůsobitelnou hlavičku
 * pro aplikaci. Obsahuje logo, navigační odkazy a volitelný text s názvem.
 *
 * @param {Object} props - Vstupní parametry pro komponentu HeaderCmp.
 * @param {boolean} [props.hideTitle] - Určuje, zda má být text s názvem skryt.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setOpen - Funkce pro nastavení
 * stavu, která přepíná otevření/zavření menu nebo panelu.
 *
 * @returns {JSX.Element} Vykreslená hlavička komponenty.
 *
 * @poznámka
 * - Komponenta využívá `@rneui/themed` pro stylování a rozvržení.
 * - Integruje se s `expo-router` pro navigaci.
 * - Hooky `useAuth`, `useTheme` a `useRoute` jsou použity pro správu autentizace,
 *   témat a logiky směrování.
 *
 * @example
 * ```tsx
 * import HeaderCmp from "./HeaderCmp";
 *
 * const App = () => {
 *   const [isMenuOpen, setMenuOpen] = React.useState(false);
 *
 *   return (
 *     <HeaderCmp hideTitle={false} setOpen={setMenuOpen} />
 *   );
 * };
 * ```
 */
interface IHeaderCmpProps {
  hideTitle?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderCmp: React.FC<IHeaderCmpProps> = ({ hideTitle, setOpen }) => {
  const { session } = useAuth();
  const { Colors } = useTheme();
  const { menuList, activeMenu, navigate } = useRoute();
  const loginMenu = menuList.login;
  const settingsMenu = menuList.settings;

  const LeftCmp = () => (
    <Link href={session ? "/" : loginMenu.href}>
      <Image source={logoImg} style={styles.image} resizeMode="contain" />
    </Link>
  );

  const RightCmp = () => (
    <View style={{ flexDirection: "row" }}>
      {activeMenu !== settingsMenu && (
        <Button
          radius="sm"
          type="clear"
          icon={<Icon name={settingsMenu.icon!} color={Colors.dark.text} />}
          onPress={() => navigate(settingsMenu.href)}
        />
      )}
      <Button
        radius="sm"
        type="clear"
        icon={<Icon name="menu" color={Colors.dark.text} />}
        onPress={() => setOpen((prevOpen) => !prevOpen)}
      />
    </View>
  );

  return (
    <Header
      leftComponent={<LeftCmp />}
      rightComponent={<RightCmp />}
      centerComponent={
        hideTitle ? undefined : (
          <Text h1 h1Style={[styles.title, { color: Colors.dark.secondary }]}>
            {activeMenu.title}
          </Text>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 600,
  },
  image: { width: 60, height: 32 },
});

export default HeaderCmp;
