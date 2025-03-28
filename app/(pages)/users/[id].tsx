import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { UiView, UiText } from "@/modules/Ui/components/Themed";
import { useUser } from "@/modules/User/hooks/useUser";
import RecordNotFound from "@/modules/Ui/components/RecordNotFound";

export default function UserScreen() {
  const { id } = useLocalSearchParams();
  const { users } = useUser();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <RecordNotFound />;
  }

  return (
    <UiView style={styles.container}>
      <UiText style={styles.title}>{user.name}</UiText>
      <UiText>{user.email}</UiText>
      <UiText>{user.username}</UiText>
    </UiView>
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
