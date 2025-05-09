import { StyleSheet, View } from "react-native";
import { Card, Icon, ListItem, Text } from "@rneui/themed";

import RowCmp from "@/modules/Ui/components/Row";
import { useTheme } from "@/modules/Ui/hooks/useTheme";

import { IUser } from "../type";

export default function UserCard({ item }: { item: IUser }) {
  const { colors } = useTheme();

  return (
    <Card>
      <Card.Title h2>{item.fullname}</Card.Title>
      <Card.Title h3>{item.email}</Card.Title>
      <Card.Title h4 style={{ color: colors.secondary }}>
        {item.inicials || "---"}
      </Card.Title>

      <Card.Divider />

      <View style={styles.content}>
        <RowCmp label="Login" variant="inline">
          <Text>{item.login}</Text>
        </RowCmp>

        <RowCmp label="Type" variant="inline">
          <Text>{item.type}</Text>
        </RowCmp>

        <RowCmp label="Kind" variant="inline">
          <Text>{item.kind}</Text>
        </RowCmp>

        <RowCmp label="Franchise ID" variant="inline">
          <Text>{item.franchiseId}</Text>
        </RowCmp>
      </View>

      <Card.Divider />

      <View style={styles.content}>
        <Text h4>Roles</Text>
        {item.addedRoles.length > 0 ? (
          item.addedRoles.map((role, index) => (
            <ListItem key={index} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{role}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))
        ) : (
          <Text>No roles assigned</Text>
        )}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 20,
  },
});
