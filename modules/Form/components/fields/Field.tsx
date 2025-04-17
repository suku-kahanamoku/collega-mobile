import React from "react";
import { Control } from "react-hook-form";

import { IField } from "../../types/field.interface";
import TextFieldCmp from "./TextField";
import SelectFieldCmp from "./SelectField";
import CheckboxFieldCmp from "./CheckboxField";

interface IFieldProps {
  field: IField;
  control: Control<any>;
  [rest: string]: any;
}

const FieldCmp: React.FC<IFieldProps> = ({ field, control, ...rest }) => {
  switch (field.type) {
    case "select":
      return <SelectFieldCmp field={field} control={control} {...rest} />;
    case "checkbox":
      return <CheckboxFieldCmp field={field} control={control} {...rest} />;
    default:
      return <TextFieldCmp field={field} control={control} {...rest} />;
  }
};

export default FieldCmp;
