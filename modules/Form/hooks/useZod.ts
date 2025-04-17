import { z, ZodTypeAny } from "zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLang } from "@/modules/Lang/hooks/useLang";

import { IField } from "../types/field.interface";

/**
 * Hook to generate Zod schemas and integrate with react-hook-form.
 * @param t Translation function for localized messages.
 */
export function useZod() {
  const { t } = useLang();

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

  /**
   * Creates a react-hook-form instance with Zod schema integration.
   * @param fields The list of field configurations.
   * @returns The react-hook-form instance.
   */
  function useZodForm(fields: IField[]): UseFormReturn<any> {
    const schema = getFormSchema(fields);
    return useForm({
      resolver: zodResolver(schema),
      defaultValues: fields.reduce((acc, field) => {
        acc[field.name] = field.value || "";
        return acc;
      }, {} as Record<string, any>),
    });
  }

  return { getSchema, getFormSchema, useZodForm };
}
