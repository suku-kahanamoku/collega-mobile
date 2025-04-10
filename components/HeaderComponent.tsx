import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Link } from "expo-router";
import { Button, Icon, Header, Text } from "@rneui/themed";

import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { useRoute } from "@/hooks/useRoute";
import { IMenu } from "@/types/menu";

const logoImg = require("@/assets/images/logo.png");

interface IHeaderComponentProps {
  activeMenu: IMenu;
  settingsMenu: IMenu;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderComponent: React.FC<IHeaderComponentProps> = ({
  activeMenu,
  settingsMenu,
  setOpen,
}) => {
  const { session } = useAuth();
  const { Colors } = useTheme();
  const { menuList, navigate } = useRoute();

  const LogoCmp = () => (
    <Link href={session ? "/" : menuList.login.href}>
      <Image source={logoImg} style={styles.image} resizeMode="contain" />
    </Link>
  );

  const HeaderRightCmp = () => (
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
      leftComponent={<LogoCmp />}
      rightComponent={<HeaderRightCmp />}
      centerComponent={
        activeMenu.title ? (
          <Text h1 h1Style={[styles.title, { color: Colors.dark.secondary }]}>
            {activeMenu.title}
          </Text>
        ) : undefined
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
