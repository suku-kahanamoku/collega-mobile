import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";

import { useLocale } from "@/modules/Lang/hooks/useLocale";

export default function LoadingPage({
  message = "global.loading",
}: {
  message?: string;
}) {
  const { t } = useLocale();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t(message)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
});
