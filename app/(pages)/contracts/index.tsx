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
    <ViewCmp style={styles.container}>
      <FlatList
        data={contracts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`${contractsMenu.href}/${item.id}` as any}>
            <ViewCmp style={styles.item}>
              <TextCmp style={styles.title}>{item.id}</TextCmp>
            </ViewCmp>
          </Link>
        )}
      />
    </ViewCmp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
