import { StyleSheet, View } from "react-native";
import { Avatar, ListItem, Text } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";

import { IUser } from "../type";

const logoImg = require("@/assets/images/logo.png");

export default function UserListItem({
  item,
  onPress,
}: {
  item: IUser;
  onPress: () => void;
}) {
  return (
    <ListItem.Swipeable
      Component={TouchableScale as any}
      bottomDivider
      onPress={onPress}
    >
      <View style={styles.listItem}>
        <Avatar
          rounded
          source={item.avatar ? { uri: item.avatar } : logoImg}
          containerStyle={styles.imgContainer}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h3>{item.fullname}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </View>
    </ListItem.Swipeable>
  );
}

const styles = StyleSheet.create({
  listItem: { flex: 1, flexDirection: "row", alignItems: "center" },
  imgContainer: { marginRight: 16 },
});
