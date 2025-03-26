import { StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { UiText } from "@/modules/Ui/components/Themed";
import RowCmp from "@/modules/Ui/components/Row";
import { useContract } from "@/modules/Contract/hooks/useContract";
import RecordNotFound from "@/modules/Ui/components/RecordNotFound";

export default function ContractScreen() {
  const { id } = useLocalSearchParams();
  const { contracts, fields } = useContract();
  const contract = contracts.find((c) => c.id === Number(id));

  if (!contract) {
    return <RecordNotFound />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {fields.map((field) => (
        <RowCmp key={field.name} label={field.label} variant="inline">
          <UiText>{contract[field.name] || "---"}</UiText>
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
