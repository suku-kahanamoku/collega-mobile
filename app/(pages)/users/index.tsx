import { StyleSheet, FlatList, View } from "react-native";
import { Link } from "expo-router";

import { useRoute } from "@/hooks/useRoute";
import { UiView, UiText } from "@/modules/Ui/components/Themed";
import { useUser } from "@/modules/User/hooks/useUser";
import LoadingCmp from "@/modules/Ui/components/Loading";
import RecordNotFound from "@/modules/Ui/components/RecordNotFound";

export default function UsersScreen() {
  const { users, loading, error } = useUser();
  const { menuList } = useRoute();
  const usersMenu = menuList.users;

  if (loading) {
    return <LoadingCmp />;
  }

  if (error) {
    return <RecordNotFound message="global.records_404" />;
  }

  return (
    <UiView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`${usersMenu.href}/${item.id}`}>
            <View style={styles.item}>
              <UiText style={styles.title}>{item.name}</UiText>
              <UiText>{item.email}</UiText>
            </View>
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
