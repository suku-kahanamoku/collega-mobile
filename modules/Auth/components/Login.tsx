import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, SocialIcon, Card } from "@rneui/themed";

import { useLang } from "@/modules/Lang/hooks/useLang";
import { useRoute } from "@/hooks/useRoute";
import Field from "@/modules/Form/components/fields/Field";

import { useAuth } from "../hooks/useAuth";

const LoginCmp = () => {
  const { t } = useLang();
  const { fieldList, signIn } = useAuth();
  const { menuList } = useRoute();
  const signupMenu = menuList.signup;
  const resetPasswordMenu = menuList.reset_password;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
        {[fieldList.login, fieldList.pass].map((field) => (
          <Field
            field={field}
            key={field.name}
            onChange={(value) => handleChange(field.name, value)}
          />
        ))}
      </View>

      <View style={styles.forgotPassword}>
        <Link
          href={resetPasswordMenu.href}
          style={{
            textDecorationLine: "underline",
          }}
        >
          <Text h4>{t("btn.forgot_password")}</Text>
        </Link>
      </View>

      <Button
        title={t("btn.login")}
        uppercase={true}
        titleStyle={styles.button}
        onPress={handleSubmit}
      />

      <View style={styles.toSignup}>
        <Text>{t("login.account")}</Text>
        <Link
          href={signupMenu.href}
          style={{
            textDecorationLine: "underline",
          }}
        >
          <Text h4>{t("btn.signup")}</Text>
        </Link>
      </View>

      <View style={styles.socialButtons}>
        <Button
          size="lg"
          type="clear"
          icon={<SocialIcon type="facebook" />}
          onPress={signIn}
        />
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
  button: {
    width: "100%",
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
