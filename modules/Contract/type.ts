import { RelativePathString } from "expo-router";

import { IModelItem } from "@/types/menu.interface";

export interface IInstruction {
  id: number;
}

export interface IDocument {
  link: RelativePathString;
  name: string;
  type: string;
}

export type IStatus =
  | "accepted"
  | "send"
  | "canceled"
  | "denied"
  | "paid"
  | "urgent"
  | "imported"
  | "free"
  | "missing";

export type ICommissionStatus =
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

export type IFrequencyType =
  | "annually"
  | "biannually"
  | "quarterly"
  | "monthly"
  | "weekly"
  | "one-time"
  | "unspecified";

export interface IContract extends IModelItem {
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
  documents?: IDocument[];
  effectiveDate?: string;
  endDate?: string;
  expected_commission_date?: string;
  instructions?: IInstruction[];
  insurance?: number;
  partner_logo?: string;
  partner_name?: string;
  payment_day?: string;
  points?: string;
  productVersionId?: number;
  product_name?: string;
  status?: IStatus;
  commission_status?: ICommissionStatus;
  frequency_type?: IFrequencyType;
  [key: string]: any;
}
