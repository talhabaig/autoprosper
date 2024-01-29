"use client";

import React from "react";
import NavigationBar from "../../components/ui/Navigations/navigationBar";
import InventoryFilters from "@/components/Inventory/InventoryFilters/InvertoryFilters";

const InventoryLayout = () => {
  const handleOptionSelect = (options: {
    sortBy?: string;
    filter?: string;
  }) => {
    console.log("Selected option:", options);
  };

  const handleInputChange = (inputValue: string) => {
    console.log("Input value:", inputValue);
  };
  return (
    <>
      <NavigationBar variant="dark" />
      <section>
        <div className="container">
          <div className="hidden md:block  mb-[1.125rem] xl:mb-[1.5rem] ">
            <div
              className="inline-flex p-[10px_22px] leading-[150%] rounded-[100px] 
                     font-bold text-dark-3 uppercase text-[0.625rem] lg:text-[0.75rem] 
                     border border-solid border-dark-6 "
            >
              <span className="text-dark-4 inline-block"> Home </span>
            </div>
          </div>
          <div className="hidden md:block mb-[1.125rem] xl:mb-[1.5rem] ">
            <span
              className=" text-[18px] xl:text-[24px]
                 3xl:text-[32px] block mb-[12px] text-dark"
            >
              1277 of 1277 used vehicles for sale near you
            </span>
          </div>
          <div className="flex justify-between  flex-col-reverse  md:flex-row">
            <div className="md:w-[66%] xl:w-[70%] 2xl:w-[72%] 3xl:w-[75%]">
              <span>cards section</span>
            </div>
            <div className="md:w-[33%] xl:w-[28%] 2xl:w-[26.2%] 3xl:w-[24%] 
                md:border-[1px] border-solid border-dark-5 rounded-[16px] p-[14px_14px] 2xl:p-[30px_16px]">
              <InventoryFilters
                onOptionSelect={handleOptionSelect}
                onInputChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InventoryLayout;
