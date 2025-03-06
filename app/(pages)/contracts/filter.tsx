import React from "react";
import {
  StyleSheet,
  ScrollView,
  TextInput,
  InputModeOptions,
  TextInputProps,
} from "react-native";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";

import RowCmp from "@/components/Row";

export default function FilterScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation("$");

  interface InputProps extends TextInputProps {
    key: string;
    label: string;
  }

  const attributes: InputProps[] = [
    {
      key: "partner_name",
      label: t("contract.attr.partner_name"),
      inputMode: "text",
      autoComplete: "name",
      autoFocus: true,
    },
    {
      key: "product_name",
      label: t("contract.attr.product_name"),
      inputMode: "text",
      autoComplete: "off",
    },
    {
      key: "contract_number",
      label: t("contract.attr.contract_number"),
      inputMode: "text",
      autoComplete: "off",
    },
    {
      key: "client",
      label: t("contract.attr.client"),
      inputMode: "text",
      autoComplete: "name",
    },
    {
      key: "account_number",
      label: t("contract.attr.account_number"),
      inputMode: "text",
      autoComplete: "off",
    },
    {
      key: "consultant1",
      label: t("contract.attr.consultant1"),
      inputMode: "text",
      autoComplete: "name",
    },
    {
      key: "consultant2",
      label: t("contract.attr.consultant2"),
      inputMode: "text",
      autoComplete: "name",
    },
    {
      key: "consultant3",
      label: t("contract.attr.consultant3"),
      inputMode: "text",
      autoComplete: "name",
    },
    {
      key: "status",
      label: t("contract.attr.status"),
      inputMode: "text",
      autoComplete: "off",
    },
    {
      key: "commission_status",
      label: t("contract.attr.commission_status"),
      inputMode: "text",
      autoComplete: "off",
    },
    {
      key: "frequency_type",
      label: t("contract.attr.frequency_type"),
      inputMode: "text",
      autoComplete: "off",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {attributes.map((attr) => (
        <RowCmp key={attr.key} label={attr.label}>
          <TextInput
            style={styles.input}
            placeholder={attr.placeholder}
            inputMode={attr.inputMode}
            autoComplete={attr.autoComplete}
            autoFocus={attr.autoFocus}
          />
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
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
