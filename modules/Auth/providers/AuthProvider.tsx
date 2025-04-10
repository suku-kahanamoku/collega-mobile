import { createContext, useState, type PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

import { useStorageState } from "../hooks/useStorageState";
import { FETCH_OPTIONS, FIELDS } from "../configs/auth";
import { Field, SelectField } from "@/modules/Form/type";

interface AuthContextProps {
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  loading: boolean;
  fields: Field[];
  fieldList: Record<string, Field>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export function AuthProvider({ children }: PropsWithChildren) {
  const { t } = useTranslation("$");
  const [[isLoading, session], setSession] = useStorageState("session");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fields = FIELDS.map((field) => {
    // provede preklad
    const result = { ...field, label: t(field.label) } as SelectField;
    // provede preklad option.label
    result.options?.forEach(
      (option) => (option.label = option.label ? t(option.label) : option.label)
    );
    return result as Field;
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
  }, {} as Record<string, Field & { optionList?: Record<string, string> }>);

  const signIn = () => {
    setSession(JSON.stringify({ name: "aaa", email: "bbb" }));
  };

  const signOut = () => {
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        loading,
        fields,
        fieldList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
