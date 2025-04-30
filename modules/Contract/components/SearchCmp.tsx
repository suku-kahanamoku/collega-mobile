import React from "react";

import FieldCmp from "@/modules/Form/components/fields/Field";
import { useForm } from "@/modules/Form/hooks/useForm";
import { useContract } from "@/modules/Contract/hooks/useContract";

export default function SearchCmp() {
  const { updateSearch } = useContract();

  const searchField = {
    name: "search",
    placeholder: "Search",
    clearable: true,
  };
  const { control, handleSubmit } = useForm([searchField]);

  const onSearch = (data: Record<string, string>) => {
    updateSearch(data.search);
  };

  return (
    <FieldCmp
      key={searchField.name}
      field={searchField}
      control={control}
      renderErrorMessage={false}
      onSubmitEditing={handleSubmit(onSearch)}
      onReset={handleSubmit(onSearch)}
    />
  );
}
