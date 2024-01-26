import React, { useState, ChangeEvent } from "react";
import { userAddressDetails } from "../../../assests/interfaces/Home/index";
import CustomInputField from "@/components/Common/InputField/CustomInputField";

interface ChildFormComponentProps {
  onChange: (value: userAddressDetails) => void;
}

const UserAddressDetails: React.FC<ChildFormComponentProps> = ({
  onChange,
}) => {
  const [userAddress, setUserAddress] = useState<userAddressDetails>({
    streetAddress: "",
    unitName: "",
    city: "",
    status: "",
    zipCode: "",
  });

  const handleInputChange = (name: keyof userAddressDetails, value: string | number) => {
    setUserAddress((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onChange({
      ...userAddress,
      [name]: value,
    });
  };

  return (
    <>
      <div className="max-w-[460px] mx-auto">
        <CustomInputField
          type="text"
          value={userAddress.streetAddress}
          placeholder="Street Address"
          onChange={(value) => handleInputChange("streetAddress", value)}
          label="Street Address"
          className="mb-[18px] md:mb-6"
        />

        <CustomInputField
          type="text"
          value={userAddress.unitName}
          placeholder="Unit Name"
          onChange={(value) => handleInputChange("unitName", value)}
          label="Unit Name"
          className="mb-[18px] md:mb-6"
        />

        <CustomInputField
          type="text"
          value={userAddress.city}
          placeholder="City"
          onChange={(value) => handleInputChange("city", value)}
          label="City"
          className="mb-[18px] md:mb-6"
        />

        <CustomInputField
          type="text"
          value={userAddress.status}
          placeholder="Status"
          onChange={(value) => handleInputChange("status", value)}
          label="Status"
          className="mb-[18px] md:mb-6"
        />

        <CustomInputField
          type="text"
          value={userAddress.zipCode}
          placeholder="Zip Code"
          onChange={(value) => handleInputChange("zipCode", value)}
          label="Zip Code"
          className="mb-[18px] md:mb-6"
        />

        <div>
          <span
            className="block text-dark-3 text-[14px] leading-[150%] lg:text-[16px] [&>span]:font-bold
         [&>span]:text-dark mb-[18px] md:mb-[24px]"
          >
            By clicking the "Next " "button" you consent, acknowledge, and agree
            to the following:- Auto Approve's <span>Terms Of Service</span> and{" "}
            <span> Privacy Policy </span> and to receive important notices and
            other communications electronically
          </span>
        </div>
      </div>
    </>
  );
};

export default UserAddressDetails;
