import {
  ISelectField,
  ITextField,
  ICheckboxField,
  IRadioField,
  ITextareaField,
} from "@/modules/Form/types/field.interface";

export const FETCH_OPTIONS = {
  url: "https://collega.cz/security/hook/log-in",
  method: "POST",
};

export const FIELDS: (
  | ITextField
  | ISelectField
  | ICheckboxField
  | IRadioField
  | ITextareaField
)[] = [
  {
    type: "text",
    name: "login",
    label: "form.login",
    placeholder: "placeholder.login",
    required: true,
  },
  {
    type: "text",
    name: "email",
    label: "form.email",
    autoComplete: "email",
    placeholder: "placeholder.email",
    required: true,
  },
  {
    type: "text",
    name: "firstname",
    label: "form.firstname",
    autoComplete: "given-name",
    placeholder: "placeholder.firstname",
    required: true,
  },
  {
    type: "text",
    name: "lastname",
    label: "form.lastname",
    autoComplete: "family-name",
    placeholder: "placeholder.lastname",
    required: true,
  },
  {
    type: "password",
    name: "pass",
    label: "form.password",
    autoComplete: "password",
    placeholder: "placeholder.password",
    required: true,
  },
  {
    type: "password",
    name: "repeat_password",
    label: "form.repeat_password",
    autoComplete: "new-password",
    placeholder: "placeholder.repeat_password",
    required: true,
  },
];
