import React, { forwardRef } from "react";
import { StyleSheet } from "react-native";
import { Input } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import { Controller, Control } from "react-hook-form";

import { useTheme } from "@/modules/Ui/hooks/useTheme";

import { IOption, ISelectField } from "../../types/field.interface";
import { useLang } from "@/modules/Lang/hooks/useLang";

interface IFieldProps {
  field: ISelectField;
  control: Control<any>;
  [rest: string]: any;
}

const SelectFieldCmp = forwardRef<any, IFieldProps>(
  ({ field, control, ...rest }, ref) => {
    const { colors } = useTheme();
    const { t } = useLang();

    return (
      <Controller
        name={field.name}
        control={control}
        render={({
          field: { value, onChange },
          fieldState: { error, invalid },
        }) => (
          <Input
            ref={ref}
            label={field.required ? `${field.label} *` : field.label}
            labelStyle={invalid && { color: colors.error, opacity: 0.7 }}
            placeholder={field.placeholder}
            value={value}
            errorMessage={error?.message}
            InputComponent={forwardRef(() => (
              <Picker
                ref={ref}
                selectedValue={value}
                prompt={field.prompt}
                style={styles.picker}
                onValueChange={(e) => {
                  onChange(e);
                  rest.onChange?.(e);
                }}
              >
                <Picker.Item
                  label={t("form.select")}
                  value={null}
                  style={styles.empty}
                />
                {field.options?.map((option: IOption) => (
                  <Picker.Item
                    key={option.value}
                    label={option.label}
                    value={option.value}
                  />
                ))}
              </Picker>
            ))}
            inputContainerStyle={invalid && { borderColor: colors.error }}
            {...rest}
          />
        )}
      />
    );
  }
);

const styles = StyleSheet.create({
  picker: {
    width: "100%",
  },
  empty: {
    color: "gray",
  },
});

export default SelectFieldCmp;
