import { StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router";

import { UiView, UiText } from "@/modules/Ui/components/Themed";
import { useRouter } from "@/modules/Router/hooks/useRouter";
import { useContract } from "@/modules/Contract/hooks/useContract";

export default function ContractsScreen() {
  const { contracts, loading, error } = useContract();
  const { menuList } = useRouter();
  const contractsMenu = menuList.contracts;

  if (loading) {
    return (
      <UiView style={styles.container}>
        <UiText>Loading...</UiText>
      </UiView>
    );
  }

  if (error) {
    return (
      <UiView style={styles.container}>
        <UiText>{error}</UiText>
      </UiView>
    );
  }

  return (
    <FlatList
      data={contracts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Link href={`${contractsMenu.href}/${item.id}`}>
          <UiView style={styles.item}>
            <UiText style={styles.title}>
              {item.partner_name}
              {item.product_name}
            </UiText>
            <UiText style={styles.subtitle}>
              {item.contract_number}
              {item.client}
            </UiText>
          </UiView>
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
