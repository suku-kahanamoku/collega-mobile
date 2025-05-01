import { createRef, useRef } from "react";
import { TextInput } from "react-native";
import { z, ZodTypeAny } from "zod";
import { useForm as useFormRn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLang } from "@/modules/Lang/hooks/useLang";

import { IField } from "../types/field.interface";

export function useForm(fields: IField[]) {
  const { t } = useLang();
  const fieldRefs = useRef<Record<string, React.RefObject<TextInput>>>(
    fields.reduce((acc, field) => {
      acc[field.name] = createRef();
      return acc;
    }, {} as Record<string, React.RefObject<TextInput>>)
  );
  const schema = getFormSchema(fields);
  const form = useFormRn({
    resolver: zodResolver(schema),
    defaultValues: fields.reduce((acc, field) => {
      acc[field.name] = field.value || "";
      return acc;
    }, {} as Record<string, any>),
    mode: "all",
  });

  /**
   * Generates a Zod schema for a single field.
   * @param field The field configuration.
   * @returns The Zod schema for the field.
   */
  function getSchema(field: IField): ZodTypeAny {
    let schema: any;

    switch (field.type) {
      case "email":
        schema = z.string().email(t("message.invalid_email"));
        if (field.required) {
          schema = schema.nonempty(t("message.required"));
        }
        break;

      case "url":
        schema = z.string().url(t("message.invalid_url"));
        if (field.required) {
          schema = schema.nonempty(t("message.required"));
        }
        break;

      case "number":
        schema = z.number();
        if (field.required) {
          schema = schema.refine(
            (val: number | undefined) => val !== undefined,
            t("message.required")
          );
        }
        if (field.min !== undefined) {
          schema = schema.min(
            field.min,
            t("message.min_value", { min: field.min })
          );
        }
        if (field.max !== undefined) {
          schema = schema.max(
            field.max,
            t("message.max_value", { max: field.max })
          );
        }
        break;

      case "checkbox":
        schema = z.boolean();
        if (field.required) {
          schema = schema.refine(
            (val: boolean) => val === true,
            t("message.required")
          );
        }
        break;

      case "select":
      case "radio":
        schema = z.string();
        if (field.required) {
          schema = schema.nonempty(t("message.required"));
        }
        break;

      default:
        schema = z.string();
        if (field.required) {
          schema = schema.nonempty(t("message.required"));
        }
        if (field.minLength !== undefined) {
          schema = schema.min(
            field.minLength,
            t("message.min_length", { minLength: field.minLength })
          );
        }
        if (field.maxLength !== undefined) {
          schema = schema.max(
            field.maxLength,
            t("message.max_length", { maxLength: field.maxLength })
          );
        }
        if (field.validation) {
          field.validation.forEach((rule) => {
            schema = schema.regex(new RegExp(rule.pattern), t(rule.message));
          });
        }
        break;
    }

    // Apply default value if provided
    if (field.value !== undefined) {
      schema = schema.default(field.value);
    }

    return schema;
  }

  /**
   * Generates a Zod schema for a list of fields.
   * @param fields The list of field configurations.
   * @returns The Zod schema for the form.
   */
  function getFormSchema(fields: IField[]) {
    const schemaObject = fields.reduce((acc, field) => {
      acc[field.name] = getSchema(field);
      return acc;
    }, {} as Record<string, ZodTypeAny>);

    return z.object(schemaObject);
  }

  function onSubmitField(fieldName: string): number {
    const fieldNames = fields.map((field) => field.name);
    const currentIndex = fieldNames.indexOf(fieldName);

    if (currentIndex < fieldNames.length - 1) {
      // Focus na další pole podle názvu
      const nextFieldName = fieldNames[currentIndex + 1];
      fieldRefs.current[nextFieldName]?.current?.focus();
    }

    return currentIndex;
  }

  return { fieldRefs, getSchema, getFormSchema, onSubmitField, ...form };
}
