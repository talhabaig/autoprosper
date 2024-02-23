"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRightCurved } from "@/components/Icons/Icons";
import {
  Search,
  SortBy,
  FilterSortBy,
  Close,
  ThreeDots,
} from "../../Icons/Icons";
import { ProductFiltersProps } from "../../../assests/interfaces/Home/index";

import RadioButtonSingle from "@/components/Common/CheckButton/RadioButtonSingle";
import {
  DistanceOptions,
  MakeAndModel,
  PriceList,
  BodyType,
  Mpg,
  Mileage,
  Color,
  Features,
  Drivetrain,
  Engine,
  FuelType,
  VehicleHistory,
  sortOptions,
} from "./FilterOptions";

const InventoryFilters: React.FC<ProductFiltersProps> = ({
  onOptionSelect,
  onInputChange,
}) => {
  const [selectedTab, setSelectedTab] = useState<string>("");
  console.log("selectedTab", selectedTab);
  const [selectedSort, setSelectedSort] = useState<string>("");
  // const [productFilter, setProductFilter] = useState<ProductFilterState>({
  //   sortBy: "",
  //   filter: "",
  // });
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onInputChange(value);
  };

  const handleSortSelection = (sortOption: string) => {
    setSelectedSort((prevSort) => {
      onOptionSelect({ sortBy: sortOption });
      return sortOption;
    });
  };
  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const CloseTabsAndClearSelectedItems = () => {
    setSelectedTab("");
  };
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth > 786) {
        setSelectedTab("sortBy");
      }
    };

    // Call handleResize initially to set the selectedTab if necessary
    handleResize();

    // Add event listener for window resize
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <>
     {typeof window !== 'undefined' && window.innerWidth < 768 ? (
        selectedTab === "sortBy" ? (
          <div className="flex items-center justify-between pb-[14px] md:hidden">
            <span className="inline-block text-dark text-[13px] font-bold">
              Sort by
            </span>{" "}
            <div>
              {" "}
              <span
                className="inline-block "
                onClick={CloseTabsAndClearSelectedItems}
              >
                <Close className="w-[20px] h-[20px]" />
              </span>
            </div>
          </div>
        ) : selectedTab === "filter" ? (
          <div className="flex items-center justify-between pb-[14px] md:hidden">
            <span className="inline-block text-dark text-[13px] font-bold">
              Filter
            </span>{" "}
            <div className="flex items-center gap-[10px]">
              <ThreeDots className="w-[20px] h-[20px]" />
              <span
                className="inline-block "
                onClick={CloseTabsAndClearSelectedItems}
              >
                <Close className="w-[20px] h-[20px]" />
              </span>
            </div>
          </div>
        ) : (
          ""
        )
      ) : null}

      <div className="relative mb-[16px]">
        <input
          className="shadow appearance-none border w-full text-dark-4 leading-tight 
            focus:shadow-outline focus:outline-none border-dark-6-4 focus:bg-white focus:border-dark-6
             rounded-[12px] hover:border-dark-6 p-[14px_12px_14px_50px] block 
              xl:p-[16px_16px_16px_50px] "
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleInputChange}
        />
        <span className="absolute left-[16px] top-[50%] transform translate-y-[-50%] text-[1.275rem] cursor-pointer">
          <Search className="fill-dark-5 w-[24px] h-[24px]" />
        </span>
      </div>

      <div className="block !relative">
        <div className="flex justify-between mb-[10px]">
          <div className="w-[48%]">
            <button
              className={`cursor-pointer md:!bg-dark-7 md:p-[12x_8px] xl:p-[10px_22px] w-full 
              flex items-center justify-start md:justify-center gap-[6px] !shadow-none
              md:rounded-[100px]  md:min-h-[36px] xl:min-h-[56px] text-dark font-bold text-[14px] xl:text-[16px] ${
                selectedTab === "sortBy" ? "underline" : ""
              }`}
              onClick={() => handleTabClick("sortBy")}
            >
              <SortBy className="w-[16px] h-[16px] fill-dark xl:w-[20px] xl:h-[20px]" />
              Sort by
            </button>
          </div>
          <div className="w-[48%] flex justify-end">
            <button
              className={`cursor-pointer md:!bg-dark-7 md:p-[12x_8px] :p-[10px_22px] md:w-full 
              flex items-center justify-start md:justify-center gap-[6px] !shadow-none
              md:rounded-[100px]  md:min-h-[36px] xl:min-h-[56px] text-dark font-bold text-[14px] xl:text-[16px] ${
                selectedTab === "filter" ? "underline" : ""
              }`}
              onClick={() => handleTabClick("filter")}
            >
              <FilterSortBy className="w-[16px] h-[16px] fill-dark xl:w-[20px] xl:h-[20px]" />
              Filter
            </button>
          </div>
        </div>

        <div
          className={`absolute w-full bg-white z-[10] md:relative md:block
               ${selectedTab ? "block" : "hidden"}`}
        >
          {selectedTab === "sortBy" && (
            <ul>
              {sortOptions.map((option) => (
                <li
                  key={option.id}
                  onClick={() => handleSortSelection(option.value)}
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden text-left 
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px] cursor-pointer 
                   border-b border-solid border-dark-6 last-of-type:border-[0] group"
                >
                  <span className="group-hover:underline">
                    {" "}
                    {option.label}{" "}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {selectedTab === "filter" && (
            <Accordion
              type="single"
              collapsible
              className="w-full accordionWrapper"
            >
              <AccordionItem
                key="item-1"
                className="border-t-[0] border-b border-solid border-dark-6"
                value="item-1"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                >
                  Distance
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap [&>:label]:w-full">
                    <RadioButtonSingle
                      options={DistanceOptions}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                        const selectedOption = values[0];
                        onOptionSelect({ filter: selectedOption });
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b-[1px] border-solid border-dark-6"
                key="item-2"
                value="item-2"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left
                    border-dark-6"
                >
                  Make & Model
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <div className="flex flex-wrap [&>:label]:w-full">
                    <RadioButtonSingle
                      options={MakeAndModel}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b-[1px] border-solid border-dark-6"
                key="item-3"
                value="item-3"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                >
                  Price
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <div className="flex flex-wrap [&>:label]:w-full">
                    <RadioButtonSingle
                      options={PriceList}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b-[1px] border-solid border-dark-6"
                key="item-4"
                value="item-4"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                >
                  Year
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <div className="flex flex-wrap [&>:label]:w-full">
                    <RadioButtonSingle
                      options={PriceList}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b-[1px] border-solid border-dark-6"
                key="item-5"
                value="item-5"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                >
                  Body type
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <div className="flex flex-wrap [&>:label]:w-full">
                    <RadioButtonSingle
                      options={BodyType}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b-[1px] border-solid border-dark-6"
                key="item-6"
                value="item-6"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                >
                  MPG
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <div className="flex flex-wrap [&>:label]:w-full">
                    <RadioButtonSingle
                      options={Mpg}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b-[1px] border-solid border-dark-6"
                key="item-7"
                value="item-7"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                >
                  Mileage
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <div className="flex flex-wrap [&>:label]:w-full">
                    <RadioButtonSingle
                      options={Mileage}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b-[1px] border-solid border-dark-6"
                key="item-8"
                value="item-8"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                >
                  Color
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <div className="flex flex-wrap [&>:label]:w-full">
                    <RadioButtonSingle
                      options={Color}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b-[1px] border-solid border-dark-6"
                key="item-9"
                value="item-9"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                >
                  Features
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <div className="flex flex-wrap [&>:label]:w-full">
                    <RadioButtonSingle
                      options={Features}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b-[1px] border-solid border-dark-6"
                key="item-10"
                value="item-10"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                >
                  Drivetrain
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <div className="flex flex-wrap [&>:label]:w-full">
                    <RadioButtonSingle
                      options={Drivetrain}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b-[1px] border-solid border-dark-6"
                key="item-11"
                value="item-11"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                >
                  Engine
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <div className="flex flex-wrap [&>:label]:w-full">
                    <RadioButtonSingle
                      options={Engine}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b-[1px] border-solid border-dark-6"
                key="item-12"
                value="item-12"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                >
                  Fuel type
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <div className="flex flex-wrap [&>:label]:w-full">
                    <RadioButtonSingle
                      options={FuelType}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b-[0]"
                key="item-13"
                value="item-13"
              >
                <AccordionTrigger
                  className="text-[14px] 2xl:text-[16px] [&>*:nth-child(even)]:!hidden 
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                >
                  Vehicle history
                  <ArrowRightCurved className="ArrowRight flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                </AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <div className="flex flex-wrap selectLabelWrapper">
                    <RadioButtonSingle
                      options={VehicleHistory}
                      selectedOptions={selectedOptions}
                      onChange={(values) => {
                        setSelectedOptions(values);
                      }}
                      className=""
                      allowMultiple={false}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      </div>
    </>
  );
};

export default InventoryFilters;
