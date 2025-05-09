import { StyleSheet, View } from "react-native";
import { Avatar, Button, ListItem, Text } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";

import { useTheme } from "@/modules/Ui/hooks/useTheme";

import { IContract } from "../type";

const logoImg = require("@/assets/images/logo.png");

export default function ContractListItemCmp({
  item,
  onPress,
  onDelete,
}: {
  item: IContract;
  onPress: () => void;
  onDelete: () => void;
}) {
  const { colors } = useTheme();

  return (
    <ListItem.Swipeable
      Component={TouchableScale as any}
      bottomDivider
      rightWidth={60}
      rightContent={(close) => (
        <Button
          type="clear"
          icon={{ name: "delete-outline", color: colors.error, size: 32 }}
          containerStyle={styles.deleteBtn}
          onPress={() => {
            onDelete();
            close();
          }}
        />
      )}
      onPress={onPress}
    >
      <View style={styles.listItem}>
        <Avatar
          rounded
          source={item.partner_logo ? { uri: item.partner_logo } : logoImg}
          containerStyle={styles.imgContainer}
          avatarStyle={styles.img}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h3>{item.partner_name}</Text>
          </ListItem.Title>
          <ListItem.Title>
            <Text h4>{item.product_name}</Text>
          </ListItem.Title>
          <ListItem.Subtitle style={{ color: colors.secondary }}>
            {item.client}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </View>
    </ListItem.Swipeable>
  );
}

const styles = StyleSheet.create({
  listItem: { flex: 1, flexDirection: "row", alignItems: "center" },
  imgContainer: { marginRight: 16 },
  img: { width: "auto", height: "auto" },
  deleteBtn: {
    flex: 1,
    justifyContent: "center",
  },
});
