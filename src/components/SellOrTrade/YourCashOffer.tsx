import React, { useState } from "react";
import { ConvertibleIcon } from "../Icons/BodyStyleIcons";
import { Select } from "../ui/input";
import { ToyotaIcon } from "../Icons/BrandIcons";
import Image from "next/image";
import { EllipseGradient } from "../ui/ellipseGradient";
import Button from "../Common/Button/Button";

interface FormData {
  color: string;
}

const options = [
  { value: "option1", label: "Arctic Frost Pearl1" },
  { value: "option2", label: "Arctic Frost Pearl2" },
  { value: "option3", label: "Arctic Frost Pearl3" },
];
const YourCashOffer = () => {
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
    <div className="w-[456px]">
      <div className="flex min-h-[187px] relative justify-center">
        <Image
          src="/home/red-toyota.png"
          alt="car image"
          className="relative z-10 object-contain"
          width="348"
          height="174"
        />
        <EllipseGradient className="absolute z-0" />
      </div>

      <p className="text-center text-[#001B44] text-[56px] font-[400]">$375*</p>
      <p className="text-center text-[#001B44] text-[24px] font-[700]">
        2024 Nissan Kicks®
      </p>
      <p className="text-center text-[#5D6878] text-[16px] font-[400]">
        Kicks® SR
      </p>

      <Button
        className="w-full text-[#001B44] text-[16px] "
        variant="primary"
        label="Accept cash offer"
      />
      <br />
      <p className=" block text-center text-[#5D6878] text-[14px] font-[400] mt-10px">
        Let's gather your documents and get you paid.
      </p>

      <Button
        variant="transparent"
        label="Apply offers to trade-in"
        className="w-full text-[#001B44] text-[16px]"
      />
      <br />
      <p className="text-center text-[#5D6878] text-[14px] font-[400] mt-10px">
        Put your offer toward your next ride and start shopping.
      </p>
      <a
        href=""
        className="block text-center text-[#FF3363] text-[14px]  font-[700] underline"
      >
        Not sure yet? Save this Offer
      </a>
    </div>
  );
};

export default YourCashOffer;
