export interface DiscountAndCreditDataItem {
  id?: number;
  imageSrc?: string;
  contentLabel?: string;
  heading?: string;
  paragraph?: string;
  buttonLabel?: string;
  buttonIcon?: React.ReactNode | any;
}

export interface FindOrMakeCard {
  id?: number;
  imageSrc?: string;
  heading?: string;
  description?: string;
  buttonLabel?: string;
  buttonVariant?: "primary" | "transparent" | "small" | "secondary" | undefined;
  buttonIcon?: React.ReactNode | any;
}

export interface upGradeRide {
  id?: number;
  imageSrc?: string;
  contentLabel?: string;
  heading?: string;
  description?: string;
  buttonLabel?: string;
  buttonIcon?: React.ReactNode | any;
}

export interface AutoProsperAdvantages {
  id?: number;
  imageSrc?: string;
  heading?: string;
  description?: string;
  icon?: React.ReactNode | any;
}

export interface ConsultancyAndGrowth {
  id?: number;
  imageSrc?: string;
  heading?: string;
  description?: string;
}

export interface FirstTimeBuyer {
  essentialFeatures?: string[];
  carBrand?: string[];
  totalSeats?: string[];
  vehiclePreference?: string[];
  fuelConsuptionType?: string[];
}

export interface SuggestionForCustomer {
  id?: number;
  imageSrc?: string;
  heading?: string;
  totalamount?: string;
  downpayment?: string;
  monthlypayment?: string;
  variant?: string;
}


export interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  city: string;
  state: string;
  state2: string;
  SSN: string;
  monthlyIncome: string;
}

export interface GetPreQualifiedSecureFinancing {
  id?: number;
  imageSrc?: string;
  heading?: string;
  description?: string;
  icon?: React.ReactNode | any;
}


export interface productDetail {
  id?: number;
  imageSrc?: string;
  contentLabel?: string;
  heading?: string;
  description?: string;
  buttonLabel?: string;
  buttonIcon?: React.ReactNode | any;
  totalAmount?: number;
  downPayment?: number;
  monthlyPayment?: number;
  totalMilage?: number;
}

export interface Option {
  value?: string;
  label?: string;
}

export interface ProductFilterState {
  sortBy?: string;
  filter?: string;
}

export interface ProductFiltersProps {
  onOptionSelect: (options: { sortBy?: string; filter?: string }) => void;
  onInputChange: (inputValue: string) => void;
}

export interface LowerCarPaymentForm {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  streetAddress?: string;
  unitName?: string;
  city?: string;
  status?: string;
  zipCode?: string;
  car?: string;
  year?: string;
  make?: string;
  model?: string;
  vin?: string;
  currentMonthlyPayment?: string;
  currentInterestRate?: string;
  payOffAmount?: string;
  totalMonths?: string;
}
export interface LowerCarPaymentForm {
  userNameDetais?: string[];
  userAddressDetails?: string[];
  carDetails?: string[];
  carPaymentDetails?: string[];
}


export interface userNameAndEmailDetails {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  emailAddress?: string;
}


export interface userAddressDetails {
  streetAddress?: string;
  unitName?: string;
  city?: string;
  status?: string;
  zipCode?: string;
}

export interface VehicleFormInformation {
  car?: string;
  year?: string;
  make?: string;
  model?: string;
  vehicleIdentificationNumber?: string;
}

export interface LoanInformationForm {
  currentMonthlyPayment?: number;
  currentInterestRate?: number;
  payOffAmount?: number;
  totalMonths?: number;
}