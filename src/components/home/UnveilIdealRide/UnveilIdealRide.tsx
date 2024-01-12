"use client";

import LocationIcon from "@/components/Icons/LocationIcon";
import { NissanIcon, ToyotaIcon, VwIcon } from "@/components/Icons/BrandIcons";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Section, SectionDesc, SectionHeader } from "@/components/ui/section";
import Image from "next/image";
import { ReactElement } from "react";
import { CarouselData } from '@/components/ui/CarouselCard/types'
import CarouselCard from "@/components/ui/CarouselCard";
 
const carouselData: Array<CarouselData> = [
  {
    image: "/home/red-toyota.png",
    brandIcon: <ToyotaIcon className="absolute left-0" />,
    brandName: "2024 Nissan Kicks®",
    description:
      "Knowledgeable partners, ensuring a seamless experience from start to finish.",
    location: "Garland, Texas",
  },
  {
    image: "/home/blue-nissan.png",
    brandIcon: <NissanIcon className="absolute left-0" />,
    brandName: "2024 Nissan Kicks®",
    description:
      "Knowledgeable partners, ensuring a seamless experience from start to finish.",
    location: "Garland, Texas",
  },
  {
    image: "/home/white-vw.png",
    brandIcon: <VwIcon className="absolute left-0" />,
    brandName: "2024 Nissan Kicks®",
    description:
      "Knowledgeable partners, ensuring a seamless experience from start to finish.",
    location: "Garland, Texas",
  },
  {
    image: "/home/red-toyota.png",
    brandIcon: <ToyotaIcon className="absolute left-0" />,
    brandName: "2024 Nissan Kicks®",
    description:
      "Knowledgeable partners, ensuring a seamless experience from start to finish.",
    location: "Garland, Texas",
  },
];

const UnveilIdealRide: React.FC = () => {
  return (
    <Section className="bg-light-gray py-[60px] md:py-[120px]">
      <div className="w-full md:max-w-[690px] px-[15px] md:px-0 flex flex-col items-center mx-auto text-center">
        <SectionHeader>Unveil Your Ideal Ride</SectionHeader>
        <SectionDesc>
          Our team, fueled by passion and expertise, simplifies the car buying
          journey. We're your knowledgeable partners, ensuring a seamless
          experience from start to finish.
        </SectionDesc>
      </div>
      <div className="pl-[15px] md:px-[76px] w-full md:max-w-[1576px]">
        <Carousel
          className="w-full flex flex-col md:block"
          opts={{
            loop: true,
            align: "start"
          }}
        >
          <CarouselContent>
            {carouselData.map((data, index) => (
              <CarouselItem key={"carousel" + index} className="basis-11/12 md:basis-1/3">
                <CarouselCard data={data} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white hidden md:flex"/>
          <CarouselNext variant="gradient" className="hidden md:flex" />
          <div className="flex mx-auto mt-[30px] gap-[10px] md:hidden">
            <CarouselPrevious className="bg-white"/>
            <CarouselNext variant="gradient" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
};

export default UnveilIdealRide;
