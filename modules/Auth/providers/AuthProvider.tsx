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

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession("xxx");
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
