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
  signIn: (params: ISignIn) => Promise<ISession>;
  signOut: () => void;
}

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

export function AuthProvider({ children }: PropsWithChildren) {
  const { t } = useLang();
  const [[isLoading, session], setSession] = useStorageState("session");
  const [loading, setLoading] = useState<boolean>(false);
  const { fields, fieldList } = useResolver(config.fields as IField[]);

  const checkSession = async () => {
    if (session) {
      try {
        const result = await FETCH(config.checkUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session?.bearer}`,
          },
          /* params: { ...query }, */
        });
        console.log(result);
      } catch (error) {
        signOut();
      }
    }
  };

  useEffect(() => {
    checkSession();
  }, [session]);

  const signIn = async ({ login, pass }: ISignIn) => {
    setLoading(true);

    const body = new FormData();
    body.append("login", login);
    body.append("pass", pass);

    let result;
    try {
      result = await FETCH(config.loginUrl, {
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
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
