"use client";
import Button from "@/components/Common/Button/Button";
import React from "react";

const ZipCodeService = () => {
  return (
    <div className="bg-btn-primary-gradient  p-[2px] rounded-[12px] overflow-hidden">
      <div className="bg-white overflow-hidden rounded-[12px] p-[24px_16px]">
        <span className="heading4 font-bold block mb-[12px]">
          Enter zip code for instant pricing!
        </span>
        <div className="lg:flex lg:items-center relative">
          <div className={`relative w-full block mb-[16px]`}>
            <label className="inline-block text-dark-4 font-bold text-[10px] absolute top-[8px] left-[18px]">
              Location
            </label>
            <input
              className="shadow appearance-none border w-full pt-[24px] pb-[8px] px-[18px] text-gray-700 leading-tight 
             focus:shadow-outline border-dark-4 focus:outline-none focus:bg-white focus:border-dark rounded-[12px]
             hover:border-dark"
              type="number"
              placeholder="e.g 97210"
              onChange={(e) => console.log("zipcode", e.target.value)}
            />
          </div>
          <div className="absolute top-0 right-0">
            <Button
              variant="primary"
              className="lg:min-h-[56px] !w-full !rounded-[12px]"
              label="Book Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZipCodeService;
