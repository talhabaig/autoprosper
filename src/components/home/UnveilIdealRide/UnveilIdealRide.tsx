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
  CarouselApi,
} from "@/components/ui/carousel";
import { Section, SectionDesc, SectionHeader } from "@/components/ui/section";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { CarouselData } from '@/components/ui/CarouselCard/type'
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
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0);
 
  useEffect(() => {
    if (!api) {
      return
    }
 
    api.on("select", (e) => {
      setSelected(e.selectedScrollSnap())
    })
  }, [api])

  return (
    <Section className="bg-dark-7 !flex-col">
      <div className="w-full md:max-w-[690px] px-[15px] md:px-0 flex flex-col items-center mx-auto text-center">
        <SectionHeader>Unveil Your Ideal Ride</SectionHeader>
        <SectionDesc>
          Our team, fueled by passion and expertise, simplifies the car buying
          journey. We're your knowledgeable partners, ensuring a seamless
          experience from start to finish.
        </SectionDesc>
      </div>
      <div className="md:px-[76px] w-full">
        <Carousel
        setApi={setApi}
          className="w-full flex flex-col md:block lg:max-w-[1368px] lg:mx-auto"
          opts={{
            loop: true,
            align: "start"
          }}
        >
          <CarouselContent>
            {carouselData.map((data, index) => (
              <CarouselItem key={"carousel" + index} className="basis-3/4  lg:max-w-[456px] lg:max-h-[462px]">
                <CarouselCard data={data} active={selected === index}/>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white hidden md:flex"/>
          <CarouselNext variant="gradient" className="hidden md:flex mx-auto" />
          <div className="flex mx-auto mt-[24px] gap-[12px] md:hidden">
            <CarouselPrevious className="bg-white w-[46px] h-[46px]"/>
            <CarouselNext variant="gradient" className="w-[46px] h-[46px]" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
};

export default UnveilIdealRide;
