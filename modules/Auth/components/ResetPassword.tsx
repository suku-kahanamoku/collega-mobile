import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, Icon, Card } from "@rneui/themed";

import { useLang } from "@/modules/Lang/hooks/useLang";
import { useRoute } from "@/hooks/useRoute";
import FieldCmp from "@/modules/Form/components/fields/Field";
import { useForm } from "@/modules/Form/hooks/useForm";

import { useAuth } from "../hooks/useAuth";

const ResetPasswordCmp = () => {
  const { t } = useLang();

  const { menuList } = useRoute();
  const loginMenu = menuList.login;

  const { fieldList } = useAuth();
  const emailField = fieldList.email;
  const { control, handleSubmit } = useForm([emailField]);

  const onSubmit = () => {
    console.log("Form Data:");
  };

  return (
    <Card wrapperStyle={styles.wrapper}>
      <Card.Title h1>{t("forgot_password.title")}</Card.Title>

      <Card.Divider />

      <View style={styles.field}>
        <FieldCmp key={emailField.name} field={emailField} control={control} />
      </View>

      <Button
        title={t("btn.submit")}
        uppercase={true}
        titleStyle={styles.button}
        onPress={handleSubmit(onSubmit)}
      />

      <Link href={loginMenu.href}>
        <View style={styles.backLinkContent}>
          <Icon name="chevron-left" size={20} />
          <Text h4 style={styles.backLinkText}>
            {t("btn.back_login")}
          </Text>
        </View>
      </Link>
    </Card>
  );
};

export default ResetPasswordCmp;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    paddingVertical: 20,
    gap: 20,
  },
  field: {
    gap: 8,
  },
  button: {
    width: "100%",
  },
  backLinkContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  backLinkText: {
    textDecorationLine: "underline",
  },
});
