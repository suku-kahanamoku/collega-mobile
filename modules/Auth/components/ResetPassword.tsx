import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, Icon, Card } from "@rneui/themed";

import { useLocale } from "@/modules/Lang/hooks/useLocale";
import { useRoute } from "@/hooks/useRoute";
import Field from "@/modules/Form/components/fields/Field";

import { useAuth } from "../hooks/useAuth";

const ResetPasswordCmp = () => {
  const { t } = useLocale();
  const { fieldList } = useAuth();
  const { menuList } = useRoute();
  const loginMenu = menuList.login;

  const [formData, setFormData] = useState({
    email: "",
  });
  const emailField = fieldList.email;

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <Card wrapperStyle={styles.wrapper}>
      <Card.Title h1>{t("forgot_password.title")}</Card.Title>

      <Card.Divider />

      <View style={styles.field}>
        <Field
          key={emailField.name}
          field={emailField}
          style={{
            container: { gap: 4 },
            label: { fontSize: 16 },
            children: { height: 46 },
          }}
          onChange={(value) => handleChange(emailField.name, value)}
        />
      </View>

      <Button
        title={t("btn.submit")}
        uppercase={true}
        titleStyle={styles.button}
        onPress={handleSubmit}
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
