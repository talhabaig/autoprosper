import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight, QuestionMarkRounded } from "../../Icons/Icons";
import { SuggestionForCustomer } from "../../../assests/interfaces/Home/index";
import Button from "../../Common/Button/Button";
import Link from "next/link";

interface SuggestionForCustomerExtended extends SuggestionForCustomer {
  route: string;
}

const cardData: SuggestionForCustomerExtended[] = [
  {
    id: 1,
    imageSrc: "/suggestionForYou/white-nissan.png",
    heading: "2024 Nissan Kicks®",
    totalamount: "$ 13,420",
    downpayment: "$2,420",
    monthlypayment: "$480",
    variant: "LS",
    route: "product-detail",
  },
  {
    id: 2,
    imageSrc: "/suggestionForYou/blue-nissan.png",
    heading: "2018 Chevrolet Trax",
    totalamount: "$ 13,420",
    downpayment: "$2,420",
    monthlypayment: "$480",
    variant: "LS",
    route: "product-detail",
  },
  {
    id: 3,
    imageSrc: "/suggestionForYou/white-nissan.png",
    heading: "2015 Ford Escape",
    totalamount: "$ 13,420",
    downpayment: "$2,420",
    monthlypayment: "$480",
    variant: "LS",
    route: "product-detail",
  },
  {
    id: 4,
    imageSrc: "/suggestionForYou/blue-nissan.png",
    heading: "2015 Hyundai Elantra",
    totalamount: "$ 13,420",
    downpayment: "$2,420",
    monthlypayment: "$480",
    variant: "LS",
    route: "product-detail",
  },
];

const SuggestionForYou = () => {
  return (
    <>
      <div className="max-w-[940px] mx-auto pt-[28px] xl:pt-[38px] 3xl:pt-[48px]">
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
            className="flex-grow max-w-[324px] mx-auto md:mx-0 w-full md:max-w-[47%] lg:max-w-[31%] 
               2xl:max-w-[23%]  flex-[0_0_auto] rounded-[12px]  
              first-of-type:shadow-[0px_36px_72px_-18px_rgba(10,24,53,0.25)] p-[1px] mb-[1.875rem] 2xl:mb-[3.5rem]
              first-of-type:bg-btn-primary-gradient shadow-[0px_18px_36px_-18px_rgba(10,24,53,0.25)] bg-bg-none
              [&>span]:font-bold 
              "
          >
            <div className="h-full bg-white rounded-[12px]">
              <Link className="block" href={item.route}>
                <div
                  className="rounded-tr-[12px]  max-w-[80%] mx-auto  flex justify-center items-center rounded-tl-[12px] 
                px-[4px] pt-[24px] pb-[14px] overflow-hidden bg-white"
                >
                  <div className="relative max-w-[254px]">
                    <Image
                      src={"/suggestionForYou/bg-car-cloud-shape.png"}
                      width={246}
                      height={246}
                      className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
                      alt={item.heading || ""}
                    />
                    <Image
                      src={item.imageSrc ? item.imageSrc : ""}
                      width={260}
                      height={126}
                      className="mt-[-68px] xl:mt-[-66px] 2xl:mt-[-68px] 3xl:mt-[-66px] max-w-[260px] max-h-[126px]"
                      alt={item.heading || ""}
                    />
                  </div>
                </div>
                <div
                  className="py-[0.9375rem] xl:py-[1.5rem] px-[0.938rem]   xl:px-[1.5rem]
                 3xl:px-[1.875rem] bg-white rounded-br-[12px] rounded-bl-[12px] flex flex-col justify-between"
                >
                  <h3 className="heading4 truncate text-[18px]">
                    {item?.heading}
                  </h3>
                  <div className="flex items-center gap-[8px] mb-4 md:mb-[20px] lg:mb-6 ">
                    <span
                      className="inline-flex items-center justify-center p-[5px_10px] uppercase
                   bg-dark-7 tracking-[1.08px] text-dark-3 rounded-[100px] text-[12px] font-bold "
                    >
                      {" "}
                      {item?.variant}
                    </span>
                    <span className="text-[14px] text-dark-3 inline-block leading-[150%]">
                      {" "}
                      {item?.totalamount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-[8px] text-[14px] leading-[150%]">
                    <div className="flex items-center gap-[8px] w-[49.5%]">
                      <span>
                        <ArrowDown className="w-[24px] h-[24px]" />
                      </span>
                      <span className="inline-block text-dark font-semibold">
                        {item?.downpayment}
                      </span>
                    </div>
                    <div
                      className="text-dark w-[49.5%] font-semibold pl-[12px] 
                    border-l border-solid border-dark flex justify-end"
                    >
                      {item?.monthlypayment}/mo
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center pb-[30px]">
        <Button
          variant="primary"
          label="Shop All Cars"
          className="min-w-[244px] xl:min-w-[290px] mb-[24px]"
          children={
            <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
          }
        />
        <div className="flex items-center gap-[8px] mb-[24px]">
          <QuestionMarkRounded className="w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px]" />{" "}
          <span>See financing details</span>
        </div>
        <span className="block max-w-[690px] mx-auto text-dark-3 text-[14px] text-center">
          *Vehicle prices exclude taxes and finance charges and, subject to
          state law, exclude doc fees up to $299 and other applicable fees.
          Vehicles available for sale at the identified location only.
        </span>
      </div>
    </>
  );
};

export default SuggestionForYou;
