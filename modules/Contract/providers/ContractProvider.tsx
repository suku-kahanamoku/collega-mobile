import React, { createContext, useState, useEffect, ReactNode } from "react";

import { IContract } from "../type";
import { useTranslation } from "react-i18next";
import { FETCH_OPTIONS, FIELDS } from "../configs/contract";
import { IField, ISelectField } from "@/modules/Form/types/field";
import { useAuth } from "@/modules/Auth/hooks/useAuth";

interface IContractContextProps {
  contracts: IContract[];
  loading: boolean;
  error: string | null;
  fields: IField[];
  fieldList: Record<string, IField>;
}

export const ContractContext = createContext<IContractContextProps | undefined>(
  undefined
);

export const ContractProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation("$");
  const { session } = useAuth();
  const [contracts, setContracts] = useState<IContract[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fields = FIELDS.map((field) => {
    // provede preklad
    const result = { ...field, label: t(field.label) } as ISelectField;
    // provede preklad option.label
    result.options?.forEach(
      (option) => (option.label = option.label ? t(option.label) : option.label)
    );
    return result as IField;
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

  const fetchContracts = async () => {
    try {
      const response = await fetch(FETCH_OPTIONS.url, {
        method: FETCH_OPTIONS.method,
        headers: {
          Authorization: `Bearer ${session?.bearer}`,
        },
        /* params: { ...query }, */
      });
      const data = await response.json();
      // todo - v pripade chyby backend nevraci error napr. 404, 401, ale 200 a status.status = 401
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
    <ContractContext.Provider
      value={{ contracts, loading, error, fields, fieldList }}
    >
      {children}
    </ContractContext.Provider>
  );
};
