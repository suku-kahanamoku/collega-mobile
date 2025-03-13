export interface Instruction {
  id: number;
}

export interface Document {
  link: string;
  name: string;
  type: string;
}

export type Status =
  | "accepted"
  | "send"
  | "canceled"
  | "denied"
  | "paid"
  | "urgent"
  | "imported"
  | "free"
  | "missing";

export type CommissionStatus =
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

export type FrequencyType =
  | "annually"
  | "biannually"
  | "quarterly"
  | "monthly"
  | "weekly"
  | "one-time"
  | "unspecified";

export interface Contract {
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
