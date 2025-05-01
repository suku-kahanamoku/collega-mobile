import React, { forwardRef } from "react";
import { Control } from "react-hook-form";

import { IField } from "../../types/field.interface";
import TextFieldCmp from "./TextField";
import SelectFieldCmp from "./SelectField";
import CheckboxFieldCmp from "./CheckboxField";
import RadioFieldCmp from "./RadioField";

interface IFieldProps {
  field: IField;
  control: Control<any>;
  [rest: string]: any;
}

const FieldCmp = forwardRef<any, IFieldProps>(
  ({ field, control, ...rest }, ref) => {
    switch (field.type) {
      case "select":
        return (
          <SelectFieldCmp ref={ref} field={field} control={control} {...rest} />
        );
      case "checkbox":
        return <CheckboxFieldCmp field={field} control={control} {...rest} />;
      case "radio":
        return <RadioFieldCmp field={field} control={control} {...rest} />;
      default:
        return (
          <TextFieldCmp ref={ref} field={field} control={control} {...rest} />
        );
    }
  }
);

export default FieldCmp;
