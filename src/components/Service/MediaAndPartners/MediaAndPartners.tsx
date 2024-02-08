import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  UberLogo,
  ToyotaLogo,
  FedExLogo,
  AcuraLogo,
  BollingerLogo,
} from "../../Icons/Icons";
import { FindOrMakeCard } from "../../../assests/interfaces/Home/index";

import Button from "../../Common/Button/Button";

const cardData = [
  {
    id: 1,
    icon: <UberLogo className="W-[34px] h-[18px] 2xl:w-[81px] 2xl:h-[28px]" />,
  },
  {
    id: 2,
    icon: <ToyotaLogo className="w-[80px] h-[14px] 2xl:w-[160px] 2xl:h-[27px]" />,
  },
  {
    id: 3,
    icon: <FedExLogo className="w-[65px] h-[18px] 2xl:w-[101px] 2xl:h-[28px]" />,
  },
  {
    id: 4,
    icon: <AcuraLogo className="w-[83px] h-[13px] 2xl:w-[193px] 2xl:h-[28px]" />,
  },
  {
    id: 5,
    icon: <BollingerLogo className="w-[73px] h-[28px] 2xl:w-[139px] 2xl:h-[52px]" />,
  },
];

const MediaAndPartners = () => {
  return (
    <section className="py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem]  bg-white">
      <div className="container">
        <div className="max-w-[360px] mx-auto text-center md:max-w-[380px] lg:max-w-[422px]   xl:max-w-[480px] 2xl:max-w-[550px]">
          <h2 className="heading2 mb-[0.5rem] lg:mb-[1.125rem]">
            Press & Partners
          </h2>
          <p className="paragraph-large mb-[1.5rem] md:mb-[1.875rem] lg:mb-[2.5rem] 2xl:mb-[3rem]  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div
          className={`flex md:justify-between md:items-stretch gap-[0.75rem]
          lg:gap-[1.125rem] 3xl:gap-[1.5rem] overflow-x-auto [&>*:nth-child(2)]:bg-btn-primary-gradient
          [&>*:nth-child(2)]:border-[#fff]  
          lg:[&>*:nth-child(2)]:bg-bg-none lg:[&>*:nth-child(2)]:border-dark-5  
          lg:[&>*:nth-child(3)]:bg-btn-primary-gradient  lg:[&>*:nth-child(3)]:border-[#fff]
          `}
        >
          {cardData.map((item, index) => (
            <div
              key={item.id}
              className="flex-grow max-w-[120px]  w-full lg:max-w-[18%] 
              flex-[0_0_auto] rounded-[16px] bg-bg-none [&>span]:font-bold 
              p-[1px]  border border-solid border-dark-5  mb-[14px]"
            >
              <div
                className="overflow-hidden bg-white rounded-[16px] flex items-center justify-center
               h-[72px] lg:h-[92px]  2xl:h-[120px]"
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaAndPartners;
