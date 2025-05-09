import { ScrollView, StyleSheet } from "react-native";

import { useRoute } from "@/hooks/useRoute";
import { useUser } from "@/modules/User/hooks/useUser";
import LoadingPage from "@/modules/Ui/components/Loading";
import RecordNotFoundPage from "@/modules/Ui/components/RecordNotFound";
import UserListItemCmp from "@/modules/User/components/UserListItem";

export default function UsersScreen() {
  const { users, loading } = useUser();
  const { menuList, navigate } = useRoute();
  const usersMenu = menuList.users;

  if (loading) {
    return <LoadingPage />;
  }

  if (!users.length) {
    return <RecordNotFoundPage message="global.records_404" />;
  }

  return (
    <ScrollView>
      {users.map((item, i) => (
        <UserListItemCmp
          key={i}
          item={item}
          onPress={() => navigate(`${usersMenu.href}/${item.id}`)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
  },
});
