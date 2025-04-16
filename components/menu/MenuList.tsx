import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ListItem, Text } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo-linear-gradient";

import { useTheme } from "@/modules/Ui/hooks/useTheme";
import { IMenu } from "@/types/menu.interface";

/**
 * Vlastnosti pro komponentu MenuList.
 *
 * @interface IMenuListProps
 * @property {IMenu[]} menus - Pole položek menu, které mají být zobrazeny.
 * @property {(menu: IMenu) => void} [onPress] - Nepovinná callback funkce, která je spuštěna při stisknutí položky menu.
 */
interface IMenuListProps {
  menus: IMenu[];
  onPress?: (menu: IMenu) => void;
}

/**
 * MenuListCmp je funkční React komponenta, která vykresluje scrollovatelný seznam položek menu.
 * Každá položka menu je stylizována s gradientním pozadím a je kliknutelná, což spouští poskytnutý `onPress` callback.
 *
 * @component
 * @param {IMenuListProps} props - Parametry pro komponentu MenuListCmp.
 * @param {Array} props.menus - Pole objektů menu, které mají být zobrazeny v seznamu.
 * @param {Function} [props.onPress] - Nepovinná callback funkce, která je volána při stisknutí položky menu.
 *
 * @returns {JSX.Element} Scrollovatelný seznam položek menu stylizovaných s gradienty a vlastními barvami.
 *
 * @example
 * ```tsx
 * const menus = [
 *   { title: 'Domů' },
 *   { title: 'Profil' },
 *   { title: 'Nastavení' },
 * ];
 *
 * const handlePress = (menu) => {
 *   console.log('Stisknuto menu:', menu.title);
 * };
 *
 * <MenuListCmp menus={menus} onPress={handlePress} />
 * ```
 */
const MenuListCmp: React.FC<IMenuListProps> = ({ menus, onPress }) => {
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
