import { StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { UiView, UiText } from "@/modules/Ui/components/Themed";
import RowCmp from "@/modules/Ui/components/Row";
import { useContract } from "@/modules/Contract/hooks/useContract";

export default function ContractScreen() {
  const { id } = useLocalSearchParams();
  const { contracts, fields } = useContract();
  const contract = contracts.find((c) => c.id === Number(id));

  if (!contract) {
    return (
      <UiView style={styles.container}>
        <UiText>Contract not found</UiText>
      </UiView>
    );
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
    flexGrow: 1,
    padding: 20,
  },
});
