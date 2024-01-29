"use client";
import React, { useState, ChangeEvent } from "react";
import Select from "react-select";
import { ArrowRight, Search, SortBy } from "../Icons/Icons";
import Image from "next/image";

import {
  Option,
  ProductFilterState,
  ProductFiltersProps,
} from "../../assests/interfaces/Home/index";

const sortByOptions: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const filterOptions: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const ProductFilters: React.FC<ProductFiltersProps> = ({
  onOptionSelect,
  onInputChange,
}) => {
  const isClearable = true;
  const [productFilter, setProductFilter] = useState<ProductFilterState>({
    sortBy: "",
    filter: "",
  });
  console.log("productFilter", productFilter);
  const [isDropdownOpenSortBy, setDropdownOpenSortBy] = useState(false);
  const [isDropdownOpenFilter, setDropdownOpenFilter] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

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
    <div className="md:flex  md:flex-row md:justify-between md:mb-[30px] lg:mb-[40px]  xl:mb-[44px] 2xl:mb-[50px]">
      <div className="w-full md:w-[49%] flex items-center flex-wrap justify-between md:justify-start gap-[12px] xl:gap-[12px] mb-[16px] md:mb-0">
        <div className="min-w-[46%] md:min-w-[132px] md:max-w-[132px] xl:min-w-[149px] filterWrapper">
          <span
            onClick={() => setDropdownOpenSortBy(!isDropdownOpenSortBy)}
            className="cursor-pointer bg-dark-7 p-[10px_22px] flex items-center justify-center gap-[6px]
            rounded-[100px] w-full  min-h-[36px] xl:min-h-[56px] text-dark font-bold text-[14px] xl:text-[16px]"
          >
            <SortBy className="w-[16px] h-[16px] fill-dark xl:w-[20px] xl:h-[20px]" />{" "}
            Sort by
          </span>
          {isDropdownOpenSortBy && (
            <Select
              options={sortByOptions}
              isClearable={isClearable}
              menuIsOpen={isDropdownOpenSortBy}
              onChange={handleSortByChange}
              placeholder="State"
              className="rectSelectWrapper"
            />
          )}
        </div>
        <div className="min-w-[46%] md:min-w-[132px] md:max-w-[132px] xl:min-w-[149px] filterWrapper">
          <span
            onClick={() => setDropdownOpenFilter(!isDropdownOpenFilter)}
            className="cursor-pointer bg-dark-7 p-[10px_22px] flex items-center justify-center gap-[6px]
            rounded-[100px] w-full  min-h-[36px] xl:min-h-[56px] text-dark font-bold text-[14px] xl:text-[16px]"
          >
            <SortBy className="w-[16px] h-[16px] fill-dark xl:w-[20px] xl:h-[20px]" />{" "}
            Filter
          </span>
          {isDropdownOpenFilter && (
            <Select
              options={filterOptions}
              isClearable={isClearable}
              menuIsOpen={isDropdownOpenFilter}
              onChange={handleFilterChange}
              placeholder="State"
              className="rectSelectWrapper"
            />
          )}
        </div>
      </div>

      {searchValue.length > 4 ? (
        // Elements to show when sortBy has a value
        <div className="md:w-[49%] md:flex md:justify-end md:gap-[8px]">
          <div
            onClick={() => setSearchValue("")}
            className="bg-btn-primary-gradient  cursor-pointer p-[1px] rounded-[12px] overflow-hidden w-full max-w-[632px] mx-auto"
          >
            <div className="bg-white flex justify-between items-center min-h-[56px] px-2 xl:pr-[24px] rounded-[12px]">
              <div className="flex items-center gap-[8px] flex-[0_0_auto] w-[70%]">
                <Image
                  src={"/producDetail/cashInHand.svg"}
                  width={60}
                  height={60}
                  className="w-[40px] h-[40px]"
                  alt="cash in hand"
                />
                <span className="text-dark font-bold text-[14px] xl:text-[18px]">
                  Income uplifts loan conditions{" "}
                </span>
              </div>
              <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
            </div>
          </div>
        </div>
      ) : (
        <div className="md:w-[49%] md:flex md:justify-end md:gap-[8px]">
          <span className="[&>:b]:inline-block [&>:b]:text-dark-2 text-[14px] block mb-[12px] md:mb-0 md:max-w-[220px]">
            <b className="">1024</b> of <b>1024</b> Used Vehicles for Sale Near
            You
          </span>
          <div className="relative ">
            <input
              className="shadow appearance-none border w-full text-dark-4 leading-tight focus:shadow-outline focus:outline-none border-dark-4 focus:bg-white focus:border-dark rounded-[12px] hover:border-dark p-[12px_60px_12px_16px] block xl:min-w-[320px] xl:p-[16px_60px_16px_16px] 2xl:min-w-[400px] 3xl:min-w-[436px]"
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleInputChange}
            />
            <span className="absolute right-[10px] top-[50%] transform translate-y-[-50%] text-[1.275rem] cursor-pointer">
              <Search className="fill-dark-5 w-[24px] h-[24px]" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
