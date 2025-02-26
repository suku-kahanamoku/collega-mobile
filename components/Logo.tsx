import React from "react";
import { StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

const logoImg = require("@/assets/images/logo.png");

export default function LogoCmp() {
  return (
    <Link href="/">
      <Image source={logoImg} style={styles.image} resizeMode="contain" />
    </Link>
  );
}

const styles = StyleSheet.create({
  image: { width: 60, height: 30 },
});
