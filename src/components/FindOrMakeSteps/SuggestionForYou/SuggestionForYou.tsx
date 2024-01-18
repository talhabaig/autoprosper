import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "../../Icons/Icons";
import { SuggestionForCustomer } from "../../../assests/interfaces/Home/index";
import Button from "../../Common/Button/Button";

const cardData: SuggestionForCustomer[] = [
  {
    id: 1,
    imageSrc: "/suggestionForYou/nissan-kicks.png",
    heading: "2024 Nissan Kicks®",
    totalamount: "$ 13,420",
    downpayment: "$2,420",
    monthlypayment: "$480",
    variant: "LS",
  },
  {
    id: 2,
    imageSrc: "/suggestionForYou/chevrole-trax.png",
    heading: "2018 Chevrolet Trax",
    totalamount: "$ 13,420",
    downpayment: "$2,420",
    monthlypayment: "$480",
    variant: "LS",
  },
  {
    id: 3,
    imageSrc: "/suggestionForYou/ford-escape.png",
    heading: "2015 Ford Escape",
    totalamount: "$ 13,420",
    downpayment: "$2,420",
    monthlypayment: "$480",
    variant: "LS",
  },
  {
    id: 4,
    imageSrc: "/suggestionForYou/hyundai-elantra.png",
    heading: "2015 Hyundai Elantra",
    totalamount: "$ 13,420",
    downpayment: "$2,420",
    monthlypayment: "$480",
    variant: "LS",
  },
];

const SuggestionForYou = () => {
  return (
    <>
      <div className="max-w-[940px] mx-auto py-[28px] xl:py-[38px] 3xl:py-[48px]">
        <h2 className="heading1">Suggestions for you</h2>
        <p
          className="text-dark-2 text-center  mb-[1.5rem] md:mb-[1.875rem] lg:mb-[2.5rem] 2xl:mb-[3rem]   lg:text-[1rem] 
         xl:text-[1.25rem] xl:leading-[1.5]"
        >
          Explore these curated options we think will suit your preferences and
          needs.
        </p>
      </div>
      <div
        className={`flex flex-wrap md:justify-between md:items-stretch gap-[0.625rem]
          lg:gap-[1.125rem] 3xl:gap-6  `}
      >
        {cardData.map((item, index) => (
          <div
            key={item.id}
            className="flex-grow max-w-[380px] mx-auto md:mx-0 w-full md:max-w-[44%] lg:max-w-[30%]  xl:max-w-[23%]  flex-[0_0_auto]
               rounded-[12px]  
              first-of-type:shadow-[0px_36px_72px_-18px_rgba(10,24,53,0.25)] p-[1px] mb-[1.875rem] 2xl:mb-[3.5rem]
              first-of-type:bg-btn-primary-gradient shadow-[0px_18px_36px_-18px_rgba(10,24,53,0.25)] bg-bg-none
              [&>span]:font-bold 
              "
          >
            <div className="h-full bg-white rounded-[12px]">
              <div className="rounded-tr-[12px] max-w-[680px]  rounded-tl-[12px] px-[4px] pt-[4px] overflow-hidden bg-white">
                <Image
                  src={item.imageSrc ? item.imageSrc : ""}
                  width={682}
                  height={400}
                  className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
                  alt={item.heading || ""}
                />
              </div>
              <div
                className="py-[0.9375rem] xl:py-[1.5rem] px-[0.938rem]   xl:px-[1.5rem]
                 3xl:px-[1.875rem] bg-white rounded-br-[12px] rounded-bl-[12px] flex flex-col justify-between"
              >
                <h3 className="heading4 truncate">{item?.heading}</h3>
                <div className="flex items-center gap-[8px] mb-4 md:mb-[20px] lg:mb-6 ">
                  <span
                    className="inline-flex items-center justify-center p-[5px_10px] uppercase
                   bg-dark-7 tracking-[1.08px] text-dark-3 rounded-[100px] text-[12px] font-bold "
                  >
                    {" "}
                    {item?.variant}
                  </span>
                  <span> {item?.totalamount}</span>
                </div>
                <div className="flex items-center gap-[8px] text-[14px] leading-[150%]">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <ArrowDown className="w-[24px] h-[24px]" />
                    </span>
                    <span className="inline-block text-primary font-semibold">
                      {item?.downpayment}down
                    </span>
                  </div>
                  <div className="text-dark-3 font-semibold pl-[12px] border-l border-solid border-dark-4">
                    {item?.monthlypayment}/mo
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pb-[30px]">
        <Button
          variant="primary"
          label="Shop All Cars"
          className="min-w-[244px] xl:min-w-[290px] "
          children={
            <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
          }
        />
      </div>
    </>
  );
};

export default SuggestionForYou;
