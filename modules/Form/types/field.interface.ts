import { TextInputProps, SwitchProps } from "react-native";
import { PickerProps } from "@react-native-picker/picker";

export interface IFieldItem {
  name: string;
  label: string;
  type?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "select"
    | "checkbox"
    | "radio"
    | "textarea"
    | "url";
  variant?: "inline";
  required?: boolean;
  validation?: { pattern: string; message: string }[];
  min?: number;
  max?: number;
}

export interface ITextField extends IFieldItem, TextInputProps {}

export interface IOption {
  value: any;
  label?: string;
}

export interface ISelectField extends IFieldItem, PickerProps {
  options?: IOption[];
  optionList?: Record<string, string>;
  value?: any;
}

export interface ICheckboxField extends IFieldItem, SwitchProps {}

export interface IRadioField extends IFieldItem {
  options?: IOption[];
}

export interface ITextareaField extends IFieldItem {}

export type IField = ITextField &
  ISelectField &
  ICheckboxField &
  IRadioField &
  ITextareaField;
