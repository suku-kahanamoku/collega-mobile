import {
  IOption,
  ISelectField,
  ITextField,
} from "@/modules/Form/types/field.interface";

export const STATUS_OPTIONS: IOption[] = [
  { value: "active", label: "user.status.active" },
  { value: "inactive", label: "user.status.inactive" },
  { value: "pending", label: "user.status.pending" },
];

export const FIELDS: (ITextField | ISelectField)[] = [
  {
    name: "name",
    label: "user.attr.name",
    autoComplete: "name",
    autoFocus: true,
  },
  {
    name: "username",
    label: "user.attr.username",
    autoComplete: "username",
  },
  {
    name: "email",
    label: "user.attr.email",
    autoComplete: "email",
  },
  {
    type: "select",
    name: "status",
    label: "user.attr.status",
    autoComplete: "off",
    options: STATUS_OPTIONS,
  },
];
