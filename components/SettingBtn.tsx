import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Link } from "expo-router";

const SettingsCmp = ({}: {}) => {
  const { colors } = useTheme();

  return (
    <>
      <Link href="/settings">
        <FontAwesome name="cog" size={24} color={colors.text} />
      </Link>
    </>
  );
};
export default SettingsCmp;
