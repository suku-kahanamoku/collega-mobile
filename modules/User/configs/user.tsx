import { Option, SelectField, TextField } from "@/modules/Form/type";

export const STATUS_OPTIONS: Option[] = [
  { value: "active", label: "user.status.active" },
  { value: "inactive", label: "user.status.inactive" },
  { value: "pending", label: "user.status.pending" },
];

export const FIELDS: (TextField | SelectField)[] = [
  {
    name: "name",
    label: "user.attr.name",
    inputMode: "text",
    autoComplete: "name",
    autoFocus: true,
  },
  {
    name: "username",
    label: "user.attr.username",
    inputMode: "text",
    autoComplete: "username",
  },
  {
    name: "email",
    label: "user.attr.email",
    inputMode: "email",
    autoComplete: "email",
  },
  {
    type: "select",
    name: "status",
    label: "user.attr.status",
    inputMode: "text",
    autoComplete: "off",
    options: STATUS_OPTIONS,
  },
];
