import { createContext, useState, type PropsWithChildren } from "react";

import { IField, ISelectField } from "@/modules/Form/types/field.interface";
import { useLang } from "@/modules/Lang/hooks/useLang";

import { useStorageState } from "../hooks/useStorageState";
import { FETCH_OPTIONS, FIELDS } from "../configs/auth";
import { ISession, ISignIn } from "../types/auth.interface";
import { FETCH } from "@/modules/Common/utils/api";

interface IAuthContextProps {
  session?: ISession | null;
  loading: boolean;
  fields: IField[];
  fieldList: Record<string, IField>;
  signIn: (params: ISignIn) => Promise<ISession>;
  signOut: () => void;
}

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

export function AuthProvider({ children }: PropsWithChildren) {
  const { t } = useLang();
  const [[isLoading, session], setSession] = useStorageState("session");
  const [loading, setLoading] = useState<boolean>(true);

  const fields = FIELDS.map((field) => {
    // provede preklad
    const result = { ...field, label: t(field.label) } as ISelectField;
    if (result.placeholder) {
      result.placeholder = t((field as IField).placeholder!);
    }
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

  const signIn = async ({ login, pass }: ISignIn) => {
    setLoading(true);

    const body = new FormData();
    body.append("login", login);
    body.append("pass", pass);

    let result;
    try {
      result = await FETCH(FETCH_OPTIONS.url, {
        method: FETCH_OPTIONS.method,
        body,
      });

      setSession(result);
    } catch (error) {
      // todo toast
    }

    setLoading(false);
    return result;
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
