import { StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";

import { ViewCmp, TextCmp } from "@/components/Themed";
import { useContract } from "@/providers/ContractProvider";
import RowCmp from "@/components/Row";

export default function ContractScreen() {
  const { t } = useTranslation("$");
  const { id } = useLocalSearchParams();
  const { contracts } = useContract();
  const contract = contracts.find((c) => c.id === Number(id));

  const attributes: { key: string; label: string }[] = [
    { key: "partner_name", label: t("contract.attr.partner_name") },
    { key: "product_name", label: t("contract.attr.product_name") },
    { key: "contract_number", label: t("contract.attr.contract_number") },
    { key: "client", label: t("contract.attr.client") },
    { key: "account_number", label: t("contract.attr.account_number") },
    { key: "consultant1", label: t("contract.attr.consultant1") },
    { key: "consultant2", label: t("contract.attr.consultant2") },
    { key: "consultant3", label: t("contract.attr.consultant3") },
    { key: "effectiveDate", label: t("contract.attr.effectiveDate") },
    { key: "endDate", label: t("contract.attr.endDate") },
    {
      key: "expected_commission_date",
      label: t("contract.attr.expected_commission_date"),
    },
    { key: "insurance", label: t("contract.attr.insurance") },
    { key: "partner_logo", label: t("contract.attr.partner_logo") },
    { key: "payment_day", label: t("contract.attr.payment_day") },
    { key: "points", label: t("contract.attr.points") },
    { key: "productVersionId", label: t("contract.attr.productVersionId") },
    { key: "status", label: t("contract.attr.status") },
    { key: "commission_status", label: t("contract.attr.commission_status") },
    { key: "frequency_type", label: t("contract.attr.frequency_type") },
  ];

  if (!contract) {
    return (
      <ViewCmp style={styles.container}>
        <TextCmp>Contract not found</TextCmp>
      </ViewCmp>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {attributes.map((attr) => (
        <RowCmp key={attr.key} label={attr.label}>
          <TextCmp>{contract[attr.key] || "---"}</TextCmp>
        </RowCmp>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
});
