import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "@rneui/themed";

import { UiView } from "./Themed";
import { useLocale } from "@/modules/Lang/hooks/useLocale";

export default function LoadingPage({
  message = "global.loading",
}: {
  message?: string;
}) {
  const { t } = useLocale();

  return (
    <UiView style={styles.container}>
      <Text style={styles.title}>{t(message)}</Text>
    </UiView>
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
