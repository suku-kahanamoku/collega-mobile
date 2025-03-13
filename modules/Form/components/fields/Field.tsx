import React from "react";
import { Field as FieldType } from "../../type";
import TextField from "./TextField";
import SelectField from "./SelectField";
import CheckboxField from "./CheckboxField";
import RadioField from "./RadioField";
import TextareaField from "./TextareaField";

const Field: React.FC<{ field: FieldType }> = ({ field }) => {
  switch (field.type) {
    case "text":
      return <TextField field={field} />;
    case "select":
      return <SelectField field={field} />;
    case "checkbox":
      return <CheckboxField field={field} />;
    case "radio":
      return <RadioField field={field} />;
    case "textarea":
      return <TextareaField field={field} />;
    default:
      return null;
  }
};

export default Field;
