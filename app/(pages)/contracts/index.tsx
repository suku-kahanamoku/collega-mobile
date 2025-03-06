import { StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router";

import { ViewCmp, TextCmp } from "@/components/Themed";
import { useContract } from "@/providers/ContractProvider";
import { useRoute } from "@/providers/RouteProvider";

export default function ContractsScreen() {
  const { contracts, loading, error } = useContract();
  const { menuList } = useRoute();
  const contractsMenu = menuList.contracts;

  if (loading) {
    return (
      <ViewCmp style={styles.container}>
        <TextCmp>Loading...</TextCmp>
      </ViewCmp>
    );
  }

  if (error) {
    return (
      <ViewCmp style={styles.container}>
        <TextCmp>{error}</TextCmp>
      </ViewCmp>
    );
  }

  return (
    <FlatList
      data={contracts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Link href={`${contractsMenu.href}/${item.id}`}>
          <ViewCmp style={styles.item}>
            <TextCmp style={styles.title}>
              {item.partner_name}
              {item.product_name}
            </TextCmp>
            <TextCmp style={styles.subtitle}>
              {item.contract_number}
              {item.client}
            </TextCmp>
          </ViewCmp>
        </Link>
      )}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
