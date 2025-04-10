import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "@rneui/themed";

import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { IMenu } from "@/types/menu";
import { useLocale } from "@/modules/Lang/hooks/useLocale";
import { useRoute } from "@/hooks/useRoute";
import MenuListCmp from "./MenuList";

interface ISideMenuListProps {
  menus: IMenu[];
  setOpen?: (value: boolean) => void;
}

const SideMenuListCmp: React.FC<ISideMenuListProps> = ({ menus, setOpen }) => {
  const { t } = useLocale();
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
