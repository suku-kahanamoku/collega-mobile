import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Header, Text } from "@rneui/themed";
import { useTheme } from "@/providers/ThemeProvider";
import LogoCmp from "@/components/Logo";
import { useRoute } from "@/hooks/useRoute";
import { IMenu } from "@/types/menu";

interface HeaderComponentProps {
  activeMenu: IMenu;
  settingsMenu: IMenu;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  activeMenu,
  settingsMenu,
  setOpen,
}) => {
  const { Colors } = useTheme();
  const { navigate } = useRoute();

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
        <Text h1 h1Style={[styles.title, { color: Colors.dark.secondary }]}>
          {activeMenu.title}
        </Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 600,
  },
});

export default HeaderComponent;
