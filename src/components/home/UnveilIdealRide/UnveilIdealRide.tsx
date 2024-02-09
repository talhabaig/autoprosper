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
import { CarouselData } from "@/components/ui/CarouselCard/type";
import CarouselCard from "@/components/ui/CarouselCard";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", (e) => {
      setSelected(e.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <Section className="bg-dark-7 !flex-col overflow-x-hidden">
      <div
        data-aos="fade-right"
        className="w-full md:max-w-[690px] px-[15px] md:px-0 flex flex-col items-center mx-auto text-center"
      >
        <SectionHeader>Unveil Your Ideal Ride</SectionHeader>
        <SectionDesc>
          Our team, fueled by passion and expertise, simplifies the car buying
          journey. We're your knowledgeable partners, ensuring a seamless
          experience from start to finish.
        </SectionDesc>
      </div>

      <div className="lg:px-[76px] w-full">
        <Carousel
          setApi={setApi}
          className="w-full flex flex-col lg:block lg:max-w-[1368px] lg:mx-auto"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {carouselData.map((data, index) => (
              <CarouselItem
                key={"carousel" + index}
                className="basis-full md:basis-1/2  4xl:max-w-[456px] 4xl:max-h-[462px]"
              >
                <CarouselCard data={data} active={selected === index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white hidden lg:flex mx-auto w-[56px] h-[56px]" />
          <CarouselNext
            variant="gradient"
            className="hidden lg:flex mx-auto w-[56px] h-[56px]"
          />
          <div className="flex mx-auto mt-[24px] md:mt-[48px] gap-[12px] lg:hidden">
            <CarouselPrevious className="bg-white w-[46px] h-[46px]" />
            <CarouselNext variant="gradient" className="w-[46px] h-[46px]" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
};

export default UnveilIdealRide;
