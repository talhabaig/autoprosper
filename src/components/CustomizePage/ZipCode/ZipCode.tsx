import React, { useState } from "react";
import { TextBox } from "@/components/ui/input";

interface ZipCodeProps {
  onChange: (values: string[] | string) => void;
}

const ZipCode: React.FC<ZipCodeProps> = ({ onChange }) => {
  return (
    <>
      <div className="max-w-[940px] mx-auto">
        <h2 className="heading1">Zip code</h2>
        <p className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px]
         xl:text-[1.25rem] xl:leading-[1.5]">
          Could you provide your ZIP code, please?
        </p>
      </div>
      <div className="flex gap-[12px] md:max-w-[456px] w-full justify-center mx-auto lg:gap-[24px]  items-stretch flex-wrap pb-[30px] 2xl:pb-[50px]">
        <TextBox className="text-sm md:text-lg" label="Zip Code" onChange={(e) => onChange(e.target.value) } />
      </div>
    </>
  );
};

export default ZipCode;
