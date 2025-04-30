import React, { createContext, useState, useEffect, ReactNode } from "react";

import { IField } from "@/modules/Form/types/field.interface";
import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { useResolver } from "@/modules/Form/hooks/useResolver";

import { IContract } from "../type";
import config from "../configs/config.json";

interface IContractContextProps {
  contracts: IContract[];
  loading: boolean;
  fields: IField[];
  fieldList: Record<string, IField>;
  updateSearch: (value: string) => void;
  updateQueryParams: (params: Record<string, string>) => void;
}

export const ContractContext = createContext<IContractContextProps | undefined>(
  undefined
);

export const ContractProvider = ({ children }: { children: ReactNode }) => {
  const { $fetch } = useAuth();
  const [contracts, setContracts] = useState<IContract[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});
  const { fields, fieldList } = useResolver(config.fields as IField[]);

  const updateSearch = (value: string) => {
    setSearch(value);
    setQueryParams({}); // Reset queryParams when search changes
  };

  const updateQueryParams = (params: Record<string, any>) => {
    setQueryParams(params);
    setSearch(""); // Reset search when queryParams changes
  };

  const _fetchContracts = async () => {
    try {
      let url = config.restUrl;

      if (search) {
        url += `?search=${encodeURIComponent(search)}`;
      } else if (Object.keys(queryParams).length > 0) {
        const queryString = Object.entries(queryParams)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          )
          .join("&");
        url += `?${queryString}`;
      }

      const result = await $fetch(url);
      setContracts(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    _fetchContracts();
  }, [search, queryParams]);

  return (
    <ContractContext.Provider
      value={{
        contracts,
        loading,
        fields,
        fieldList,
        updateSearch,
        updateQueryParams,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
