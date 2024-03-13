export type Property = {
  name: string;
  tokenCode: string;
  status: Status;
  propertyPrice: number;
  tokenPrice: number;
  investmentPeriod: string;
  annualRentalYield: number;
  estimatedTotalYield: number;
  rentalStartDate: string;
  currentReturns: number;
  description: string;
  location: string;
  metamaskContractAddress: string;
  contractDeploymentDate: string;
  subscriptionAgreementURL: string;
  whitepaperURL: string;
  gallery: string[];
};

export type Status =
  | "Financiado"
  | "En explotacion"
  | "Token en venta"
  | "En reforma"
  | "Cerrado";

export type StatusOption = {
  id: number;
  status: Status;
};
