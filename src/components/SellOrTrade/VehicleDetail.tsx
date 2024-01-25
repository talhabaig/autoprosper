import React, { useState } from "react";
import { Select } from "../ui/input";
import CustomInput from "../Common/InputField/InputField";

interface FormData {
  color: string;
  mileage: string;
}

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "option1", label: "Arctic Frost Pearl1" },
  { value: "option2", label: "Arctic Frost Pearl2" },
  { value: "option3", label: "Arctic Frost Pearl3" },
];

const VehicleDetail: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    color: "",
    mileage: "",
  });

  const inputHandler = (fieldName: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    console.log(`${fieldName} changed:`, formData);
  };

  return (
    <div className="flex md:max-w-[890px] w-full justify-center">
      <div className="w-full font- [400]">
        <h1 className="heading text-left  text-[#001B44] text-[32px] lg:text-[56px] mb-[20px] font-[400]">
          Details
        </h1>
        <p className="text-left text-[#4B5768]  text-[16px] font-[400] ">
          Unable to find a vehicle without specific details
        </p>
        <div className="block w-[100%] md:w-[456px] h-[72px] rounded-[12px]  indent-4 detailSelect">
        <Select
          options={options}
          onChange={(selectedOption: any) => {
            if (selectedOption) {
              const value = selectedOption.value;
              inputHandler("color", value);
            }
          }}
          placeholder="State"
          className="rectSelectWrapper"
          label="Color"
        />
        </div>
        <div className="relative md:mt-4">
          <label
            className="absolute top-[15px] md:top-[30px] left-[18px] text-[#5D6878] text-[12px]"
            htmlFor=""
          >
            Mileage
          </label>
          <input
            className="shadow appearance-none border w-full py-4 px-[18px] text-dark-4 leading-tight 
        focus:shadow-outline focus:outline-none border-dark-4 focus:bg-white focus:border-dark rounded-[12px] h-24 md:mt-5
      hover:border-dark"
            placeholder="121345"
            onChange={(e) => inputHandler("mileage", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
