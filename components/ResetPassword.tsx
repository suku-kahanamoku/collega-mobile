import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, Divider, Icon, Card } from "@rneui/themed";

import Field from "@/modules/Form/components/fields/Field";
import { Field as FieldType } from "@/modules/Form/type";
import { useLocale } from "@/modules/Lang/hooks/useLocale";

const ResetPasswordCmp = () => {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    email: "",
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
  ];

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

      <Button title={t("btn.submit")} onPress={handleSubmit} />

      <Link href="/login">
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
  backLinkContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  backLinkText: {
    fontSize: 16,
  },
});
