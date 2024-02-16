import React from "react";
import LocationIcon from "../../Icons/LocationIcon";
import { Card, GradientCard } from "@/components/ui/card";
import Image from "next/image";
import { CarouselProps } from "./type";
import { EllipseGradient } from "@/components/ui/ellipseGradient";
import style from "./carouselCard.module.css";

const CarouselCard: React.FC<CarouselProps> = ({ data, active }) => {
  if (active) {
    return (
      <div className=" !h-full ">
        <GradientCard className="w-full rounded-xl !h-full ">
          <CarouselCardContent data={data} />
        </GradientCard>
      </div>
    );
  } else {
    return <CarouselCardContent data={data} />;
  }
};

const CarouselCardContent: React.FC<CarouselProps> = ({ data }) => {
  return (
    <Card className="bg-white rounded-xl h-full border-0 p-[16px_18px_18px] lg:p-6 ">
      <div className="flex flex-col  gap-[18px] md:gap-[24px] h-full ">
        <div className="flex h-[128px] lg:h-[170px] 3xl:h-[240px] overflow-hidden relative justify-center">
          <img
            src={data.image}
            alt="car image"
            className="relative max-w-[228px] max-h-[78px] 
            lg:max-w-[280px] lg:max-h-[120px] self-end z-10 object-contain
            3xl:max-w-[370px] 3xl:max-h-[180px] h-full w-full"
          />
          <EllipseGradient
            className={`absolute max-w-[175px] top-[-32px]  z-0 md:max-w-[184px] lg:top-[-20px]
            lg:max-w-[260px] 3xl:max-w-[334px] 3xl:top-0`}
          />
          <span className="inline-block absolute top-0 left-0 [&>svg]:w-[26px] [&>svg]:h-[26px]
          lg:[&>svg]:w-[36px] lg:[&>svg]:h-[36px] 3xl:[&>svg]:w-[46px] 3xl:[&>svg]:h-[46px]">
            {data.brandIcon}
          </span>
        </div>
        <div className="flex flex-col gap-[8px] md:gap-[10px] lg:gap-[12px]">
          <h1 className="text-left font-normal text-dark text-[18px] leading-[130%] 
          lg:text-[24px] lg:leading-[34px]">
            {data.brandName}
          </h1>
          <p className="text-left !mb-[4px] font-normal text-[13px] leading-[150%]
           lg:text-[16px] lg:leading-[24px] text-dark-2">
            {data.description}
          </p>
          <div className="flex gap-[6px] md:gap-[8px] items-center">
            <LocationIcon className="w-[11.26px] h-[16px] md:w-[16.9px] md:h-[24px]" />
            <span className="font-normal text-[13px] leading-[18px] md:text-[15px] text-dark-3 md:leading-[25px]">
              {data.location}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CarouselCard;
