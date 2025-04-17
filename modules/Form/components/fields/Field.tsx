import React from "react";
import { Control } from "react-hook-form";

import { IField } from "../../types/field.interface";
import TextField from "./TextField";
import SelectField from "./SelectField";
import CheckboxField from "./CheckboxField";

interface IFieldProps {
  field: IField;
  control: Control<any>;
  [rest: string]: any;
}

const Field: React.FC<IFieldProps> = ({ field, control, ...rest }) => {
  switch (field.type) {
    case "select":
      return <SelectField field={field} control={control} {...rest} />;
    case "checkbox":
      return <CheckboxField field={field} control={control} {...rest} />;
    default:
      return <TextField field={field} control={control} {...rest} />;
  }
};

export default Field;
