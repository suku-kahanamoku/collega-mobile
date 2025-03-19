import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Contract } from "../type";
import { useTranslation } from "react-i18next";
import { FETCH_OPTIONS, FIELDS } from "../configs/contract";
import { Field, SelectField } from "@/modules/Form/type";

interface ContractContextProps {
  contracts: Contract[];
  loading: boolean;
  error: string | null;
  fields: Field[];
}

export const ContractContext = createContext<ContractContextProps | undefined>(
  undefined
);

export const ContractProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation("$");
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fields = FIELDS.map((field) => {
    // provede preklad
    const result = { ...field, label: t(field.label) } as SelectField;
    // provede preklad option.label
    result.options?.forEach(
      (option) => (option.label = option.label ? t(option.label) : option.label)
    );
    return result;
  });

  const fetchContracts = async () => {
    try {
      const response = await fetch(FETCH_OPTIONS.url, {
        method: FETCH_OPTIONS.method,
        headers: FETCH_OPTIONS.headers,
        /* params: { ...query }, */
      });
      const data = await response.json();
      setContracts(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch contracts");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  return (
    <ContractContext.Provider value={{ contracts, loading, error, fields }}>
      {children}
    </ContractContext.Provider>
  );
};
