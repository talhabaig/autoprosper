import React, { useState } from "react";
import { Select } from "../ui/InputCustom";

interface FormData {
  color: string;
  mileage: string;
}

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "option1", label: "Melbourne Red Metallic" },
  { value: "option2", label: "Melbourne Red 2" },
  { value: "option3", label: "Melbourne Red 3" },
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
        <h1 className="heading text-left  text-[#001B44] text-[32px] lg:text-[48px] 2xl:text-[56px] mb-[12px] 2xl:mb-[18px] font-[400]">
          Details
        </h1>
        <p className="text-left text-[#4B5768]  text-[14px] font-[400] 2xl:mb-12 ">
          Unable to find a vehicle without specific details
        </p>
        <div className="lg:max-w-[456px]">
          <div className="block w-[100%] mb-[12px] 2xl:mb-6 rounded-[12px]">
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

          <div className={`  relative block`}>
            <label
              className="inline-block text-dark-4 font-normal text-[10px] absolute top-[8px] left-[18px]
                lg:top-[24px] lg:text-[12px]"
            >
              Mileage
            </label>
            <span className="absolute top-0 right-0 bg-[red] text-white">hello</span>
            <input
              className="shadow appearance-none border w-full pt-[24px] pb-[8px] px-[18px] text-gray-700 leading-tight 
             focus:shadow-outline border-dark-4 focus:outline-none focus:bg-white focus:border-dark rounded-[12px]
             hover:border-dark lg:pt-[46px] lg:pb-[31px]"
              type="number"
              placeholder="121312"
              onChange={(e) => inputHandler("mileage", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
