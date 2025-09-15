import React, { ReactNode, createContext, useContext, useState } from "react";
import type { FormDataType } from "../utils/types";

interface SelectedState {
  label: string;
  value: string;
}

interface FunnelContextType {
  nutritionGoals: string[];
  setNutritionGoals: React.Dispatch<React.SetStateAction<string[]>>;
  selectDiagnoses: string[];
  memberId: string;
  setMemberId: React.Dispatch<React.SetStateAction<string>>;
  setSelectDiagnoses: React.Dispatch<React.SetStateAction<string[]>>;
  selectedState: SelectedState;
  setSelectedState: React.Dispatch<React.SetStateAction<SelectedState>>;
  insurancePlan: string;
  userDetails: FormDataType;
  setUserDetails: React.Dispatch<React.SetStateAction<FormDataType>>;
  setInsurancePlan: React.Dispatch<React.SetStateAction<string>>;
  progressBar: number;
  setProgressBar: React.Dispatch<React.SetStateAction<number>>;
  handleProgressBar: () => void;
  handleBack: () => void;
  birthDate: Date | null;
  setBirthDate: React.Dispatch<React.SetStateAction<Date | null>>;
  isUnder18: () => boolean;
  insuranceCheck: any; // Replace `any` with type if available
  setInsuranceCheck: React.Dispatch<React.SetStateAction<any>>;
}

export const FunnelContext = createContext<FunnelContextType | undefined>(
  undefined
);

interface CallSchedulerProviderProps {
  children: ReactNode;
}

export const FunnelProvider: React.FC<CallSchedulerProviderProps> = ({
  children,
}) => {
  const [nutritionGoals, setNutritionGoals] = useState<string[]>([]);
  const [userDetails, setUserDetails] = useState<FormDataType>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });
  const [selectDiagnoses, setSelectDiagnoses] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState({
    label: "Select State",
    value: "",
  });
  const [insurancePlan, setInsurancePlan] = useState<string>("");
  const [progressBar, setProgressBar] = useState<number>(100 / 16);
  const [birthDate, setBirthDate] = useState<Date | null>(new Date());
  const [memberId, setMemberId] = useState<string>("");
  const [insuranceCheck, setInsuranceCheck] = useState<any>(null);

  const progressBarInitial =
    insurancePlan === "self_pay" || insurancePlan === "other"
      ? 100 / 15
      : 100 / 16;

  const handleProgressBar = () =>
    setProgressBar((prev) => prev + progressBarInitial);
    const handleBack = () => setProgressBar((prev) => prev - progressBarInitial);

  const isUnder18 = () => {
    if (!birthDate) return false;

    const today = new Date();
    const minAdultDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );

    return birthDate > minAdultDate;
  };

  return (
    <FunnelContext.Provider
      value={{
        nutritionGoals,
        setNutritionGoals,
        selectDiagnoses,
        setSelectDiagnoses,
        selectedState,
        setSelectedState,
        insurancePlan,
        setInsurancePlan,
        progressBar,
        setProgressBar,
        handleProgressBar,
        handleBack,
        birthDate,
        setBirthDate,
        isUnder18,
        userDetails,
        setUserDetails,
        memberId,
        setMemberId,
        insuranceCheck,
        setInsuranceCheck,
      }}
    >
      {children}
    </FunnelContext.Provider>
  );
};

export const useFunnel = (): FunnelContextType => {
  const context = useContext(FunnelContext);
  if (!context) {
    throw new Error("useFunnel must be used within a FunnelProvider");
  }
  return context;
};
