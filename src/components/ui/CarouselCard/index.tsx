import React from 'react'
import LocationIcon from "../../Icons/LocationIcon";
import { Card, GradientCard } from "@/components/ui/card";
import Image from 'next/image';
import { CarouselProps } from "./type";
import { EllipseGradient } from "@/components/ui/ellipseGradient";
import style from './carouselCard.module.css'


const CarouselCard: React.FC<CarouselProps> = ({ data, active }) => {
  if (active) {
    return (
      <div className="md:mb-[73px]">
        <GradientCard className="w-full rounded-xl">
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
    <Card className="bg-white rounded-xl h-auto border-0 p-[18px] md:p-6">
      <div className="flex flex-col justify-center gap-[12px] md:gap-[0px]">
        <div className="flex h-[175px] md:h-[286px] relative justify-center">
          <img
            src={data.image}
            alt="car image"
            className="relative w-[228px] h-[78px] md:w-[348px] md:h-[174px] self-end md:self-center z-10 object-contain"
          />
          <EllipseGradient className={`absolute max-w-[228px] md:max-w-none z-0 top-5 lg:-top-[1%] ${style.imageWrapper}`}/>
          {data.brandIcon}
        </div>
        <div className="flex flex-col gap-[8px] md:gap-[12px]">
          <h1 className="text-left font-normal text-dark text-[18px] leading-[23.4px] md:text-[24px] md:leading-[34px]">
            {data.brandName}
          </h1>
          <p className="text-left p-0 font-normal text-[12px] leading-[18px] md:text-[16px] md:leading-[24px] text-dark-2">
            {data.description}
          </p>
          <div className="flex gap-[4px] md:gap-[8px] items-center">
            <LocationIcon className="w-[11.26px] h-[16px] md:w-[16.9px] md:h-[24px]" />
            <span className="font-normal text-[12px] leading-[18px] md:text-[15px] text-dark-3 md:leading-[25px]">
              {data.location}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CarouselCard;
