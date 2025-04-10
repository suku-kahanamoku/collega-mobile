import React from "react";

import { IField } from "../../types/field";
import { IStyleProps } from "../../types/component";
import TextField from "./TextField";
import SelectField from "./SelectField";
import CheckboxField from "./CheckboxField";

interface IFieldProps {
  field: IField;
  style?: IStyleProps;
  onChange?: (value: any) => void;
  [rest: string]: any;
}

const Field: React.FC<IFieldProps> = ({ field, style, onChange, ...rest }) => {
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
