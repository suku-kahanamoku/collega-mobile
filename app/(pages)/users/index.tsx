import { StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router";

import { ViewCmp, TextCmp } from "@/components/Themed";
import { useUser } from "@/providers/UserProvider";

export default function UsersScreen() {
  const { users, loading, error } = useUser();

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
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/users/${item.id}`}>
            <ViewCmp style={styles.item}>
              <TextCmp style={styles.title}>{item.name}</TextCmp>
              <TextCmp>{item.email}</TextCmp>
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
