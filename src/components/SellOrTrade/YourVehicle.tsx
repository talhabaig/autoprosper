import React, { useState } from "react";
import Image from "next/image";
import { EllipseGradient } from "../ui/ellipseGradient";
import { Select } from "../ui/input";

interface FormData {
  color: string;
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
      <h1 className="heading text-left  text-[#001B44] text-[32px] lg:text-[56px] mb-[20px] font-[400]">
        Vehicle
      </h1>
      <p className="text-left text-[#4B5768]  text-[16px] font-[400] ">
        Unable to find a vehicle without specific details
      </p>
      <div className="flex min-h-[187px] relative justify-center">
        <Image
          src="/home/red-toyota.png"
          alt="car image"
          className="relative z-10 object-contain"
          width={348}
          height={174}
        />
        <EllipseGradient className="absolute z-0" />
      </div>

      <p className="text-center text-[#001B44] text-[24px] font-[400]">
        2024 Nissan Kicks®
      </p>
      <p className="text-center text-[#4B5768] text-[16px] font-[400]">
        <span className="bg-[#ECEEF1] rounded-[100px] px-[10px] py-[5px] mr-3">
          VIN
        </span>{" "}
        1GNEK13Z82R12
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
          label="Trim"
        />
      </div>
    </div>
  );
};

export default YourVehicle;
