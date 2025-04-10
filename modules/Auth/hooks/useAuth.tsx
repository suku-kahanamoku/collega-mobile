import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be wrapped in a AuthProvider");
  }
  return context;
}
