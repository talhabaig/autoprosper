import React, { useState } from "react";
import Image from "next/image";
import { Select } from "../ui/InputCustom";

interface FormData {
  color: string;
}

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "option1", label: "Kicks® SR" },
  { value: "option2", label: "Kicks® SR" },
  { value: "option3", label: "Kicks® SR" },
];

const YourVehicle: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    color: "",
  });

  const InputHandler = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    console.log("Email changed:", formData);
  };

  return (
    <div>
      <h1 className="heading text-left  text-[#001B44] text-[32px] lg:text-[56px] mb-[12px] font-[400]">
        Vehicle
      </h1>
      <p className="text-left text-[#4B5768]  text-[14px] font-[400] ">
        Unable to find a vehicle without specific details
      </p>
      <div className="relative max-w-[340px] mx-auto  md:max-w-[400px] lg:max-w-[437px] ml-0">
        <Image
          src={"/producDetail/bg-cloud-product-detail.png"}
          width={446}
          height={214}
          className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
          alt={"image"}
        />

        <div
          className={`mt-[-80px]  3xl:mt-[-150px] md:!mt-[-130px]
          lg:!mt-[-100px] max-w-[340px] max-h-[127px]
          md:max-w-[400px] md:max-h-[163px] lg:max-w-[437px]`}
        >
          <Image
            src={"/producDetail/product-detail.png"}
            width={690}
            height={257}
            alt={"image"}
          />
        </div>
      </div>
      <div className="lg:max-w-[437px]">
        <span className="text-center mb-[12px] text-[#001B44] text-[18px] xl:text-[24px] font-[400] block">
          2024 Nissan Kicks®
        </span>
        <div className="text-center mb-3 text-[#4B5768] text-[14px] xl:mb-6 font-[400]">
          <span className="bg-[#ECEEF1] text-[#5D6878] rounded-[100px] p-[4px_8px] xl:p-[5px_10px] mr-3 text-[10px] xl:text-[16px] font-bold">
            VIN
          </span>{" "}
          1GNEK13Z82R12
        </div>
        <div className="block rounded-[12px] detailSelect ">
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
            label="Trim"
          />
        </div>
      </div>
    </div>
  );
};

export default YourVehicle;
