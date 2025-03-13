import { StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { ViewCmp, TextCmp } from "@/components/Themed";
import RowCmp from "@/components/Row";
import { useContract } from "@/modules/Contract/hooks/useContract";

export default function ContractScreen() {
  const { id } = useLocalSearchParams();
  const { contracts, fields } = useContract();
  const contract = contracts.find((c) => c.id === Number(id));

  if (!contract) {
    return (
      <ViewCmp style={styles.container}>
        <TextCmp>Contract not found</TextCmp>
      </ViewCmp>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {fields.map((field) => (
        <RowCmp key={field.name} label={field.label}>
          <TextCmp>{contract[field.name] || "---"}</TextCmp>
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
