import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { ViewCmp, TextCmp } from "@/components/Themed";
import { useContract } from "@/providers/ContractProvider";

export default function ContractScreen() {
  const { id } = useLocalSearchParams();
  const { contracts } = useContract();
  const user = contracts.find((c) => c.id === Number(id));

  if (!user) {
    return (
      <ViewCmp style={styles.container}>
        <TextCmp>Contract not found</TextCmp>
      </ViewCmp>
    );
  }

  return (
    <ViewCmp style={styles.container}>
      <TextCmp style={styles.title}>{user.id}</TextCmp>
    </ViewCmp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
