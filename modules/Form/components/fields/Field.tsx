import React from "react";

import { StyleProps } from "@/types/component";
import { Field as FieldType } from "../../type";
import TextField from "./TextField";
import SelectField from "./SelectField";
import CheckboxField from "./CheckboxField";

interface FieldProps {
  field: FieldType;
  style?: StyleProps;
  onChange?: (value: any) => void;
  [rest: string]: any;
}

const Field: React.FC<FieldProps> = ({ field, style, onChange, ...rest }) => {
  switch (field.type) {
    case "select":
      return (
        <SelectField
          field={field}
          style={style}
          onChange={onChange}
          {...rest}
        />
      );
    case "checkbox":
      return (
        <CheckboxField
          field={field}
          style={style}
          onChange={onChange}
          {...rest}
        />
      );
    default:
      return (
        <TextField field={field} style={style} onChange={onChange} {...rest} />
      );
  }
};

export default Field;
