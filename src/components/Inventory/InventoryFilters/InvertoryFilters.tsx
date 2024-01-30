"use client";
import React, { useState, ChangeEvent } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "@/components/Icons/Icons";
import { Search, SortBy } from "../../Icons/Icons";
import {
  Option,
  ProductFilterState,
  ProductFiltersProps,
} from "../../../assests/interfaces/Home/index";

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
} from "./FilterOptions";

const InventoryFilters: React.FC<ProductFiltersProps> = ({
  onOptionSelect,
  onInputChange,
}) => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const [productFilter, setProductFilter] = useState<ProductFilterState>({
    sortBy: "",
    filter: "",
  });
  const [searchValue, setSearchValue] = useState<string>("");
  console.log("productFilter", productFilter);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  console.log("selectedOptions", selectedOptions);

  const handleSortByChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setProductFilter((prevData) => ({
        ...prevData,
        sortBy: value,
      }));
      onOptionSelect({ sortBy: value, filter: productFilter.filter });
    }
  };

  const handleFilterChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setProductFilter((prevData) => ({
        ...prevData,
        filter: value,
      }));
      onOptionSelect({ sortBy: productFilter.sortBy, filter: value });
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value); // Update the state with the new value
    console.log("inputvalue", value); // Log the current value
    onInputChange(value); // Pass the current value to the callback
  };

  return (
    <>
      <div className=" ">
        <div className="relative mb-[16px]">
          <input
            className="shadow appearance-none border w-full text-dark-4 leading-tight 
            focus:shadow-outline focus:outline-none border-dark-4 focus:bg-white focus:border-dark
             rounded-[12px] hover:border-dark p-[14px_12px_14px_50px] block 
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

        <Tabs defaultValue="account" className="block !relative">
          <TabsList
            className="flex items-center flex-wrap justify-between bg-[none] p-0 pb-[14px] mb-[10px] h-full
             border-b border-solid border-dark-6 md:pb-0 md:mb-0 md:border-b-[0]"
          >
            <span
              className="block md:w-[48%]"
              onClick={() =>
                setIsContentVisible(
                  (prevIsContentVisible) => !prevIsContentVisible
                )
              }
            >
              <TabsTrigger
                value="sortBy"
                className=" cursor-pointer md:!bg-dark-7 md:p-[10px_22px] w-full 
                flex items-center justify-start md:justify-center gap-[6px] !shadow-none
                md:rounded-[100px]  md:min-h-[36px] xl:min-h-[56px] text-dark font-bold text-[14px] xl:text-[16px]"
              >
                <SortBy className="w-[16px] h-[16px] fill-dark xl:w-[20px] xl:h-[20px]" />{" "}
                Sort by
              </TabsTrigger>
            </span>
            <span
              className="block md:w-[48%]"
              onClick={() =>
                setIsContentVisible(
                  (prevIsContentVisible) => !prevIsContentVisible
                )
              }
            >
              <TabsTrigger
                value="Filter"
                className="cursor-pointer md:!bg-dark-7 md:p-[10px_22px] w-full
              flex items-center justify-start md:justify-center gap-[6px] !shadow-none
               md:rounded-[100px]  md:min-h-[36px] xl:min-h-[56px] text-dark font-bold text-[14px] xl:text-[16px]"
              >
                <SortBy className="w-[16px] h-[16px] fill-dark xl:w-[20px] xl:h-[20px]" />{" "}
                Filter
              </TabsTrigger>
            </span>
          </TabsList>

          <div
            className={`absolute w-full bg-white z-[10] md:relative md:block
               ${isContentVisible ? "block" : "hidden"}`}
          >
            <TabsContent value="sortBy">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="Filter">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  key="item-1"
                  className="border-t-[0] border-b border-solid border-dark"
                  value="item-1"
                >
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    Distance
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap [&>:label]:w-full">
                      <RadioButtonSingle
                        options={DistanceOptions}
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
                <AccordionItem key="item-2" value="item-2">
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    Make & Model
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
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
                <AccordionItem key="item-3" value="item-3">
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    Price
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
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
                <AccordionItem key="item-4" value="item-4">
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    Year
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
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
                <AccordionItem key="item-5" value="item-5">
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    Body type
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
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
                <AccordionItem key="item-6" value="item-6">
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    MPG
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
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
                <AccordionItem key="item-7" value="item-7">
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    Mileage
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
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
                <AccordionItem key="item-8" value="item-8">
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    Color
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
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
                <AccordionItem key="item-9" value="item-9">
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    Features
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
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
                <AccordionItem key="item-10" value="item-10">
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    Drivetrain
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
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
                <AccordionItem key="item-11" value="item-11">
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    Engine
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
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
                <AccordionItem key="item-12" value="item-12">
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    Fuel type
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
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
                <AccordionItem key="item-13" value="item-13">
                  <AccordionTrigger
                    className="text-[14px] lg:text-[16px] [&>*:nth-child(even)]:!hidden 
                    font-bold leading-[130%] text-dark no-underline py-[14px] xl:py-[18px]  text-left"
                  >
                    Vehicle history
                    <Plus className="flex-[0_0_auto] w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] " />
                  </AccordionTrigger>
                  <AccordionContent>
                    {" "}
                    <div className="flex flex-wrap [&>:label]:w-full">
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
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default InventoryFilters;
