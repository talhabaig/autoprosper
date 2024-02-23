"use client";

import React, { useState } from "react";
import NavigationBar from "../../components/ui/Navigations/navigationBar";
import InventoryFilters from "@/components/Inventory/InventoryFilters/InvertoryFilters";
import { ProductCardDetails } from "../../assests/interfaces/Home";
import Image from "next/image";

import {
  BlueTooth,
  Location,
  MilesCovered,
  Lock,
  LockVariant2,
  ArrowRightCurved,
  DoubleRightArrow,
  InventoryMessage,
  ArrowUpper,
} from "@/components/Icons/Icons";

import CustomPagination from "@/components/Common/Pagination/CustomPagination";
import Link from "next/link";

const carDetailsCard: ProductCardDetails[] = [
  {
    productName: "2018 Mitsubishi Outlander",
    location: "asjkaaska",
    productImage: "/producDetail/product-detail.png",
    productLabel: "SE",
    totalMilage: "126,602",
    totalPrice: "15,795",
  },
  {
    productName: "2018 Mitsubishi Outlander",
    location: "asjkaaska",
    productImage: "/producDetail/product-detail.png",
    productLabel: "SE",
    totalMilage: "126,602",
    totalPrice: "15,795",
  },
  {
    productName: "2018 Mitsubishi Outlander",
    location: "asjkaaska",
    productImage: "/producDetail/product-detail.png",
    productLabel: "SE",
    totalMilage: "126,602",
    totalPrice: "15,795",
  },
  {
    productName: "2018 Mitsubishi Outlander",
    location: "asjkaaska",
    productImage: "/producDetail/product-detail.png",
    productLabel: "SE",
    totalMilage: "126,602",
    totalPrice: "15,795",
  },
  {
    productName: "2018 Mitsubishi Outlander",
    location: "asjkaaska",
    productImage: "/producDetail/product-detail.png",
    productLabel: "SE",
    totalMilage: "126,602",
    totalPrice: "15,795",
  },
  {
    productName: "2018 Mitsubishi Outlander",
    location: "asjkaaska",
    productImage: "/producDetail/product-detail.png",
    productLabel: "SE",
    totalMilage: "126,602",
    totalPrice: "15,795",
  },
  {
    productName: "2018 Mitsubishi Outlander",
    location: "asjkaaska",
    productImage: "/producDetail/product-detail.png",
    productLabel: "SE",
    totalMilage: "126,602",
    totalPrice: "15,795",
  },
  {
    productName: "2018 Mitsubishi Outlander",
    location: "asjkaaska",
    productImage: "/producDetail/product-detail.png",
    productLabel: "SE",
    totalMilage: "126,602",
    totalPrice: "15,795",
  },
  {
    productName: "2018 Mitsubishi Outlander",
    location: "asjkaaska",
    productImage: "/producDetail/product-detail.png",
    productLabel: "SE",
    totalMilage: "126,602",
    totalPrice: "15,795",
  },
];

const InventoryLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = carDetailsCard.slice(indexOfFirstCard, indexOfLastCard);
  const handleOptionSelect = (options: {
    sortBy?: string;
    filter?: string;
  }) => {
    console.log("Selected option from child:", options);
  };

  const handleInputChange = (inputValue: string) => {
    console.log("Input value:", inputValue);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <NavigationBar variant="dark" />
      <section className="md:pt-[16px]">
        <div className="container">
          <div className="hidden lg:block  mb-[1.125rem] xl:mb-[1.5rem] ">
            <div
              className="inline-flex items-center gap-[10px] p-[10px_22px] leading-[150%] 
              font-bold text-dark-3 uppercase text-[0.625rem] lg:text-[0.75rem] 
              border border-solid border-dark-6  rounded-[100px]"
            >
              <span
                className="first-of-type:text-dark-4 first-of-type:font-normal inline-flex justify-center gap-[10px]
               text-dark font-bold [&>svg]:last-of-type:hidden"
              >
                {" "}
                Home <DoubleRightArrow className="w-[18px] h-[18px]" />{" "}
              </span>
              <span
                className="first-of-type:text-dark-4 first-of-type:font-normal inline-flex justify-center gap-[10px]
               text-dark font-bold last-of-type:[&>svg]:hidden"
              >
                {" "}
                Used car search{" "}
                <DoubleRightArrow className="w-[18px] h-[18px]" />{" "}
              </span>
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
          <div className="pt-[140px] md:pt-0 flex justify-between  flex-col-reverse  md:flex-row">
            <div className="md:w-[63%] lg:w-[70%] 2xl:w-[72%] 3xl:w-[75%] mb-[16px]">
              {currentCards.map((items, index) => (
                <div
                  key={index}
                  className="p-[10px] rounded-[16px] border border-solid border-dark-5 
                   lg:flex lg:justify-between mb-[16px] 2xl:p-[14px]"
                >
                  <div
                    className="relative flex justify-center items-center overflow-hidden bg-white min-h-[304px]
                      border border-solid border-dark-6 rounded-[14px] px-[10px] mb-[16px] lg:min-h-[260px]
                       lg:w-[39%] lg:mb-0 2xl:min-h-[326px] 2xl:max-w-[326px]"
                  >
                    <div className="relative max-w-[310px]  mx-auto ">
                      <Image
                        src={"/producDetail/bg-cloud-product-detail.png"}
                        width={446}
                        height={214}
                        className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
                        alt="image"
                      />

                      <div
                        className={`mt-[-60px]  max-w-[310px] sm:mt-[-80px] max-h-[127px]`}
                      >
                        <Image
                          src={
                            items.productImage ??
                            "/producDetail/product-detail.png"
                          }
                          width={690}
                          height={257}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="absolute top-[16px] left-[16px]">
                      <span
                        className="inline-flex justify-center items-center text-[12px] leading-[150%] 
                          font-bold tracking-[0.9px] uppercase p-[4px_8px] bg-dark-7 rounded-[100px]"
                      >
                        New
                      </span>
                    </div>
                    <div className="absolute  bottom-[12px] left-1/2 -translate-x-1/2">
                      <div className="bg-btn-primary-gradient p-[2px] rounded-[100px] overflow-hidden cursor-pointer">
                        <div className="px-[16px] py-[7px] bg-white flex items-center justify-center gap-[5px] rounded-[100px]">
                          <Location className="w-[16px] h-[16px] fill-dark" />
                          <span className="inline-block text-dark font-bold text-[14px]">
                            Location
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="px-[5px] py-[10px] lg:w-[60%] lg:flex lg:flex-col lg:justify-between 2xl:w-[62%]
                  3xl:w-[67%]"
                  >
                    <div className="lg:flex lg:justify-between">
                      <div className="lg:w-[74%] 2xl:w-[64%]">
                        <h2 className="heading4 mb-[10px] font-bold">
                          {items.productName}
                        </h2>
                        <div className="mb-[10px]">
                          <span className="text-[12px] text-dark xl:text-[14px] 2xl:text-[16px] leading-[150%]">
                            SE
                          </span>
                        </div>
                        <ul className="flex gap-[10px] mb-[15px] 2xl:gap-[16px]">
                          <li
                            className="flex items-center gap-[4px] fill-dark-2 p-[4px_10px]
                             bg-green-light rounded-[100px] text-[12px] font-normal leading-[150%]
                              lg:text-[14px] xl:text-[16px] 2xl:text-[18px] lg:p-[6px_12px] 2xl:p-[8px_16px] xl:gap-[6px] 2xl:gap-[8px]"
                          >
                            <MilesCovered className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] 2xl:w-[20px] 2xl:h-[20px]  fill-black" />{" "}
                            {items.totalMilage} Miles
                          </li>
                          <li
                            className="flex items-center gap-[4px] fill-dark-2 p-[4px_10px]
                             bg-green-light rounded-[100px] text-[12px] font-normal leading-[150%]
                             lg:text-[14px] xl:text-[16px] 2xl:text-[18px] lg:p-[6px_12px] 2xl:p-[8px_16px] xl:gap-[6px] 2xl:gap-[8px]"
                          >
                            <BlueTooth className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] 2xl:w-[20px] 2xl:h-[20px] fill-dark-2" />{" "}
                            Bluetooth
                          </li>
                        </ul>
                      </div>
                      <div className="mb-[15px] lg:w-[25%] 2xl:w-[34%] lg:mb-0 lg:flex lg:justify-end">
                        <div>
                          <span
                            className="block text-dark-2 text-[12px] leading-[150%] font-normal mb-[8px]
                              lg:text-right lg:mb-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]"
                          >
                            Price
                          </span>
                          <span className="block text-dark text-[18px] xl:text-[22px] 2xl:text-[26px] 3xl:text-[32px] font-bold leading-[130%]">
                            $ {items.totalPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-dark-6 p-[16px_8px_24px_8px] flex gap-[10px] items-center justify-center
                        rounded-[12px] mb-[20px] relative lg:p-[24px_16px_16px_16px] lg:mb-0"
                    >
                      <span
                        className=" bg-white p-[12px_3px] max-w-[150px] w-full text-[14px] flex 
                          justify-center items-center gap-[5px] text-dark font-bold lg:max-w-[49%] cursor-pointer"
                      >
                        <Lock className="w-[16px] h-[16px] fill-dark" /> $...
                        Down
                      </span>
                      <span
                        className=" bg-white p-[12px_3px] max-w-[150px] w-full text-[14px]
                           flex justify-center items-center gap-[5px] text-dark font-bold lg:max-w-[49%] cursor-pointer"
                      >
                        <Lock className="w-[16px] h-[16px] fill-dark" /> $...
                        /Month
                      </span>
                      <div
                        className="absolute bottom-[-12px] bg-btn-primary-gradient p-[4px_16px] gap-[10px] 
                         max-w-[207px] 2xl:min-w-[233px] w-full flex items-center justify-center rounded-[100px]
                         min-h-[26px] 2xl:min-h-[36px] lg:bottom-[unset] lg:top-[-12px] 2xl:top-[-22px] cursor-pointer"
                      >
                        <LockVariant2 className="w-[16px] h-[16px] fill-dark 2xl:w-[20px] 2xl:h-[20px]" />
                        <span className="text-[14px] font-bold text-dark 2xl:text-[16px]">
                          Unlock your terms
                        </span>
                        <ArrowRightCurved className="w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] fill-dark" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div>
                <CustomPagination
                  currentPage={currentPage}
                  itemsPerPage={cardsPerPage}
                  totalItems={carDetailsCard.length}
                  paginate={paginate}
                />
              </div>
            </div>
            <div
              className="md:w-[36%] lg:w-[28%] 2xl:w-[26.2%] 3xl:w-[24%] md:h-[max-content] fixed top-[61px]
               w-full left-0 bg-white shadow-[0px_10px_20px_0px_rgba(0,0,0,0.05)]
                md:sticky md:top-[14px] md:left-[unset]
                md:border-[1px] border-solid border-dark-5 md:rounded-[16px] p-[14px_14px] 2xl:p-[30px_16px]"
            >
              <InventoryFilters
                onOptionSelect={handleOptionSelect}
                onInputChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="fixed z-[51] bottom-[18px] right-[18px] md:bottom-[100px] md:right-[30px] ">
          <button className="bg-dark hover:scale-110 transition-all p-[20px] rounded-[16px] md:flex items-center md:gap-1">
            <InventoryMessage className="w-[24px] h-[24px]" />
            <span className="text-[#FFF] text-[14px] hidden md:block font-bold leading-normal">
              Message
            </span>
          </button>
        </div>
        <div className="fixed z-[51] bottom-[24px] right-[30%] md:right-[28px]">
          <Link href="#">
            <button className=" hover:scale-110 transition-all bg-btn-primary-gradient gap-[5px] flex items-center !p-[7px_16px] md:!p-[20px] rounded-full cursor-pointer">
              <ArrowUpper className="w-[16px] h-[16px]  md:w-[24px] md:h-[24px] " />
           <span className="text-[14px] font-medium text-dark md:hidden">back to top</span> 
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default InventoryLayout;
