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
}

export const ContractContext = createContext<IContractContextProps | undefined>(
  undefined
);

export const ContractProvider = ({ children }: { children: ReactNode }) => {
  const { $fetch } = useAuth();
  const [contracts, setContracts] = useState<IContract[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { fields, fieldList } = useResolver(config.fields as IField[]);

  const fetchContracts = async () => {
    try {
      const result = await $fetch(config.restUrl);
      setContracts(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  return (
    <ContractContext.Provider value={{ contracts, loading, fields, fieldList }}>
      {children}
    </ContractContext.Provider>
  );
};
