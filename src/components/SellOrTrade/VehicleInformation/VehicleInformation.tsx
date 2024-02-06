import React, { useState } from "react";
import CustomText from "../../Common/InputField/CustomInput";
import RadioOption from "../../Common/RadioButton/RadioBtn";

interface VehicleInformationProps {}

const VehicleInformation: React.FC<VehicleInformationProps> = () => {
  const activeAvailable = [
    {
      id: 1,
      label: "Email",
      value: "Email",
    },
    {
      id: 2,
      label: "Phone",
      value: "Phone",
    },
  ];

  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleDivClick = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      <h1 className="heading text-left  text-[#001B44] text-[32px] xl:text-[48px] 2xl:text-[56px] font-[400] mt-6 md:mt-0 mb-[12px] 3xl:mb-[18px]">
        Information
      </h1>
      <p className="text-left text-[#4B5768] font-[400] text-[14px] xl:text-[16px] 3xl:text-[20px] 2xl:mb-[48px]">
        Provide your email for sending our exclusive offers and updates.
      </p>
      <h3 className="text-[#001B44] text-[14px] font-[700] mb-3 2xl:text-lg 2xl:mb-6">
        What is the condition of the car?
      </h3>

      <div className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        <CustomText
          type="text"
          placeholder="First name"
          className="text-[#8E97A6] text-[14px] 2xl:text-lg font-[500] rounded-[12px] [&>input]:p-[17px_18px] [&>input]:2xl:p-6"
        />
        <CustomText
          type="text"
          placeholder="Last name"
          className="text-[#8E97A6] text-[14px] 2xl:text-lg font-[500] rounded-[12px] [&>input]:p-[17px_18px] [&>input]:2xl:p-6"
        />
      </div>
      <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomText
          type="text"
          placeholder="Email Address"
          className="text-[#8E97A6] text-[14px] 2xl:text-lg font-[500] rounded-[12px] [&>input]:p-[17px_18px] [&>input]:2xl:p-6"
        />
        <CustomText
          type="text"
          placeholder="Phone"
          className="text-[#8E97A6] text-[14px] 2xl:text-lg font-[500] rounded-[12px] [&>input]:p-[17px_18px] [&>input]:2xl:p-6"
        />
      </div>

      <h3 className="text-[#001B44] text-[14px] font-[700] mb-3 lg:mt-5">
        What is the best way to contact you? (Optional)
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {activeAvailable.map((item) => (
          <RadioOption
            key={item.id}
            id={item.id}
            label={item.label}
            value={item.value}
            selected={selectedValue === item.value}
            onSelect={handleDivClick}
            description={""}          />
        ))}
      </div>

      <div className="my-6">
        <CustomText
          type="text"
          placeholder="Zip Code"
          className="text-[#8E97A6] text-[14px] 2xl:text-lg font-[500] rounded-[12px] [&>input]:p-[17px_18px] [&>input]:2xl:p-6 lg:w-[50%]"
        />
      </div>
      <p className="text-left leading-[150%] text-[#4B5768] font-[400] text-[14px] mb-2 2xl:text-[16px] 2xl:mb-3">
        By selecting Claim exclusive offer you agree to Catherine team contact
        for offer details and information.
      </p>
      <a
        href=""
        className="block text-[#FF3363] text-[14px] font-[700] underline 2xl:text-[16px]"
      >
        Terms and conditions
      </a>
    </>
  );
};

export default VehicleInformation;
