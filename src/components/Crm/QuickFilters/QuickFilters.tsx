"use client";

import { DownArrow2, Calender } from "@/components/Icons/Icons";
import Select from "react-select";
import React from "react";



const Date = [{ value: "Past 12 months", label: "Past 12 months" }];

export const QuickFilters = () => {
  return (
    <div className="bg-white h-[195px] lg:h-[215px]  border rounded-2xl border-dark-5 flex items-center justify-center flex-col gap-4  p-[24px_16px]">
      <div className="h-[44px] w-full flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p className="text-dark font-bold text-lg not-italic mb-0">
            Quick Filters
          </p>
          <DownArrow2 className="cursor-pointer" />
        </div>
        <div className="h-[1px] w-full border border-dark-5"></div>
      </div>
      <div className="w-full h-[52px] lg:h-[72px] items-start gap-[5px] lg:gap-[9px] rounded-xl px-[10px]  lg:py-[10px] bg-gray-50 border-[1px] border-dark-4">
        <Select
        styles={{
            placeholder: (BaseStyle) => ({
              ...BaseStyle,
              color: '#001B44', 
              fontSize: '18px',
              fontWeight: '500' ,
              marginLeft: '0px',
              
            }),
          }}
          options={Date}
          

          placeholder="Past 12 months"
          className="rectSelectWrapper"
          components={{
            Control: ({ children }) => (
              <div>
                <label
                  htmlFor="Date"
                  className="cursor-text font-bold not-italic text-left text-dark-4 text-[9px] lg:text-[10px]  ps-[9px]"
                >
                  Date
                </label>
                <div style={{ display: "flex" }}>{children}</div>
              </div>
            ),
          }}
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-1">
          <Calender />
          <p className="mb-0 font-normal text-sm not-italic text-dark">
            Jan 11, 2024
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Calender />
          <p className="mb-0 font-normal text-sm not-italic text-dark">Today</p>
        </div>
      </div>
    </div>
  );
};
