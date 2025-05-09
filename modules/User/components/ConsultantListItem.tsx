import { StyleSheet, View } from "react-native";
import { Avatar, ListItem, Text } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";

import { IConsultant } from "../type";

const defaultAvatar = require("@/assets/images/default_avatar.png");

export default function ConsultantListItem({
  item,
  onPress,
}: {
  item: IConsultant;
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
          source={
            item.avatarId ? { uri: item.avatarId.toString() } : defaultAvatar
          }
          containerStyle={styles.imgContainer}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h3>{item.fullName}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>{item.emailAddress}</ListItem.Subtitle>
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
