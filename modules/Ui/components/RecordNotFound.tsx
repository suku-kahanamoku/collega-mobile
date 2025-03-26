import React from "react";
import { StyleSheet } from "react-native";

import { UiView, UiText } from "./Themed";
import { useLocale } from "@/modules/Lang/hooks/useLocale";

export default function LoadingPage({
  message = "global.record_404",
}: {
  message?: string;
}) {
  const { t } = useLocale();

  return (
    <UiView style={styles.container}>
      <UiText style={styles.title}>{t(message)}</UiText>
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
