import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, SocialIcon, Divider, Icon } from "@rneui/themed";

import Field from "@/modules/Form/components/fields/Field";
import { Field as FieldType } from "@/modules/Form/type";
import { useLocale } from "@/modules/Lang/hooks/useLocale";

const SignupCmp = () => {
  const { t } = useLocale();
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
    <View style={styles.container}>
      <Text h1 h1Style={styles.title}>
        {t("signup.title")}
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
        <Button title={t("btn.signup")} onPress={handleSubmit} />

        <Link href="/login">
          <View style={styles.backLinkContent}>
            <Icon name="chevron-left" size={20} />
            <Text h4 style={styles.backLinkText}>
              {t("btn.back_login")}
            </Text>
          </View>
        </Link>
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

export default SignupCmp;

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
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
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
