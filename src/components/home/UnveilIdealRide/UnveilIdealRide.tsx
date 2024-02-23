"use client";
import React from "react";

import { NissanIcon, ToyotaIcon, VwIcon } from "@/components/Icons/BrandIcons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";
import { Section, SectionDesc, SectionHeader } from "@/components/ui/section";
import { ReactElement, useEffect, useState } from "react";
import { CarouselData } from "@/components/ui/CarouselCard/type";
import CarouselCard from "@/components/ui/CarouselCard";
import AOS from "aos";
import "aos/dist/aos.css";

const carouselData: Array<CarouselData> = [
  {
    image: "/home/red-toyota.png",
    brandIcon: <ToyotaIcon />,
    brandName: "2024 Nissan Kicks®",
    description:
      "Knowledgeable partners, ensuring a seamless experience from start to finish.",
    location: "Garland, Texas",
  },
  {
    image: "/home/blue-nissan.png",
    brandIcon: <NissanIcon />,
    brandName: "2024 Nissan Kicks®",
    description:
      "Knowledgeable partners, ensuring a seamless experience from start to finish. ",
    location: "Garland, Texas",
  },
  {
    image: "/home/white-vw.png",
    brandIcon: <VwIcon />,
    brandName: "2024 Nissan Kicks®",
    description:
      "Knowledgeable partners, ensuring a seamless experience from start to finish.",
    location: "Garland, Texas",
  },
  {
    image: "/home/red-toyota.png",
    brandIcon: <ToyotaIcon />,
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
    // <Section className="bg-dark-7 !flex-col overflow-x-hidden">{/* </Section> */}
    <section className="py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem] bg-dark-7 overflow-x-hidden">
      <div className="container">
        <div 
         data-aos="fade-left"
        className="w-full max-w-[380px] md:max-w-[460px] 2xl:max-w-[630px] md:px-0 flex flex-col items-center mx-auto text-center ">
          <h2
            className={` heading2 mb-[0.75rem]  xl:mb-[1.125rem]  mx-auto md:!max-w-full md:mx-0 `}
          >
            Unveil Your Ideal Ride
          </h2>
          <p className="paragraph-large mb-[1.25rem] md:mb-[1.5rem] xl:mb-[2rem] 3xl:mb-[2.6rem] 4xl:mb-[3rem]">
            Our team, fueled by passion and expertise, simplifies the car buying
            journey. We're your knowledgeable partners, ensuring a seamless
            experience from start to finish.
          </p>
        </div>
        <Carousel
          setApi={setApi}
          className="w-full flex flex-col lg:block max-w-[790px] mx-auto 2xl:max-w-[1160px] 3xl:max-w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {carouselData.map((data, index) => (
              <CarouselItem
                key={"carousel" + index}
                className="max-w-[260px] w-full md:max-w-[300px] lg:max-w-[390px]  3xl:max-w-[480px] 4xl:max-h-[502px]
                flex-[0_0_auto]"
              >
                <CarouselCard data={data} active={selected === index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="bg-white hidden lg:flex mx-auto w-[56px] h-[56px] lg:left-[-8%]
          2xl:left-[-5.6%] 3xl:left-[-4%] 4xl:left-[-6%]"
          />
          <CarouselNext
            variant="gradient"
            className="hidden lg:flex mx-auto w-[56px] h-[56px] 3xl:right-[-4.6%] 4xl:right-[-6.6%]"
          />
          <div className="flex mx-auto mt-[24px] md:mt-[48px] gap-[12px] lg:hidden">
            <CarouselPrevious className="bg-white w-[46px] h-[46px]" />
            <CarouselNext variant="gradient" className="w-[46px] h-[46px]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default UnveilIdealRide;
