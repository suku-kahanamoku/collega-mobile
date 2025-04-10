import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Link } from "expo-router";
import { Button, Icon, Header, Text } from "@rneui/themed";

import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { useRoute } from "@/hooks/useRoute";

const logoImg = require("@/assets/images/logo.png");

interface IHeaderComponentProps {
  hideTitle?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderComponent: React.FC<IHeaderComponentProps> = ({
  hideTitle,
  setOpen,
}) => {
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

export default HeaderComponent;
