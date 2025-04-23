import React, { createContext, useState, useEffect, ReactNode } from "react";

import { IField } from "@/modules/Form/types/field.interface";
import { useAuth } from "@/modules/Auth/hooks/useAuth";
import { FETCH } from "@/modules/Common/utils/api";
import { useResolver } from "@/modules/Form/hooks/useResolver";

import { IContract } from "../type";
import { FETCH_OPTIONS, FIELDS } from "../configs/contract";

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
  const { session } = useAuth();
  const [contracts, setContracts] = useState<IContract[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { fields, fieldList } = useResolver(FIELDS as IField[]);

  const fetchContracts = async () => {
    try {
      const result = await FETCH(FETCH_OPTIONS.url, {
        method: FETCH_OPTIONS.method,
        headers: {
          Authorization: `Bearer ${session?.bearer}`,
        },
        /* params: { ...query }, */
      });
      setContracts(result);
      setLoading(false);
    } catch (err) {
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
