import React, { useState } from "react";
import { StyleSheet, ScrollView, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

import RowCmp from "@/components/Row";
import { UiView } from "@/modules/Ui/components/Themed";
import { useContract } from "@/modules/Contract/hooks/useContract";

export default function FilterScreen() {
  const { fields } = useContract();

  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {fields.map((field) => (
        <RowCmp key={field.name} label={field.label}>
          {field.type === "select" ? (
            <UiView style={styles.input}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                prompt="Pick one, just one"
              >
                {field.options?.map((option) => (
                  <Picker.Item
                    key={option.value}
                    label={option.label}
                    value={option.value}
                  />
                ))}
              </Picker>
            </UiView>
          ) : (
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              inputMode={field.inputMode}
              autoComplete={field.autoComplete}
              autoFocus={field.autoFocus}
            />
          )}
        </RowCmp>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
