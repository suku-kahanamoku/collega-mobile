import { IModelItem } from "@/types/menu.interface";

/**
 * Reprezentuje abstraktního uživatele se společnými atributy.
 *
 * @interface IAbstractUser
 */
export interface IAbstractUser extends IModelItem {
  name: string;
  email: string;
  avatarId: any;
}

/**
 * Reprezentuje uživatele v systému.
 *
 * @interface IUser
 */
export interface IUser extends IAbstractUser {
  fullname: string;
  inicials: string;
  addedRoles: any[];
  avatar: any;
  privacyFile: any;
  readableGender: string;
  notificationTitle: string;
  notificationLink: {
    destination: string;
    params: {
      login: string;
      hash: string;
    };
  };
  notificationDelay: number;
  corporateOwner: any;
  accessHash: string;
  consultant: any;
  client: any;
  login: string;
  password: string;
  gender: any;
  views: number;
  birthDate: any;
  validationToken: any;
  birthPlace: any;
  titleBefore: any;
  titleAfter: any;
  deletedDate: any;
  privacyEmailSendAt: any;
  privacyDisagreedEmailSendAt: any;
  privacyAgreedAt: any;
  privacyDisagreedAt: any;
  elComAgreedAt: any;
  invalidateIdentity: boolean;
  type: string;
  kind: string;
  privacyFileId: any;
  agreePDP: boolean;
  agreeBN: boolean;
  savedDashboard: boolean;
  franchiseId: number;
  panelType: string;
  googleCalendarId: any;
  googleAccessToken: any;
  googleCalendarSyncToken: any;
}

/**
 * Reprezentuje konzultanta v systému.
 *
 * @interface IConsultant
 */
export interface IConsultant extends IAbstractUser {
  fullName: string;
  emailAddress: string;
  streetWithNumber: string;
  address: string;
  permanentResidenceStreetWithNumber: string;
  permanentResidenceAddress: string;
  consultantIdentificationNumber: string;
  identification: string;
  points: number;
  income: number;
  resourceId: string;
  cancellationFund: any;
  bankAccountDTO: Record<string, any>;
  fullIdentification: string;
  totalConsultantPoints: boolean;
  commissionDepositPaymentBalance: number;
  commissionDepositPaymentCurrentBalance: number;
  lastReport: any;
  sponsor: any;
  recommender: any;
  mentor: any;
  userId: number;
  cooperationEndsAt: any;
  registrationId: number;
  position: any;
  sponsorId: any;
  recommenderId: any;
  mentorId: any;
  status: number;
  activeStatus: string;
  contractSignDate: any;
  sos: boolean;
  registrationList: boolean;
  criminalRecord: boolean;
  sosCollegas: boolean;
  accessZeus: boolean;
  vzSzpz: boolean;
  vzIz: boolean;
  vzPension: boolean;
  vzLoans: boolean;
  bankAccount: boolean;
  education: boolean;
  facebookGroup: boolean;
  student: boolean;
  printer: boolean;
  ppzNumber: string;
  ppzNumberInvestment: string;
  ppzNumberCredit: string;
  claimToIntermediatePayments: boolean;
  cancellationFundActive: boolean;
  cancellationFundRedeem: boolean;
  cancellationFundMax: number;
  cancellationFundMin: number;
  followingCommission: boolean;
  permanentResidenceStreet: string;
  permanentResidenceCity: string;
  permanentResidenceHouseNumber: string;
  permanentResidenceZip: string;
  bankAccountNumber: string;
  bankAccountPrefix: string;
  bankAccountBankCode: string;
  contactAddressSame: boolean;
  street: string;
  houseNumber: string;
  city: string;
  zip: string;
  phone: string;
  phone2: string;
  www: string;
  note: any;
  identificationNumber: string;
  rankId: number;
  price: number;
  billingAddress: any;
  cnbIdNumber: string;
  vatPayer: boolean;
}
