import { createContext, type PropsWithChildren } from "react";
import { useStorageState } from "../hooks/useStorageState";

interface AuthContextProps {
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

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
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
