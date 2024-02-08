"use client";
import React, { useState, useEffect } from "react";

import { ReviewData } from "../../../assests/interfaces/Home/index";
import { RatingStar, ArrowRight, GoogleLogo } from "@/components/Icons/Icons";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const cardData: ReviewData[] = [
  {
    id: 1,
    imageSrc: "/home/discover-ideal.png",
    heading: "The work done was top-notch",
    description:
      "I had a great experience with Driveway! They make contact-less car care super easy and the work done was top-notch. Good updates on what was going on with my car throughout and the time I saved was invaluable.",
    icon: <RatingStar className="w-[24px] h-[24px]" />,
    socialMediaPlatform: <GoogleLogo className="w-[20px] h-[20px]" />,
    name: "Blue Y.",
  },
  {
    id: 2,
    imageSrc: "/home/special-order.png",
    heading: "The work done was top-notch",
    description:
      "I had a great experience with Driveway! They make contact-less car care super easy and the work done was top-notch. Good updates on what was going on with my car throughout and the time I saved was invaluable.",
    icon: <RatingStar className="w-[24px] h-[24px]" />,
    socialMediaPlatform: <GoogleLogo className="w-[20px] h-[20px]" />,
    name: "Blue Y.",
  },
  {
    id: 3,
    imageSrc: "/home/special-order.png",
    heading: "The work done was top-notch",
    description:
      "I had a great experience with Driveway! They make contact-less car care super easy and the work done was top-notch. Good updates on what was going on with my car throughout and the time I saved was invaluable. ",
    icon: <RatingStar className="w-[24px] h-[24px]" />,
    socialMediaPlatform: <GoogleLogo className="w-[20px] h-[20px]" />,
    name: "Blue Y.",
  },
  {
    id: 4,
    imageSrc: "/home/special-order.png",
    heading: "The work done was top-notch",
    description:
      "I had a great experience with Driveway! They make contact-less car care super easy and the work done was top-notch. Good updates on what was going on with my car throughout and the time I saved was invaluable.  ",
    icon: <RatingStar className="w-[24px] h-[24px]" />,
    socialMediaPlatform: <GoogleLogo className="w-[20px] h-[20px]" />,
    name: "Blue Y.",
  },
];
const ClientReviewSlider = () => {
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

  return (
    <section className="bg-dark-7 pt-[3rem] pb-[6rem]   2xl:py-[4rem] 3xl:py-[6rem]">
      <div className="container">
        <div
          className="max-w-[360px] mx-auto text-center px-[18px] sm:px-0 md:max-w-[380px] lg:max-w-[422px]
          xl:max-w-[480px] 2xl:max-w-[550px]"
        >
          <h2 className="heading2 mb-[0.5rem] lg:mb-[1.125rem] ">
            What our clients says.
          </h2>
          <p className="paragraph-large mb-[1.5rem] md:mb-[1.875rem] lg:mb-[2.5rem] 2xl:mb-[3rem]   ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <Carousel
          setApi={setApi}
          className="w-full shadow-[0px_36px_72px_-18px_rgba(0,27,68,0.25)]"
        >
          <CarouselContent className="-ml-1 gap-[10px]  md:gap-[1.25rem] xl:gap-[24px] bg-dark-7">
            {cardData.map((item, index) => (
              <CarouselItem
                key={"carousel" + index}
                className={`ml-[5px] p-[1px] md:p-[1px] basis-[282px] md:basis-[47.8%] xl:basis-[31.7%] md:items-stretch 
                 rounded-[12px]  shadow-[0px_36px_72px_-18px_rgba(0,27,68,0.25)] ${
                   selected === index && "bg-btn-primary-gradient"
                 } `}
              >
                <div className="p-1 h-full bg-white rounded-[12px]">
                  <div
                    className="flex flex-col justify-center items-start text-left 
                   rounded-[12px] p-[16px] md:p-[18px] lg:p-[20px] xl:p-[22px] 2xl:p-[24px] bg-white"
                  >
                    <div className="mb-[12px]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span className="inline-block" key={index}>
                          {item.icon}
                        </span>
                      ))}
                    </div>
                    <h3 className="heading4 text-left font-bold mb-[12px]">
                      “ {item.heading}
                    </h3>
                    <p className="text-dark-3 text-[0.875rem] md:text-[16px] leading-[150%] mb-[24px]">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-[8px]">
                      <span>{item.socialMediaPlatform}</span>
                      <span className="inline-block text-dark text-[14px] font-bold leading-[21px]">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="bg-white w-[46px] h-[46px]  absolute bottom-[-68px] md:bottom-[-88px] left-[30%]
            md:left-[40%] top-[unset] lg:top-1/2 lg:left-[-30px] 2xl:left-[-40px]"
          />
          <CarouselNext
            variant="gradient"
            className="w-[46px] h-[46px]   absolute bottom-[-68px] md:bottom-[-88px] left-[unset] 
            right-[30%]  md:right-[40%] top-[unset] lg:top-1/2 lg:right-[-40px] 2xl:right-[-50px]"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default ClientReviewSlider;
