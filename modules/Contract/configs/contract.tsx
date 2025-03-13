import { Option, SelectField, TextField } from "@/modules/Form/type";

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

export const FIELDS: (TextField | SelectField)[] = [
  {
    name: "partner_name",
    label: "contract.attr.partner_name",
    inputMode: "text",
    autoComplete: "name",
    autoFocus: true,
  },
  {
    name: "product_name",
    label: "contract.attr.product_name",
    inputMode: "text",
    autoComplete: "off",
  },
  {
    name: "contract_number",
    label: "contract.attr.contract_number",
    inputMode: "text",
    autoComplete: "off",
  },
  {
    name: "client",
    label: "contract.attr.client",
    inputMode: "text",
    autoComplete: "name",
  },
  {
    name: "account_number",
    label: "contract.attr.account_number",
    inputMode: "text",
    autoComplete: "off",
  },
  {
    name: "consultant1",
    label: "contract.attr.consultant1",
    inputMode: "text",
    autoComplete: "name",
  },
  {
    name: "consultant2",
    label: "contract.attr.consultant2",
    inputMode: "text",
    autoComplete: "name",
  },
  {
    name: "consultant3",
    label: "contract.attr.consultant3",
    inputMode: "text",
    autoComplete: "name",
  },
  {
    type: 'select',
    name: "status",
    label: "contract.attr.status",
    inputMode: "text",
    autoComplete: "off",
    options: STATUS_OPTIONS,
  },
  {
    name: "commission_status",
    label: "contract.attr.commission_status",
    inputMode: "text",
    autoComplete: "off",
  },
  {
    name: "frequency_type",
    label: "contract.attr.frequency_type",
    inputMode: "text",
    autoComplete: "off",
  },
];
