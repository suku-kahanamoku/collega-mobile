import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, Icon, Card } from "@rneui/themed";

import { useLang } from "@/modules/Lang/hooks/useLang";
import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { useRoute } from "@/hooks/useRoute";
import FieldCmp from "@/modules/Form/components/fields/Field";
import { useForm } from "@/modules/Form/hooks/useForm";

const SignupCmp = () => {
  const { t } = useLang();
  const { menuList } = useRoute();
  const loginMenu = menuList.login;

  const { fields } = useAuth();
  const { control, handleSubmit } = useForm(fields);

  const onSubmit = () => {
    console.log("Form Data:");
  };

  return (
    <Card wrapperStyle={styles.wrapper}>
      <Card.Title h1>{t("signup.title")}</Card.Title>

      <Card.Divider />

      <View style={styles.field}>
        {fields
          .filter((field) => field.name !== "login")
          .map((field) => (
            <FieldCmp key={field.name} field={field} control={control} />
          ))}
      </View>

      <Button
        title={t("btn.signup")}
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

export default SignupCmp;

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
