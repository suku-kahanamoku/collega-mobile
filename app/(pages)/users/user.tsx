import { StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";

import { ViewCmp, TextCmp } from "@/components/Themed";
import { useUser } from "@/providers/UserProvider";

type UserProfileScreenRouteProp = RouteProp<
  { params: { userId: string } },
  "params"
>;

export default function UserScreen({
  route,
}: {
  route: UserProfileScreenRouteProp;
}) {
  const { userId } = route.params;
  const { users } = useUser();
  const user = users.find((u) => u.id === Number(userId));

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
