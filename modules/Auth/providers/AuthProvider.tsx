import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import Toast from "react-native-toast-message";

import { IField } from "@/modules/Form/types/field.interface";
import { useLang } from "@/modules/Lang/hooks/useLang";
import { FETCH } from "@/modules/Common/utils/api";
import { useResolver } from "@/modules/Form/hooks/useResolver";

import { useStorageState } from "../hooks/useStorageState";
import { ISession, ISignIn } from "../types/auth.interface";
import config from "../configs/config.json";

interface IAuthContextProps {
  fields: IField[];
  fieldList: Record<string, IField>;
  session: ISession | null;
  loading: boolean;
  checkSession: () => Promise<void>;
  signIn: (params: ISignIn) => Promise<ISession>;
  signOut: () => void;
  $fetch: (url: string, options?: RequestInit) => Promise<any>;
}

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

export function AuthProvider({ children }: PropsWithChildren) {
  const { t } = useLang();
  const [[isLoading, session], setSession] = useStorageState("session");
  const [loading, setLoading] = useState<boolean>(false);
  const { fields, fieldList } = useResolver(config.fields as IField[]);

  useEffect(() => {
    checkSession();
  }, [session]);

  const $fetch = async (url: string, options: RequestInit = {}) => {
    const headers = {
      ...options.headers,
      ...(session?.bearer && { Authorization: `Bearer ${session.bearer}` }),
    };

    return FETCH(url, { ...options, headers });
  };

  const checkSession = async () => {
    if (session) {
      try {
        const result = await $fetch(config.checkUrl);
        if (result.status !== "200" || new Date(result.expire) <= new Date()) {
          signOut();
        }
      } catch (error) {
        signOut();
      }
    }
  };

  const signIn = async ({ login, pass }: ISignIn) => {
    setLoading(true);

    const body = new FormData();
    body.append("login", login);
    body.append("pass", pass);

    let result;
    try {
      result = await $fetch(config.loginUrl, {
        method: "POST",
        body,
      });

      setSession(result);
      Toast.show({
        type: "success",
        text1: t("message.login_success"),
        visibilityTime: 2000,
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: t("message.login_error"),
        text2: t("message.login_note_error"),
      });
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
        fields,
        fieldList,
        session,
        loading,
        $fetch,
        signIn,
        signOut,
        checkSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
