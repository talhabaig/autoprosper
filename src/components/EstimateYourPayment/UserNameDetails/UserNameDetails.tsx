import React, { useState, ChangeEvent } from "react";
import { userNameAndEmailDetails } from "../../../assests/interfaces/Home/index";
import CustomInputField from "@/components/Common/InputField/CustomInputField";

interface ChildFormComponentProps {
  onChange: (value: userNameAndEmailDetails) => void;
}

const ChildFormComponent: React.FC<ChildFormComponentProps> = ({
  onChange,
}) => {
  const [formData, setFormData] = useState<userNameAndEmailDetails>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const handleInputChange = (
    name: keyof userNameAndEmailDetails,
    value: string | number,
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Use the latest state when calling onChange
    onChange({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <CustomInputField
        type="text"
        value={formData.firstName}
        placeholder="First Name"
        onChange={(value) => handleInputChange("firstName", value)}
        label="Full Name"
        className="mb-[18px] md:mb-6"
      />

      <CustomInputField
        label="Last name"
        type="text"
        value={formData.lastName}
        placeholder="Last Name"
        onChange={(value) => handleInputChange("lastName", value)}
        className="mb-[18px] md:mb-6"
      />

      <CustomInputField
        label="Phone number"
        type="tel"
        value={formData.phoneNumber}
        placeholder="Phone number"
        onChange={(value) => handleInputChange("phoneNumber", value)}
        className="mb-[18px] md:mb-6"
      />

      <CustomInputField
        label="Email Address"
        type="email"
        value={formData.emailAddress}
        placeholder="Email"
        onChange={(value) => handleInputChange("emailAddress", value)}
        className="mb-[18px] md:mb-6"
      />
    </>
  );
};

export default ChildFormComponent;
