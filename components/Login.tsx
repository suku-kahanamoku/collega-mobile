import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Text, Button, SocialIcon } from "@rneui/themed";

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
    <View style={styles.container}>
      <Text style={styles.title}>Log in to your account</Text>

      <View style={styles.content}>
        <View style={styles.socialButtons}>
          <Button
            size="sm"
            type="clear"
            icon={<SocialIcon type="facebook" />}
          />
          <Button size="sm" type="clear" icon={<SocialIcon type="google" />} />
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
          <Text>Don't have an account?</Text>
          <Link href="/signup" style={styles.signupLink}>
            <Text>Sign up</Text>
          </Link>
        </View>
      </View>

      <View style={styles.footer}>
        <Button title="Login" onPress={handleSubmit} />
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
    justifyContent: "space-around",
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
