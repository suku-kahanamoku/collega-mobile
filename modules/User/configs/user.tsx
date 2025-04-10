import { IOption, ISelectField, ITextField } from "@/modules/Form/types/field";

export const STATUS_OPTIONS: IOption[] = [
  { value: "active", label: "user.status.active" },
  { value: "inactive", label: "user.status.inactive" },
  { value: "pending", label: "user.status.pending" },
];

export const FIELDS: (ITextField | ISelectField)[] = [
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
