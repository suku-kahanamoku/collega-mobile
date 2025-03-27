import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ListItem } from "@rneui/themed";

import { useRoute } from "@/hooks/useRoute";
import { UiView } from "@/modules/Ui/components/Themed";
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
    <UiView>
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
    </UiView>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
  },
});
