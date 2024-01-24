import React, { useState } from "react";
import { Select } from "../ui/input";
import CustomInput from "../Common/InputField/InputField";

interface FormData {
  color: string;
  mileage: string;
}

const options = [
  { value: "option1", label: "Arctic Frost Pearl1" },
  { value: "option2", label: "Arctic Frost Pearl2" },
  { value: "option3", label: "Arctic Frost Pearl3" },
];

const VehicleDetail = () => {
  const [formData, setFormData] = useState<FormData>({
    color: "",
    mileage: "",
  });

  const InputHandler = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    console.log("Email changed:", formData);
  };

  return (
    <div className="flex md:max-w-[890px] w-full justify-center">
      <div className="w-full font- [400]">
        <h1 className="heading text-left  text-[#001B44] text-[32px] lg:text-[56px] mb-[20px] font-[400]">
          Details
        </h1>
        <p className="text-left text-[#4B5768]  text-[20px] font-[400] ">
          Unable to find a vehicle without specific details
        </p>
        <div className="block w-[350px] md:w-[456px] h-[72px] rounded-[12px]  indent-4 detailSelect">
          <Select
            options={options}
            onChange={(selectedOption: any) => {
              if (selectedOption) {
                const value = selectedOption.value;
                setFormData((prevData) => {
                  const updatedData = { ...prevData, state: value };
                  console.log("Updated Form Data:", updatedData);
                  return updatedData;
                });
              }
            }}
            placeholder="State"
            className="rectSelectWrapper"
            label="Color"
          />
        </div>

        <CustomInput
          type="text"
          placeholder="City"
          onChange={(value) => InputHandler("city", value)}
          className="w-full sm:w-[48%] md:w-[31%] gap-[18px] md:gap-8 mt-4"
        />
      </div>
    </div>
  );
};

export default VehicleDetail;
