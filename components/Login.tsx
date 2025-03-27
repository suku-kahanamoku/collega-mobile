import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { Button } from "@rneui/themed";

import { UiView, UiText, UiIcon } from "@/modules/Ui/components/Themed";
import Field from "@/modules/Form/components/fields/Field";
import { Field as FieldType } from "@/modules/Form/type";

const LoginCmp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const fields: FieldType[] = [
    {
      type: "text",
      name: "email",
      label: "Email",
      inputMode: "email",
      autoComplete: "email",
      placeholder: "Enter your email",
    },
    {
      type: "text",
      name: "password",
      label: "Password",
      inputMode: "text",
      autoComplete: "password",
      placeholder: "Enter your password",
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
    <UiView style={styles.container}>
      <UiText style={styles.title}>Log in to your account</UiText>

      <View style={styles.content}>
        <View style={styles.socialButtons}>
          <Button
            radius="sm"
            type="clear"
          >
            <UiIcon name="facebook" size={32} color="#1877F2" />
          </Button>
          <Button
            radius="sm"
            type="clear"
            style={[styles.iconButton, styles.googleButton]}
          >
            <UiIcon name="google" size={32} color="#DB4437" />
          </Button>
        </View>

        <View style={styles.divider} />

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

        <View style={styles.info}>
          <UiText>Don't have an account?</UiText>
          <Link href="/signup" style={styles.signupLink}>
            <UiText>Sign up</UiText>
          </Link>
        </View>
      </View>

      <View style={styles.footer}>
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </UiView>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 12,
  },
  content: {
    width: "100%",
    maxWidth: 400,
    gap: 20,
  },
  socialButtons: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
  },
  iconButton: {
    flex: 1,
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  facebookButton: {
    backgroundColor: "#1877F2",
  },
  googleButton: {
    backgroundColor: "#DB4437",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
  },
  field: {
    gap: 16,
  },
  info: {
    flexDirection: "row",
  },
  signupLink: {
    fontWeight: "bold",
    marginLeft: 4,
  },
  footer: {
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
  },
});
