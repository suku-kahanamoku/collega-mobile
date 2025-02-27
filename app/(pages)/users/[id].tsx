import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { ViewCmp, TextCmp } from "@/components/Themed";
import { useUser } from "@/providers/UserProvider";

export default function UserScreen() {
  const { id } = useLocalSearchParams();
  const { users } = useUser();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <ViewCmp style={styles.container}>
        <TextCmp>User not found</TextCmp>
      </ViewCmp>
    );
  }

  return (
    <ViewCmp style={styles.container}>
      <TextCmp style={styles.title}>{user.name}</TextCmp>
      <TextCmp>{user.email}</TextCmp>
      <TextCmp>{user.username}</TextCmp>
    </ViewCmp>
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
