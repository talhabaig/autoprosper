import React, { useState } from "react";
import { LoanInformationForm } from "../../../assests/interfaces/Home/index";
import CustomInputField from "@/components/Common/InputField/CustomInputField";

interface ChildFormComponentProps {
  onChange: (value: LoanInformationForm) => void;
}

const UserLoanInformation: React.FC<ChildFormComponentProps> = ({
  onChange,
}) => {
  const [formData, setFormData] = useState<LoanInformationForm>({
    currentMonthlyPayment: 0,
    currentInterestRate: 0,
    payOffAmount: 0,
    totalMonths: 0,
  });

  const handleInputChange = (
    name: keyof LoanInformationForm,
    value: string | number
  ) => {
    // Convert the value to a number if it's not already
    const numericValue = typeof value === "string" ? parseFloat(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: numericValue,
    }));

    // Use the latest state when calling onChange
    // onChange({
    //   ...formData,
    //   [name]: numericValue,
    // });

    // Log the updated form data
    console.log("Updated Form Data:", {
      ...formData,
      [name]: numericValue,
    });
  };

  return (
    <>
      <CustomInputField
        type="number"
        value={formData.currentMonthlyPayment}
        placeholder="Current mothly payment "
        onChange={(value) => handleInputChange("currentMonthlyPayment", value)}
        label="Current mothly payment "
        className="mb-[18px] md:mb-6"
      />

      <CustomInputField
        label="Current interest rate"
        type="number"
        value={formData.currentInterestRate}
        placeholder="Last Name"
        onChange={(value) => handleInputChange("currentInterestRate", value)}
        className="mb-[18px] md:mb-6"
      />

      <CustomInputField
        label="Payoff amount"
        type="number"
        value={formData.payOffAmount}
        placeholder="Phone number"
        onChange={(value) => handleInputChange("payOffAmount", value)}
        className="mb-[18px] md:mb-6"
      />

      <CustomInputField
        label="Email Address"
        type="number"
        value={formData.totalMonths}
        placeholder="Email"
        onChange={(value) => handleInputChange("totalMonths", value)}
        className="mb-[18px] md:mb-6"
      />
    </>
  );
};

export default UserLoanInformation;
