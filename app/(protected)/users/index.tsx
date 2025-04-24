import { ScrollView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ListItem } from "@rneui/themed";

import { useRoute } from "@/hooks/useRoute";
import { useUser } from "@/modules/User/hooks/useUser";
import LoadingPage from "@/modules/Ui/components/Loading";
import RecordNotFoundPage from "@/modules/Ui/components/RecordNotFound";

export default function UsersScreen() {
  const { users, loading } = useUser();
  const { menuList } = useRoute();
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
        <ListItem key={i} bottomDivider>
          <Link href={`${usersMenu.href}/${item.id}`} style={styles.item}>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>
          </Link>
        </ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
  },
});
