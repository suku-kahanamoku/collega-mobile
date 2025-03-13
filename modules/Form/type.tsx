import { TextInputProps } from "react-native";

export interface Option {
  value: any;
  label?: string;
}

export interface FieldItem {
  name: string;
  label: string;
  type?: "text" | "select" | "checkbox" | "radio" | "textarea";
  variant?: "inline";
}

export interface TextField extends FieldItem, TextInputProps {}

export interface SelectField extends FieldItem {
  options?: Option[];
}

export interface CheckboxField extends FieldItem {}

export interface RadioField extends FieldItem {
  options?: Option[];
}

export interface TextareaField extends FieldItem, TextInputProps {}

export type Field =
  | TextField
  | SelectField
  | CheckboxField
  | RadioField
  | TextareaField;
