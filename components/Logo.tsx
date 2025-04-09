import React from "react";
import { StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

import { useSession } from "@/modules/Auth/hooks/useAuth";
import { useRoute } from "@/hooks/useRoute";

const logoImg = require("@/assets/images/logo.png");

export default function LogoCmp() {
  const { session } = useSession();
  const { menuList } = useRoute();
  const loginMenu = menuList.login;

  return (
    <Link href={session ? "/" : loginMenu.href}>
      <Image source={logoImg} style={styles.image} resizeMode="contain" />
    </Link>
  );
}

const styles = StyleSheet.create({
  image: { width: 60, height: 30 },
});
