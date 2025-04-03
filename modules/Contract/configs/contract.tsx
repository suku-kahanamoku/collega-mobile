import {
  Option,
  SelectField,
  TextField,
  CheckboxField,
  RadioField,
  TextareaField,
} from "@/modules/Form/type";

export const FETCH_OPTIONS = {
  url: "https://collega.cz/security/hook/get-contract?client_id=4703",
  method: "GET",
  headers: {
    Authorization:
      "Bearer def50200b939e8396d98ef29a9ae1eee3050929dc56f3aecdce7a001de95a4aa9431ff3486f47e20c86127bb3316ddb5db6ee8a2990b1b2f9fe03d7d37d0f5ca0eb001f80893412a3f4fce7d130272a804d9bf3a4598ed8e",
  },
};

export const STATUS_OPTIONS: Option[] = [
  { value: "accepted", label: "contract.status.accepted" },
  { value: "send", label: "contract.status.send" },
  { value: "canceled", label: "contract.status.canceled" },
  { value: "denied", label: "contract.status.denied" },
  { value: "paid", label: "contract.status.paid" },
  { value: "urgent", label: "contract.status.urgent" },
  { value: "imported", label: "contract.status.imported" },
  { value: "free", label: "contract.status.free" },
  { value: "missing", label: "contract.status.missing" },
];

export const FIELDS: (
  | TextField
  | SelectField
  | CheckboxField
  | RadioField
  | TextareaField
)[] = [
  {
    type: "text",
    name: "partner_name",
    label: "contract.attr.partner_name",
    inputMode: "text",
    autoComplete: "name",
    autoFocus: true,
    placeholder: "Enter partner name",
    variant: "inline",
  },
  {
    type: "text",
    name: "product_name",
    label: "contract.attr.product_name",
    inputMode: "text",
    autoComplete: "off",
    placeholder: "Enter product name",
    variant: "inline",
  },
  {
    type: "text",
    name: "contract_number",
    label: "contract.attr.contract_number",
    inputMode: "text",
    autoComplete: "off",
    placeholder: "Enter contract number",
    variant: "inline",
  },
  {
    type: "text",
    name: "client",
    label: "contract.attr.client",
    inputMode: "text",
    autoComplete: "name",
    placeholder: "Enter client name",
    variant: "inline",
  },
  {
    type: "text",
    name: "account_number",
    label: "contract.attr.account_number",
    inputMode: "text",
    autoComplete: "off",
    placeholder: "Enter account number",
    variant: "inline",
  },
  {
    type: "text",
    name: "consultant1",
    label: "contract.attr.consultant1",
    inputMode: "text",
    autoComplete: "name",
    placeholder: "Enter consultant 1 name",
    variant: "inline",
  },
  {
    type: "text",
    name: "consultant2",
    label: "contract.attr.consultant2",
    inputMode: "text",
    autoComplete: "name",
    placeholder: "Enter consultant 2 name",
    variant: "inline",
  },
  {
    type: "text",
    name: "consultant3",
    label: "contract.attr.consultant3",
    inputMode: "text",
    autoComplete: "name",
    placeholder: "Enter consultant 3 name",
    variant: "inline",
  },
  {
    type: "select",
    name: "status",
    label: "contract.attr.status",
    inputMode: "text",
    autoComplete: "off",
    options: STATUS_OPTIONS,
    variant: "inline",
    prompt: "Pick one, just one",
  },
  {
    type: "text",
    name: "commission_status",
    label: "contract.attr.commission_status",
    inputMode: "text",
    autoComplete: "off",
    placeholder: "Enter commission status",
    variant: "inline",
  },
  {
    type: "text",
    name: "frequency_type",
    label: "contract.attr.frequency_type",
    inputMode: "text",
    autoComplete: "off",
    placeholder: "Enter frequency type",
    variant: "inline",
  },
  {
    type: "checkbox",
    name: "is_active",
    label: "contract.attr.is_active",
    variant: "inline",
    value: true,
  },
  {
    type: "radio",
    name: "priority",
    label: "contract.attr.priority",
    options: [
      { value: "high", label: "High" },
      { value: "medium", label: "Medium" },
      { value: "low", label: "Low" },
    ],
    variant: "inline",
  },
  {
    type: "textarea",
    name: "description",
    label: "contract.attr.description",
    placeholder: "Enter description",
    variant: "inline",
  },
];
