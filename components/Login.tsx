import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, SocialIcon, Divider, Card } from "@rneui/themed";

import Field from "@/modules/Form/components/fields/Field";
import { Field as FieldType } from "@/modules/Form/type";
import { useLocale } from "@/modules/Lang/hooks/useLocale";

const LoginCmp = () => {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const fields: FieldType[] = [
    {
      type: "text",
      name: "email",
      label: t("form.email"),
      inputMode: "email",
      autoComplete: "email",
      placeholder: t("placeholder.email"),
    },
    {
      type: "password",
      name: "password",
      label: t("form.password"),
      inputMode: "text",
      autoComplete: "password",
      placeholder: t("placeholder.password"),
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
      <Card.Title h1>{t("login.title")}</Card.Title>

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

      <View style={styles.forgotPassword}>
        <Link href="/reset-password">
          <Text h4>{t("btn.forgot_password")}</Text>
        </Link>
      </View>

      <Button title={t("btn.login")} onPress={handleSubmit} />

      <View style={styles.toSignup}>
        <Text>{t("login.account")}</Text>
        <Link href="/signup">
          <Text h4>{t("btn.signup")}</Text>
        </Link>
      </View>

      <View style={styles.socialButtons}>
        <Button size="lg" type="clear" icon={<SocialIcon type="facebook" />} />
        <Button size="lg" type="clear" icon={<SocialIcon type="google" />} />
        <Button size="lg" type="clear" icon={<SocialIcon type="linkedin" />} />
      </View>
    </Card>
  );
};

export default LoginCmp;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    paddingVertical: 20,
    gap: 20,
  },
  field: {
    gap: 8,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginRight: 4,
  },
  toSignup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
  },
});
