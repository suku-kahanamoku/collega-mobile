import { TextInputProps, SwitchProps } from "react-native";
import { PickerProps } from "@react-native-picker/picker";

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

export interface SelectField extends FieldItem, PickerProps {
  options?: Option[];
  optionList?: Record<string, string>;
  value?: any;
}

export interface CheckboxField extends FieldItem, SwitchProps {}

export interface RadioField extends FieldItem {
  options?: Option[];
}

export interface TextareaField extends FieldItem {}

export type Field = TextField &
  SelectField &
  CheckboxField &
  RadioField &
  TextareaField;
