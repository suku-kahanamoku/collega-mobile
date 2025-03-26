import { StyleSheet, FlatList, View } from "react-native";
import { Link } from "expo-router";

import { useRoute } from "@/hooks/useRoute";
import { UiView, UiText } from "@/modules/Ui/components/Themed";
import { useContract } from "@/modules/Contract/hooks/useContract";
import LoadingCmp from "@/modules/Ui/components/Loading";

export default function ContractsScreen() {
  const { contracts, loading, error } = useContract();
  const { menuList } = useRoute();
  const contractsMenu = menuList.contracts;

  if (loading) {
    return <LoadingCmp />;
  }

  if (error) {
    return (
      <UiView style={styles.container}>
        <UiText>{error}</UiText>
      </UiView>
    );
  }

  return (
    <UiView style={styles.container}>
      <FlatList
        data={contracts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`${contractsMenu.href}/${item.id}`} style={styles.item}>
            <View>
              <UiText style={styles.title}>
                {item.partner_name}
                {item.product_name}
              </UiText>
              <UiText style={styles.subtitle}>
                {item.contract_number}
                {item.client}
              </UiText>
            </View>
          </Link>
        )}
      />
    </UiView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontWeight: "bold",
  },
});
