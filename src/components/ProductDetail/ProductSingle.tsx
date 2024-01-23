"use client";
import React from "react";
import { ArrowDown, ArrowRight, BlueTooth } from "../Icons/Icons";
import Button from "../Common/Button/Button";
import Image from "next/image";
import { productDetail } from "../../assests/interfaces/Home/index";
import styles from "./ProductDetailSingle.module.css";
import ProductFilters from "./ProductFilters";
import Link from "next/link";

const upGradeRideDetails: productDetail[] = [
  {
    id: 1,
    imageSrc: "/producDetail/product-detail.png",
    contentLabel: "SE",
    heading: "2024 Nissan Kicks®",
    description:
      "*Vehicle prices exclude taxes and finance charges and, subject to state law, exclude doc fees up to $299 and other applicable fees. Vehicles available for sale at the identified location only.",
    buttonLabel: "Adjust your terms",
    buttonIcon: (
      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
    totalAmount: 12480,
    downPayment: 4280,
    monthlyPayment: 210,
    totalMilage: 230840,
  },
];

const ProductSingle = () => {
  const handleSortBySelect = (selectedOption: any) => {
    console.log("Sort By Selected in parent:", selectedOption);
    // Do something with sortBy and filter
  };

  const handleInputChnage = (value: string) => {
    console.log("Filter Selected in parent:", value);
  };

  return (
    <section className="pt-[24px] pb-[3rem]  xl:pb-[6rem] 3xl:pb-[7rem] bg-white">
      <div className="container ">
        <ProductFilters
          onOptionSelect={handleSortBySelect}
          onInputChange={handleInputChnage}
        />
        {upGradeRideDetails.map((item) => (
          <div
            key={item.id}
            className="lg:flex md:justify-between md:items-center
             pb-[3.75rem] lg:pb-[5rem] 3xl:pb-[6.875rem] last-of-type:pb-0"
          >
            <div
              className="md:flex-[0_0_auto] lg:w-[48%] 3xl:w-[49%] 
              mb-[1.875rem] md:mb-0  md:max-w-[80%] mx-auto lg:max-w-[90%] flex justify-center items-center
              px-[4px] pt-[24px] pb-[14px] overflow-hidden bg-white"
            >
              <div className="relative max-w-[340px] mx-auto md:max-w-full">
                <Image
                  src={"/producDetail/bg-cloud-product-detail.png"}
                  width={446}
                  height={214}
                  className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
                  alt={item.heading || ""}
                />

                <div
                  className={`mt-[-60px]  3xl:mt-[-150px] md:!mt-[-130px]
                  lg:!mt-[-100px] xl:!mt-[-120px] 2xl:!mt-[-140px] max-w-[340px] max-h-[127px]
                  md:max-w-[542px] md:max-h-[202px] lg:max-w-[437px] lg:max-h-[163px]
                  xl:max-w-[523px] xl:max-h-[195px] 2xl:max-w-[610px] 2xl:max-h-[227px]
                  3xl:max-w-[690px] 3xl:max-h-[297px]   ${styles.imageWrapper}
                  `}
                >
                  <Image
                    src={item.imageSrc ? item.imageSrc : ""}
                    width={690}
                    height={257}
                    alt={item.contentLabel || ""}
                  />
                </div>
              </div>
            </div>
            <div className="md:flex-[0_0_auto] lg:w-[48%] 3xl:w-[49%] ">
              <div className="max-w-[632px] mx-auto flex flex-col text-start">
                <p className="text-[14px] mb-[0.75rem] ">{item.description}</p>
                <div className="pb-[0.75rem] ">
                  <span
                    className="inline-block p-[5px_10px] leading-[1.3] rounded-[100px] tracking-[1px] 
                    font-bold text-dark-3 uppercase text-[0.625rem] lg:text-[0.75rem]  bg-dark-7"
                  >
                    {item.contentLabel}
                  </span>
                </div>
                <h1 className="heading1 mb-[18px] lg:mb-[24px] font-normal text-start ">
                  {item.heading}
                </h1>
                <div className="flex items-center flex-wrap mb-[24px] gap-[12px] lg:gap-[18px] text-[14px] lg:text-[16px] lg:mb-[32px]">
                  <span>${item.totalAmount}</span>
                  <span className="flex items-center gap-[8px]">
                    {" "}
                    <BlueTooth className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px]" />{" "}
                    Bluetooth
                  </span>
                </div>
                <div className="flex flex-wrap items-center  gap-[8px] text-[14px] lg:text-[16px] leading-[150%] mb-[24px] lg:mb-[32px]">
                  <div
                    className="text-dark w-[31%] font-normal
                     text-center"
                  >
                    {item?.totalAmount}
                  </div>
                  <div
                    className="flex items-center justify-center gap-[8px] w-[31%]
                      border-l border-r border-dark border-solid lg:text-[16px]"
                  >
                    <span>
                      <ArrowDown className="w-[24px] h-[24px]" />
                    </span>
                    <span className="inline-block text-dark font-bold">
                      {item?.totalAmount}
                    </span>
                  </div>
                  <div
                    className="text-dark w-[31%] font-bold pl-[12px] lg:text-[16px] 
                   text-center"
                  >
                    ${item?.downPayment}
                  </div>
                </div>
                <div>
                  <Link href="/get-pre-qualified">
                    <Button
                      variant="primary"
                      label={item.buttonLabel}
                      children={item.buttonIcon}
                      className="w-full  lg:max-w-[230px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSingle;
