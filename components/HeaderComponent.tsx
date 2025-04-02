import React from "react";
import { View } from "react-native";
import { Button, Icon, Header } from "@rneui/themed";
import { useTheme } from "@react-navigation/native";
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
  const { colors } = useTheme();
  const { navigate } = useRoute();

  const HeaderRightCmp = () => (
    <View style={{ flexDirection: "row" }}>
      {activeMenu !== settingsMenu && (
        <Button
          radius="sm"
          type="clear"
          icon={<Icon name={settingsMenu.icon!} />}
          onPress={() => navigate(settingsMenu.href)}
        />
      )}
      <Button
        radius="sm"
        type="clear"
        icon={<Icon name="menu" />}
        onPress={() => setOpen((prevOpen) => !prevOpen)}
      />
    </View>
  );

  return (
    <Header
      leftComponent={<LogoCmp />}
      rightComponent={<HeaderRightCmp />}
      backgroundColor={colors.background}
    />
  );
};

export default HeaderComponent;
