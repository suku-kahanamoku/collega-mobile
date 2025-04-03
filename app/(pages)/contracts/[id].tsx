import { StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Text } from "@rneui/themed";

import RowCmp from "@/modules/Ui/components/Row";
import { useContract } from "@/modules/Contract/hooks/useContract";
import RecordNotFoundPage from "@/modules/Ui/components/RecordNotFound";

export default function ContractScreen() {
  const { id } = useLocalSearchParams();
  const { contracts, fields } = useContract();
  const contract = contracts.find((c) => c.id === Number(id));

  if (!contract) {
    return <RecordNotFoundPage />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {fields.map((field) => (
        <RowCmp key={field.name} label={field.label} variant="inline">
          <Text>{contract[field.name] || "---"}</Text>
        </RowCmp>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
