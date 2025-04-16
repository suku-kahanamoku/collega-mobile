import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, Icon, Card } from "@rneui/themed";

import { useLang } from "@/modules/Lang/hooks/useLang";
import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { useRoute } from "@/hooks/useRoute";
import Field from "@/modules/Form/components/fields/Field";

const SignupCmp = () => {
  const { t } = useLang();
  const { fields } = useAuth();
  const { menuList } = useRoute();
  const loginMenu = menuList.login;

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeat_password: "",
  });

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
        {fields
          .filter((field) => field.name !== "login")
          .map((field) => (
            <Field
              field={field}
              key={field.name}
              onChange={(value) => handleChange(field.name, value)}
            />
          ))}
      </View>

      <Button
        title={t("btn.signup")}
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
