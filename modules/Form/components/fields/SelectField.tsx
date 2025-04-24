import React, { forwardRef } from "react";
import { Picker } from "@react-native-picker/picker";
import { Input } from "@rneui/themed";
import { Controller, Control } from "react-hook-form";

import { useTheme } from "@/modules/Ui/hooks/useTheme";
import { IOption, ISelectField } from "../../types/field.interface";

interface IFieldProps {
  field: ISelectField;
  control: Control<any>;
  [rest: string]: any;
}

const SelectFieldCmp = forwardRef<any, IFieldProps>(
  ({ field, control, ...rest }, ref) => {
    const { colors } = useTheme();

    return (
      <Controller
        name={field.name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            label={field.label}
            placeholder={field.placeholder}
            errorMessage={error?.message}
            InputComponent={forwardRef(() => (
              <Picker
                ref={ref}
                selectedValue={value}
                prompt={field.prompt}
                style={{
                  color: colors.text,
                  width: "100%",
                }}
                onValueChange={onChange}
              >
                {field.options?.map((option: IOption) => (
                  <Picker.Item
                    key={option.value}
                    label={option.label}
                    value={option.value}
                  />
                ))}
              </Picker>
            ))}
            {...rest}
          />
        )}
      />
    );
  }
);

export default SelectFieldCmp;
