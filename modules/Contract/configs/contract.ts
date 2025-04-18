import {
  IOption,
  ISelectField,
  ITextField,
  ICheckboxField,
  IRadioField,
  ITextareaField,
} from "@/modules/Form/types/field.interface";

export const FETCH_OPTIONS = {
  url: "https://collega.cz/security/hook/get-contract",
  method: "GET",
};

export const STATUS_OPTIONS: IOption[] = [
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
  | ITextField
  | ISelectField
  | ICheckboxField
  | IRadioField
  | ITextareaField
)[] = [
  {
    type: "text",
    name: "partner_name",
    label: "contract.attr.partner_name",
    autoComplete: "name",
    autoFocus: true,
    placeholder: "Enter partner name",
    variant: "inline",
  },
  {
    type: "text",
    name: "product_name",
    label: "contract.attr.product_name",
    autoComplete: "off",
    placeholder: "Enter product name",
    variant: "inline",
  },
  {
    type: "text",
    name: "contract_number",
    label: "contract.attr.contract_number",
    autoComplete: "off",
    placeholder: "Enter contract number",
    variant: "inline",
  },
  {
    type: "text",
    name: "client",
    label: "contract.attr.client",
    autoComplete: "name",
    placeholder: "Enter client name",
    variant: "inline",
  },
  {
    type: "text",
    name: "account_number",
    label: "contract.attr.account_number",
    autoComplete: "off",
    placeholder: "Enter account number",
    variant: "inline",
  },
  {
    type: "text",
    name: "consultant1",
    label: "contract.attr.consultant1",
    autoComplete: "name",
    placeholder: "Enter consultant 1 name",
    variant: "inline",
  },
  {
    type: "text",
    name: "consultant2",
    label: "contract.attr.consultant2",
    autoComplete: "name",
    placeholder: "Enter consultant 2 name",
    variant: "inline",
  },
  {
    type: "text",
    name: "consultant3",
    label: "contract.attr.consultant3",
    autoComplete: "name",
    placeholder: "Enter consultant 3 name",
    variant: "inline",
  },
  {
    type: "select",
    name: "status",
    label: "contract.attr.status",
    autoComplete: "off",
    options: STATUS_OPTIONS,
    variant: "inline",
    prompt: "Pick one, just one",
  },
  {
    type: "text",
    name: "commission_status",
    label: "contract.attr.commission_status",
    autoComplete: "off",
    placeholder: "Enter commission status",
    variant: "inline",
  },
  {
    type: "text",
    name: "frequency_type",
    label: "contract.attr.frequency_type",
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
