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

type Status =
  | "accepted"
  | "send"
  | "canceled"
  | "denied"
  | "paid"
  | "urgent"
  | "imported"
  | "free"
  | "missing";

type CommissionStatus =
  | "can-ask-for-urgency"
  | "can-expect-commission"
  | "commission-posted"
  | "commission-paid-out"
  | "commission-suspended"
  | "can-not-urgency"
  | "payment-to-sp-account"
  | "too-early"
  | "unprofitable-business"
  | "working-on-earlier-urgency";

type FrequencyType =
  | "annually"
  | "biannually"
  | "quarterly"
  | "monthly"
  | "weekly"
  | "one-time"
  | "unspecified";

interface Contract {
  id: number;
  /* client: { id: string; name?: string }; */
  client: string;
  account_number?: string;
  /* consultant1: { id: string; name?: string };
  consultant2?: { id: string; name?: string };
  consultant3?: { id: string; name?: string }; */
  consultant1: string;
  consultant2?: string;
  consultant3?: string;
  contract_number?: string;
  documents?: Document[];
  effectiveDate?: string;
  endDate?: string;
  expected_commission_date?: string;
  instructions?: Instruction[];
  insurance?: number;
  partner_logo?: string;
  partner_name?: string;
  payment_day?: string;
  points?: string;
  productVersionId?: number;
  product_name?: string;
  status?: Status;
  commission_status?: CommissionStatus;
  frequency_type?: FrequencyType;
  [key: string]: any;
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
