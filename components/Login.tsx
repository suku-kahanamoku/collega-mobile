import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, SocialIcon, Divider } from "@rneui/themed";

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
    <View style={styles.container}>
      <Text h1 h1Style={styles.title}>
        {t("login.title")}
      </Text>

      <Divider style={styles.divider} />

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

      <View style={styles.button}>
        <Button title={t("btn.login")} onPress={handleSubmit} />

        <View style={styles.info}>
          <Text>{t("login.account")}</Text>
          <Link href="/signup" style={styles.signupLink}>
            <Text h4>{t("btn.signup")}</Text>
          </Link>
        </View>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.socialButtons}>
        <Button size="lg" type="clear" icon={<SocialIcon type="facebook" />} />
        <Button size="lg" type="clear" icon={<SocialIcon type="google" />} />
        <Button size="lg" type="clear" icon={<SocialIcon type="linkedin" />} />
      </View>
    </View>
  );
};

export default LoginCmp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    gap: 20,
  },
  divider: {
    width: "100%",
  },
  title: {
    marginTop: 20,
  },
  field: {
    width: "100%",
    gap: 16,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    gap: 30,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  signupLink: {
    fontWeight: "bold",
    marginLeft: 4,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
  },
});
