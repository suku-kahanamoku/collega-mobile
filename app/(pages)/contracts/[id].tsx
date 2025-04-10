import { StyleSheet, ScrollView, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { Card, Icon, ListItem, Rating, Text } from "@rneui/themed";

import RowCmp from "@/modules/Ui/components/Row";
import { useContract } from "@/modules/Contract/hooks/useContract";
import RecordNotFoundPage from "@/modules/Ui/components/RecordNotFound";
import { useTheme } from "@/hooks/useTheme";
import { useLocale } from "@/modules/Lang/hooks/useLocale";

const logoImg = require("@/assets/images/collega_brokers.png");

export default function ContractScreen() {
  const { t } = useLocale();
  const { colors } = useTheme();
  const { id } = useLocalSearchParams();
  const { contracts, fieldList } = useContract();
  const contract = contracts.find((c) => c.id === Number(id));

  if (!contract) {
    return <RecordNotFoundPage />;
  }

  return (
    <ScrollView>
      <Card>
        <Card.Title h2>{contract.partner_name}</Card.Title>
        <Card.Title h3>{contract.product_name}</Card.Title>
        <Card.Title h4 style={{ color: colors.secondary }}>
          {contract.contract_number}
        </Card.Title>

        <Card.Divider />

        <Card.Image
          source={
            contract.partner_logo ? { uri: contract.partner_logo } : logoImg
          }
          style={{ height: 100 }}
        />

        <View style={styles.content}>
          <RowCmp label={fieldList.client.label} variant="inline">
            <Text>{contract.client || "---"}</Text>
          </RowCmp>

          <RowCmp label={fieldList.consultant1.label} variant="inline">
            <Text>{contract.consultant1 || "---"}</Text>
          </RowCmp>

          <RowCmp label={fieldList.consultant2.label} variant="inline">
            <Text>{contract.consultant2 || "---"}</Text>
          </RowCmp>

          <RowCmp label={fieldList.status.label} variant="inline">
            <Text>
              {contract.status
                ? fieldList.status.optionList?.[contract.status]
                : "---"}
            </Text>
          </RowCmp>
        </View>

        <Card.Divider />

        <View style={styles.content}>
          <Text h4>{t("global.documents")}</Text>

          {contract.documents?.map((doc, index) => (
            <ListItem bottomDivider key={index}>
              <Icon name="picture-as-pdf" color={colors.secondary} />
              <ListItem.Content>
                <ListItem.Title>
                  <Link href={doc.link as any}>{doc.name}</Link>
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 20,
  },
});
