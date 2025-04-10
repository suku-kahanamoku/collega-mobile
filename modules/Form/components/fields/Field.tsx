import React from "react";

import { IField } from "../../types/field";
import TextField from "./TextField";
import SelectField from "./SelectField";
import CheckboxField from "./CheckboxField";

interface IFieldProps {
  field: IField;
  onChange?: (value: any) => void;
  [rest: string]: any;
}

const Field: React.FC<IFieldProps> = ({ field, onChange, ...rest }) => {
  switch (field.type) {
    case "select":
      return <SelectField field={field} onChange={onChange} {...rest} />;
    case "checkbox":
      return <CheckboxField field={field} onChange={onChange} {...rest} />;
    default:
      return <TextField field={field} onChange={onChange} {...rest} />;
  }
};

export default Field;
