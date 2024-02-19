"use client";

import { SearchIcon, Danger, Warm, Fire } from "@/components/Icons/Icons";
import { it } from "node:test";

import React from "react";
import Select from "react-select";
const SearchbarList = [
  {
    id: 1,
    icon: <Danger />,
    count: 3,
    time: "5 min's",
    heading: "Kyle Dodson",
    paragraph1: "user 2021 Mazda Mazda 3",
    paragraph2: "Select: january 5,2024",
  },
  {
    id: 2,
    icon: <Fire />,
    count: 1,
    time: "5 min's",
    heading: "Kyle Dodson",
    paragraph1: "user 2021 Mazda Mazda 3",
    paragraph2: "Select: january 5,2024",
  },
  {
    id: 3,
    icon: <Fire />,
    count: 1,
    time: "5 min's",
    heading: "Kyle Dodson",
    paragraph1: "user 2021 Mazda Mazda 3",
    paragraph2: "Select: january 5,2024",
  },
  {
    id: 4,
    icon: <Warm />,
    count: 2,
    time: "5 min's",
    heading: "Kyle Dodson",
    paragraph1: "user 2021 Mazda Mazda 3",
    paragraph2: "Select: january 5,2024",
  },
  {
    id: 5,
    icon: <Danger />,
    count: "3",
    time: "5 min's",
    heading: "Kyle Dodson",
    paragraph1: "user 2021 Mazda Mazda 3",
    paragraph2: "Select: january 5,2024",
  },
  {
    id: 6,
    icon: <Warm />,
    time: "5 min's",
    count: 1,
    heading: "Kyle Dodson",
    paragraph1: "user 2021 Mazda Mazda 3",
    paragraph2: "Select: january 5,2024",
  },
  {
    id: 7,
    icon: <Warm />,
    time: "5 min's",
    count: 2,
    heading: "Kyle Dodson",
    paragraph1: "user 2021 Mazda Mazda 3",
    paragraph2: "Select: january 5,2024",
  },
];
const Lead = [{ value: "Warm-Engaged", label: "Warm-Engaged" }];
export const Searchbar = () => {
  const placeholderStyles = {
    fontWeight: "500",
    fontSize: "14px",
    fontStyle: "normal",
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white w-full  border rounded-2xl border-dark-5 flex items-center justify-center flex-col  p-[24px_16px]">
        <div className="relative w-full mb-3">
          <div className="absolute h-full flex items-center ps-3">
            <SearchIcon />
          </div>
          <input
            type="search"
            className="flex w-full h-[52px] p-[17px_64px_17px_40px] items-center flex-shrink-0 rounded-xl border-dark-4 border focus:outline-none"
            placeholder="Search"
            style={placeholderStyles}
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-[15px] lg:gap-0 mb-4  w-full">
          <div className="flex gap-1 lg:gap-2 flex-wrap">
            <div className="flex items-center justify-center p-[9px_18px] rounded-[96px] bg-dark text-white font-bold text-sm not-italic">
              Active
            </div>
            <div className="flex items-center justify-center p-[9px_18px] rounded-[96px] bg-white border-2 border-dark-6 text-dark-4 font-bold text-sm not-italic">
              Sold
            </div>
            <div className="flex items-center justify-center p-[9px_18px] rounded-[96px] bg-white border-2 border-dark-6 text-dark-4 font-bold text-sm not-italic">
              Lost sale
            </div>
            <div className="flex items-center justify-center p-[9px_18px] rounded-[96px] bg-white border-2 border-dark-6 text-dark-4 font-bold text-sm not-italic">
              All
            </div>
          </div>
          <div className="text-dark-3 text-sm not-italic font-normal leading-5 flex items-center">
            Showing 921 results that match the following:
          </div>
        </div>
        <div className="w-full mb-[16px]">
          <p className="text-dark mb-0 font-bold text-lg not-italic leading-[23.4px] text-left">
            Prospects that need follow-up
          </p>
        </div>
        <div className="flex justify-around lg:justify-between w-full">
          <div className="flex flex-col gap-[3px]">
            <div className="flex justify-center">
              <Danger />
              <Danger />
              <Danger />
            </div>
            <p className="mb-0 text-center text-dark-3 text-[10px] font-normal not-italic ">
              Hot
            </p>
            <p className="mb-0 text-center text-dark text-lg font-bold leading-[13.4px] not-italic">
              40
            </p>
          </div>
          <div className="h-16 border border-dark-5"></div>
          <div className="flex flex-col gap-[3px]">
            <div className="flex justify-center">
              <Warm />
              <Warm />
            </div>
            <p className="mb-0 text-center text-dark-3 text-[10px] font-normal not-italic ">
              Warm
            </p>
            <p className="mb-0 text-center text-dark text-lg font-bold leading-[13.4px] not-italic">
              40
            </p>
          </div>
          <div className="h-16 border border-dark-5"></div>
          <div className="flex flex-col gap-[3px] lg:pr-20">
            <div className="flex justify-center">
              <Fire />
            </div>
            <p className="mb-0 text-center text-dark-3 text-[10px] font-normal not-italic ">
              Normal
            </p>
            <p className="mb-0 text-center text-dark text-lg font-bold leading-[13.4px] not-italic">
              40
            </p>
          </div>
        </div>
      </div>
      <div className="">
        {SearchbarList.map((item, index) => (
          <div
            key={index}
            className={`h-[248px] lg:h-[101px] bg-white  border-b border-dark-5 flex items-center justify-between pl-2 lg:pr-4  flex-col lg:flex-row gap-4 lg:gap-0 py-4
              ${
                SearchbarList.length == 1
                  ? "rounded-2xl"
                  : index === 0
                  ? "first:rounded-[16px_16px_0px_0px]"
                  : index === SearchbarList.length - 1
                  ? "last:rounded-[0px_0px_16px_16px] border-b-0"
                  : ""
              }
              
            `}
          >
            <div className="flex gap-3 w-full lg:w-max items-center ">
              <div className="w-20 h-20 lg:w-[86px] lg:h-[81px] rounded-xl bg-[#F3F6F9] flex items-center justify-center ">
                {[...Array(item.count)].map(() => (
                  <span>{item.icon}</span>
                ))}
              </div>
              <div className="flex flex-col gap-2 ">
                <div className="flex items-center gap-2">
                  <p className="mb-0 text-dark font-bold text-sm">
                    {item.heading}
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center w-[5px] h-[5px] rounded-full bg-dark-2"></div>
                    <p className="mb-0 font-normal text-dark-4 text-[10px]">
                      {item.time}
                    </p>
                  </div>
                </div>
                <div className="font-normal text-dark-3 text-[10px]">
                  {item.paragraph1}
                </div>
                <div className="font-normal text-dark-3 text-[10px]">
                  {item.paragraph2}
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col h-[52px] w-full lg:w-[270px]  lg:h-[72px] items-start gap-[5px] lg:gap-[9px] rounded-xl px-[10px] py-[8px] lg:py-[15px] bg-gray-50 border-[1px] border-dark-4">
              <label
                htmlFor="Lead conversion phase"
                className="cursor-text font-bold not-italic text-left text-dark-4 text-[9px] lg:text-[10px] "
              >
                Lead conversion phase
              </label>
              <select className="-ml-[4px] font-medium text-dark w-full text-[14px] lg:text-lg lg:leading-[22.68px] text-dark-1 focus:outline-none bg-gray-50 focus:ring-0 cursor-pointer">
                <option value="Months">Warm-Engaged</option>
              </select>
            </div> */}
            <div className="w-full lg:w-[270px] h-[52px] lg:h-[72px] items-start gap-[5px] lg:gap-[9px] rounded-xl px-[10px]  lg:py-[10px] bg-gray-50 border-[1px] border-dark-4">
              <Select
                styles={{
                  placeholder: (BaseStyle) => ({
                    ...BaseStyle,
                    color: "#001B44",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginLeft: "0px",
                  }),
                }}
                options={Lead}
                // onChange={(selectedOption) => {
                //   if (selectedOption) {
                //     const value = selectedOption.value;
                //     handleChange("car", value);
                //   }
                // }}

                placeholder="Warm-Engaged"
                className="rectSelectWrapper"
                components={{
                  Control: ({ children }) => (
                    <div>
                      <label
                        htmlFor="Date"
                        className="cursor-text font-bold not-italic text-left text-dark-4 text-[9px] lg:text-[10px]  ps-[9px]"
                      >
                        Lead conversion phase
                      </label>
                      <div style={{ display: "flex" }}>{children}</div>
                    </div>
                  ),
                }}
              />
            </div>

            <div className="flex flex-col w-full lg:w-max  gap-2">
              <button className=" flex justify-center items-center  py-[0.313rem] px-[0.625rem] text-white bg-dark rounded-[100px]  font-bold text-[10px] not-italic uppercase  cursor-pointer tracking-[0.9px] w-full lg:w-[170px]">
                A.i warm up
              </button>
              <button className=" flex justify-center items-center py-[0.313rem] px-[0.625rem] text-dark-4 border border-dark-4 rounded-[100px] font-bold text-[10px] not-italic uppercase tracking-[0.9px] cursor-pointer w-full lg:w-[170px]">
                Mannual warm up
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
