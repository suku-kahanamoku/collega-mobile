import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, Icon, Card } from "@rneui/themed";

import { useLocale } from "@/modules/Lang/hooks/useLocale";
import { useRoute } from "@/hooks/useRoute";
import Field from "@/modules/Form/components/fields/Field";
import { Field as FieldType } from "@/modules/Form/type";

const SignupCmp = () => {
  const { t } = useLocale();
  const { menuList } = useRoute();
  const loginMenu = menuList.login;

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  const fields: FieldType[] = [
    {
      type: "text",
      name: "email",
      label: t("form.email"),
      inputMode: "email",
      autoComplete: "email",
      placeholder: t("placeholder.email"),
      required: true,
    },
    {
      type: "text",
      name: "firstname",
      label: t("form.firstname"),
      inputMode: "text",
      autoComplete: "given-name",
      placeholder: t("placeholder.firstname"),
      required: true,
    },
    {
      type: "text",
      name: "lastname",
      label: t("form.lastname"),
      inputMode: "text",
      autoComplete: "family-name",
      placeholder: t("placeholder.lastname"),
      required: true,
    },
    {
      type: "password",
      name: "password",
      label: t("form.password"),
      inputMode: "text",
      autoComplete: "new-password",
      placeholder: t("placeholder.password"),
      required: true,
      secureTextEntry: true,
    },
    {
      type: "password",
      name: "repeat_password",
      label: t("form.repeat_password"),
      inputMode: "text",
      autoComplete: "new-password",
      placeholder: t("placeholder.repeat_password"),
      required: true,
      secureTextEntry: true,
    },
  ];

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <Card wrapperStyle={styles.wrapper}>
      <Card.Title h1>{t("signup.title")}</Card.Title>

      <Card.Divider />

      <View style={styles.field}>
        {fields.map((field) => (
          <Field
            key={field.name}
            field={field}
            style={{
              container: { gap: 4 },
              label: { fontSize: 16 },
              children: { height: 46 },
            }}
            onChange={(value) => handleChange(field.name, value)}
          />
        ))}
      </View>

      <Button title={t("btn.signup")} onPress={handleSubmit} />

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
  backLinkContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  backLinkText: {
    textDecorationLine: "underline",
  },
});
