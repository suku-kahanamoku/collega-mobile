import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Contract } from "../type";
import { useTranslation } from "react-i18next";
import { FIELDS } from "../configs/contract";
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

export const ContractProviderCmp = ({ children }: { children: ReactNode }) => {
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
      const response = await fetch(
        "https://collega.cz/security/api/get-contract?consultant=550",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer def502008981ffa1a5d0e2b112f1068de8d9d25ee43f46a16fd0ade32cd376315cb88882e0b931b7932816acd88bbffb3974b282250c88a4c634b649e87153f6d520d716570fedc68562a94489fd5aff5adc1867fb7a27d4",
          },
          /* params: { ...query }, */
        }
      );
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
