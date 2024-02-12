"use client";
import Button from "@/components/Common/Button/Button";
import React from "react";

const ZipCodeService = () => {
  return (
    <div className=" bg-btn-primary-gradient shadow-[0px_36px_72px_-18px_rgba(0,27,68,0.25)]
      p-[2px] rounded-[12px] overflow-hidden">
      <div className="bg-white overflow-hidden rounded-[12px] p-[24px_16px] xl:p-[28px] 2xl:p-[32px]">
        <span className="heading4 font-bold block mb-[12px] lg:mb-[16px] xl:mb-[18px] 2xl:mb-[32px]">
          Enter zip code for instant pricing!
        </span>
        <div className="lg:flex lg:items-center relative">
          <div className={`relative w-full block mb-[16px] lg:mb-0`}>
            <label className="inline-block text-dark font-bold text-[10px] absolute top-[8px] left-[18px]
             lg:top-[13px] lg:text-[12px] lg:left-[22px] 2xl:left-[24px]">
              Location
            </label>
            <input
              className="shadow appearance-none border w-full pt-[24px] pb-[8px] px-[18px] text-gray-700 leading-tight 
             focus:shadow-outline border-dark-4 focus:outline-none focus:bg-white focus:border-dark rounded-[12px]
             hover:border-dark lg:pt-[30px] lg:pb-[14px] lg:pl-[22px] lg:pr-[320px] 2xl:pt-[33px] 2xl:pb-[17px]
             2xl:pl-[24px]"
              type="number"
              placeholder="e.g 97210"
              onChange={(e) => console.log("zipcode", e.target.value)}
            />
          </div>
          <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2  lg:right-[5px]">
            <Button
              variant="primary"
              className="lg:min-h-[56px] !w-full !rounded-[12px] lg:!min-w-[303px]"
              label="Book Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZipCodeService;
