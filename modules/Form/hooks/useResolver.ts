import { useLang } from "@/modules/Lang/hooks/useLang";

import { IField } from "../types/field.interface";

export function useResolver(tmpFields: IField[]) {
  const { t } = useLang();

  const fields = tmpFields.map((field) => {
    // provede preklad
    // todo - udelat clone
    const result = field;
    // provede preklad placeholder
    if (field.label) {
      result.label = t(field.label);
    }
    // provede preklad placeholder
    if (field.placeholder) {
      result.placeholder = t(field.placeholder);
    }
    // provede preklad option.label
    result.options?.forEach(
      (option) => (option.label = option.label ? t(option.label) : option.label)
    );
    return result;
  });

  const fieldList = fields.reduce((acc, field) => {
    acc[field.name] = {
      ...field,
      optionList: field.options
        ? field.options.reduce((optionAcc, option) => {
            if (option.value && option.label) {
              optionAcc[option.value] = option.label;
            }
            return optionAcc;
          }, {} as Record<string, string>)
        : undefined,
    };
    return acc;
  }, {} as Record<string, IField & { optionList?: Record<string, string> }>);

  return { fields, fieldList };
}
