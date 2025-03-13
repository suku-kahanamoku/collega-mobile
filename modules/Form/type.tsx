import { TextInputProps } from "react-native";

export interface Option {
  value: any;
  label?: string;
}

export interface FieldItem {
  name: string;
  label: string;
  type?: "text" | "select";
}

export interface TextField extends FieldItem, TextInputProps {}

export interface SelectField extends TextField {
  options?: Option[];
}

export interface Field extends SelectField {}
