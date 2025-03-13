import { useContext } from "react";
import { ContractContext } from "../providers/ContractProvider";

export const useContract = () => {
  const context = useContext(ContractContext);
  if (!context) {
    throw new Error("useContract must be used within a ContractProviderCmp");
  }
  return context;
};
