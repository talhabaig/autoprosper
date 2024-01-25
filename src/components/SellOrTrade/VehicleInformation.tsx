import { useState } from "react";
import CustomInputField from "../Common/InputField/CustomInputField";
import CustomText from "../Common/InputField/CustomInput";
import RadioOption from "../Common/RadioButton/RadioBtn";

const VehicleInformation = () => {
  const activeAvailable = [
    {
      id: 1,
      label: "Email",
      value: "Email",
    },
    {
      id: 2,
      label: "Phone",
      value: "Phone ",
    },
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleDivClick = (value: any) => {
    setSelectedValue(value);
  };

  return (
    <>
      <h1 className="heading text-left text-[#001B44] text-[32px] lg:text-[56px] font-[400] mb-[20px]">
        Information
      </h1>
      <p className="text-left text-[#4B5768] font-[400] lg:text-[20px]">
        Provide your email for sending our exclusive offers and updates.
      </p>
      <h3 className="text-[#001B44] text-[18px] font-[700] mb-3 lg:mt-5">
        What is the condition of the car?
      </h3>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomText
          type="text"
          placeholder="First name"
          className="h-16 text-[#8E97A6] text-[18px] font-[500] rounded-[12px]"
        />
        <CustomText
          type="text"
          placeholder="Last name"
          className="h-16 text-[#8E97A6] text-[18px] font-[500] rounded-[12px]"
        />
      </div>
      <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomText
          type="text"
          placeholder="Email Address"
          className="h-16 text-[#8E97A6] text-[18px] font-[500] rounded-[12px]"
        />
        <CustomText
          type="text"
          placeholder="Phone"
          className="h-16 text-[#8E97A6] text-[18px] font-[500] rounded-[12px]"
        />
      </div>

      <h3 className="text-[#001B44] text-[18px] font-[700] mb-2 lg:mt-5">
        What is the best way to contact you? (Optional)
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {activeAvailable.map((item: any) => (
          <RadioOption
            key={item.id}
            id={item.id}
            label={item.label}
            value={item.value}
            selected={selectedValue === item.value}
            description={item.description}
            onSelect={handleDivClick}
          />
        ))}
      </div>

      <div className="my-4 grid grid-cols-2">
        <CustomText
          type="text"
          placeholder="Zip Code"
          className="h-16 text-[#8E97A6] text-[18px] font-[500] rounded-[12px]"
        />
      </div>
      <p className="text-left text-[#4B5768] font-[400] text-[16px] mb-2 mt-4">
        By selecting Claim exclusive offer you agree to Catherine team contact
        for offer details and information.
      </p>
      <a
        href=""
        className="block text-[#FF3363] text-[14px] font-[700] underline"
      >
        Car condition guidelines
      </a>
    </>
  );
};

export default VehicleInformation;
