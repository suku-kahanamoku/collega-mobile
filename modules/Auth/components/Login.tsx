import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, SocialIcon, Card } from "@rneui/themed";

import { useLang } from "@/modules/Lang/hooks/useLang";
import { useRoute } from "@/hooks/useRoute";
import FieldCmp from "@/modules/Form/components/fields/Field";
import { useForm } from "@/modules/Form/hooks/useForm";

import { useAuth } from "../hooks/useAuth";
import { ISignIn } from "../types/auth.interface";

const LoginCmp = () => {
  const { t } = useLang();

  const { menuList, navigate } = useRoute();
  const signupMenu = menuList.signup;
  const resetPasswordMenu = menuList.reset_password;
  const dashboardMenu = menuList.dashboard;

  const { fieldList, loading, signIn } = useAuth();
  const fields = [fieldList.login, fieldList.pass];
  const { fieldRefs, control, onSubmitField, handleSubmit } = useForm(fields);

  const handleFieldSubmit = (fieldName: string) => {
    const currentIndex = onSubmitField(fieldName);

    // Zavolání handleSubmit, pokud je to poslední pole
    if (currentIndex + 1 >= fields.length) {
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (data: Record<string, any>) => {
    const result = await signIn(data as ISignIn);
    if (result.bearer) {
      navigate(dashboardMenu.href);
    }
  };

  return (
    <Card wrapperStyle={styles.wrapper}>
      <Card.Title h1>{t("login.title")}</Card.Title>

      <Card.Divider />

      <View style={styles.field}>
        {fields.map((field) => (
          <FieldCmp
            ref={fieldRefs.current[field.name]}
            key={field.name}
            field={field}
            control={control}
            onSubmitEditing={() => handleFieldSubmit(field.name)}
          />
        ))}
      </View>

      <View style={styles.forgotPassword}>
        <Link
          href={resetPasswordMenu.href}
          disabled={loading}
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
        loading={loading}
        onPress={handleSubmit(onSubmit)}
      />

      <View style={styles.toSignup}>
        <Text>{t("login.account")}</Text>
        <Link
          href={signupMenu.href}
          disabled={loading}
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
          disabled={loading}
        />
        <Button
          size="lg"
          type="clear"
          icon={<SocialIcon type="google" />}
          disabled={loading}
        />
        <Button
          size="lg"
          type="clear"
          icon={<SocialIcon type="linkedin" />}
          disabled={loading}
        />
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
