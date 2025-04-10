import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ListItem, Text } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo-linear-gradient";

import { useTheme } from "@/providers/ThemeProvider";
import { IMenu } from "@/types/menu";

interface MenuListProps {
  menus: IMenu[];
  onPress?: (menu: IMenu) => void;
}

const MenuListCmp: React.FC<MenuListProps> = ({ menus, onPress }) => {
  const { Colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: Colors.dark.primary }]}
    >
      {menus.map((menu, index) => (
        <ListItem
          Component={TouchableScale}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [Colors.dark.primary2, Colors.dark.primary],
            start: { x: 2, y: 0 },
            end: { x: 0.2, y: 0 },
          }}
          bottomDivider
          key={index}
          onPress={() => onPress && onPress(menu)}
        >
          <ListItem.Content>
            <ListItem.Title>
              <Text
                style={{
                  color: Colors.dark.secondary,
                }}
              >
                {menu.title}
              </Text>
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
});

export default MenuListCmp;
