import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Instruction {
  id: number;
}

interface Document {
  link: string;
  name: string;
  type: string;
}

interface Contract {
  id: number;
  client: { id: string; name?: string };
  account_number?: string;
  consultant1: { id: string; name?: string };
  consultant2?: { id: string; name?: string };
  consultant3?: { id: string; name?: string };
  documents?: Document[];
  effectiveDate: string;
  endDate: string;
  expected_commission_date: string;
  instructions: Instruction[];
  insurance: number;
  partner_logo: string;
  partner_name: string;
  payment_day: string;
  points: string;
  productVersionId: number;
  product_name: string;
  status: "paid" | "";
}

interface ContractContextProps {
  contracts: Contract[];
  loading: boolean;
  error: string | null;
}

const ContractContext = createContext<ContractContextProps | undefined>(
  undefined
);

export const useContract = () => {
  const context = useContext(ContractContext);
  if (!context) {
    throw new Error("useContract must be used within a ContractProviderCmp");
  }
  return context;
};

export const ContractProviderCmp = ({ children }: { children: ReactNode }) => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContracts = async () => {
    try {
      const response = await fetch(
        "https://collega.cz/security/api/get-contract?consultant=550",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer 2cd503f310mshd99fe20d4247e29p1672eajsn1224109e13f7",
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
    <ContractContext.Provider value={{ contracts, loading, error }}>
      {children}
    </ContractContext.Provider>
  );
};
