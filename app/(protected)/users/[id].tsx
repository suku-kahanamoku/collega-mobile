import { ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { useUser } from "@/modules/User/hooks/useUser";
import RecordNotFoundPage from "@/modules/Ui/components/RecordNotFound";
import UserCardCmp from "@/modules/User/components/UserCard";

export default function UserScreen() {
  const { id } = useLocalSearchParams();
  const { users } = useUser();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <RecordNotFoundPage />;
  }

  return (
    <ScrollView>
      <UserCardCmp item={user} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
