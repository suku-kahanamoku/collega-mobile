import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, SocialIcon, Card } from "@rneui/themed";

import { useLang } from "@/modules/Lang/hooks/useLang";
import { useRoute } from "@/hooks/useRoute";
import FormCmp from "@/modules/Form/components/Form";

import { useAuth } from "../hooks/useAuth";

const LoginCmp = () => {
  const { t } = useLang();
  const { fieldList, signIn } = useAuth();
  const { menuList } = useRoute();
  const signupMenu = menuList.signup;
  const resetPasswordMenu = menuList.reset_password;

  const formConfig = {
    fields: [fieldList.login, fieldList.pass],
    submitButtonText: t("btn.login"),
  };

  const handleSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <Card wrapperStyle={styles.wrapper}>
      <Card.Title h1>{t("login.title")}</Card.Title>

      <Card.Divider />

      <FormCmp config={formConfig} onSubmit={handleSubmit} />

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
