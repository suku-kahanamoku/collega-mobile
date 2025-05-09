import { StyleSheet, View } from "react-native";
import { Card, Icon, ListItem, Text } from "@rneui/themed";

import RowCmp from "@/modules/Ui/components/Row";
import { useTheme } from "@/modules/Ui/hooks/useTheme";

import { IConsultant } from "../type";

export default function ConsultantCard({ item }: { item: IConsultant }) {
  const { colors } = useTheme();

  return (
    <Card>
      <Card.Title h2>{item.fullName}</Card.Title>
      <Card.Title h3>{item.emailAddress}</Card.Title>
      <Card.Title h4 style={{ color: colors.secondary }}>
        {item.consultantIdentificationNumber || "---"}
      </Card.Title>

      <Card.Divider />

      <View style={styles.content}>
        <RowCmp label="Points" variant="inline">
          <Text>{item.points}</Text>
        </RowCmp>

        <RowCmp label="Income" variant="inline">
          <Text>{item.income}</Text>
        </RowCmp>

        <RowCmp label="Permanent Address" variant="inline">
          <Text>{item.permanentResidenceAddress || "---"}</Text>
        </RowCmp>

        <RowCmp label="Phone" variant="inline">
          <Text>{item.phone || "---"}</Text>
        </RowCmp>
      </View>

      <Card.Divider />

      <View style={styles.content}>
        <Text h4>Bank Account</Text>
        <ListItem bottomDivider>
          <View style={styles.listItem}>
            <Icon
              name="account-balance"
              color={colors.secondary}
              containerStyle={styles.imgContainer}
            />
            <ListItem.Content>
              <ListItem.Title>
                {item.bankAccountNumber
                  ? `${item.bankAccountPrefix || ""} ${
                      item.bankAccountNumber
                    } / ${item.bankAccountBankCode}`
                  : "---"}
              </ListItem.Title>
            </ListItem.Content>
          </View>
        </ListItem>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 20,
  },
  listItem: { flex: 1, flexDirection: "row", alignItems: "center" },
  imgContainer: { marginRight: 16 },
});
