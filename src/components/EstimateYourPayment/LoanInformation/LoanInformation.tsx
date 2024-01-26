import React, { useState, useEffect } from "react";
import { LoanInformationForm } from "../../../assests/interfaces/Home/index";
import CustomInputField from "@/components/Common/InputField/CustomInputField";
import Select from "react-select";

interface ChildFormComponentProps {
  onChange: (value: LoanInformationForm) => void;
}

const installmentPlan = [
  { value: "24 Months", label: "24 Months" },
  { value: "30 Months", label: "30 Months" },
  { value: "36 Months", label: "36 Months" },
];

const UserLoanInformation: React.FC<ChildFormComponentProps> = ({
  onChange,
}) => {
  const [formData, setFormData] = useState<LoanInformationForm>({
    currentMonthlyPayment: 350,
    currentInterestRate: 17,
    payOffAmount: 18500,
    totalMonths: 0,
  });

  useEffect(() => {
    onChange(formData);
  }, [formData, onChange]);

  const handleInputChange = (
    name: keyof LoanInformationForm,
    value: string | number
  ) => {
    const numericValue = typeof value === "string" ? parseFloat(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: numericValue,
    }));
  };

  return (
    <>
      <CustomInputField
        type="number"
        value={formData.currentMonthlyPayment}
        placeholder="350 "
        onChange={(value) => handleInputChange("currentMonthlyPayment", value)}
        label="Current monthly payment "
        className="mb-[18px] md:mb-6"
        icon="$"
      />

      <CustomInputField
        label="Current interest rate"
        type="number"
        value={formData.currentInterestRate}
        placeholder="17"
        onChange={(value) => handleInputChange("currentInterestRate", value)}
        className="mb-[18px] md:mb-6"
        icon="%"
      />

      <CustomInputField
        label="Payoff amount"
        type="number"
        value={formData.payOffAmount}
        placeholder="18,500"
        onChange={(value) => handleInputChange("payOffAmount", value)}
        className="mb-[18px] md:mb-6"
        icon="$"
      />

      <div className="mb-[18px] w-full">
        <Select
          options={installmentPlan}
          onChange={(selectedOption) => {
            if (selectedOption) {
              const value = selectedOption.value;
              const months = parseInt(value, 10);
              setFormData((prevData) => ({
                ...prevData,
                totalMonths: months,
              }));
            }  else {
              // If no option is selected, set totalMonths to 0
              setFormData((prevData) => ({
                ...prevData,
                totalMonths: 0,
              }));
            }
          }}
          placeholder="60 Months"
          className="rectSelectWrapper"
        />
      </div>
    </>
  );
};

export default UserLoanInformation;
