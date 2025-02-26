import React from "react";
import { Image } from "react-native";
import { Link } from "expo-router";

const logoImg = require("@/assets/images/logo.png");

export default function LogoCmp() {
  return (
    <Link href="/">
      <Image
        source={logoImg}
        style={{ width: 60, height: 30 }}
        resizeMode="contain"
      />
    </Link>
  );
}
