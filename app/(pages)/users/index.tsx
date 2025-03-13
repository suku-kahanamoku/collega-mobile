import { StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router";

import { useRoute } from "@/hooks/useRoute";
import { UiView, UiText } from "@/modules/Ui/components/Themed";
import { useUser } from "@/providers/UserProvider";

export default function UsersScreen() {
  const { users, loading, error } = useUser();
  const { menuList } = useRoute();
  const usersMenu = menuList.users;

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
    <UiView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`${usersMenu.href}/${item.id}`}>
            <UiView style={styles.item}>
              <UiText style={styles.title}>{item.name}</UiText>
              <UiText>{item.email}</UiText>
            </UiView>
          </Link>
        )}
      />
    </UiView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
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
