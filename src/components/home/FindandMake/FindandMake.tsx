"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Button from "../../Common/Button/Button";
import { ArrowRight } from "../../Icons/Icons";
import { FindOrMakeCard } from "../../../assests/interfaces/Home/index";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

interface FindOrMakeCardWithRoute extends FindOrMakeCard {
  route: string;
}

const cardData: FindOrMakeCardWithRoute[] = [
  {
    id: 1,
    imageSrc: "/home/discover-ideal.png",
    heading: "Discover ideal match",
    description:
      "Undecided on your ideal vehicle? Take a quick quiz to discover the perfect match tailored just for you! Let's begin!",
    buttonLabel: "Start Quiz",
    buttonVariant: "primary",
    buttonIcon: (
      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
    route: "find-or-make",
  },
  {
    id: 2,
    imageSrc: "/home/special-order.png",
    heading: "Special order and customize",
    description:
      "Design your dream car, and watch as we bring it to life. Your perfect vehicle is just a few steps away!",
    buttonLabel: "Start Order",
    buttonVariant: "primary",
    buttonIcon: (
      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
    route: "customize",
    // buttonVariant: "transparent",
    // buttonIcon:    <ArrowRight  className="fill-gray w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />,
  },
];

const FindandMake = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem] bg-dark-7">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="max-w-[360px] mx-auto text-center md:max-w-[480px] lg:max-w-[540px] 2xl:max-w-[700px]"
        >
          <h2 className="heading2 mb-2 lg:mb-[1.125rem]">Find or make</h2>
          <p className="paragraph-large mb-[1.5rem] md:mb-[1.875rem] lg:mb-[2.5rem] 2xl:mb-[3rem] ">
            Whether seeking a rare find or customizing your dream car, trust us
            for a personalized, tailored automotive experience.
          </p>
        </div>
        <div className="md:flex md:justify-between md:items-stretch md:gap-[0.625rem] lg:gap-[1.125rem] 3xl:gap-[1.5rem]">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="flex-grow md:w-[48%] 3xl:w-[49%] rounded-[12px] mb-[0.75rem] 
              shadow-[0px_36px_72px_-18px_rgba(10,24,53,0.25)] p-[1px] bg-btn-primary-gradient
              last-of-type:shadow-[0px_18px_36px_-18px_rgba(10,24,53,0.25)] last-of-type:bg-bg-none
              lg:last-of-type:shadow-[0px_36px_72px_-18px_rgba(10,24,53,0.25)] 
              lg:last-of-type:bg-btn-primary-gradient last-of-type:mb-0 md:mb-0 "
            >
              <div className="h-full bg-white rounded-[12px]">
                <div               
                  className="rounded-tr-[12px] max-w-[699px]  rounded-tl-[12px] px-[4px] pt-[4px] 
                  overflow-hidden bg-white"
                >
                  <Image
                    src={item.imageSrc ? item.imageSrc : ""}
                    width={682}
                    height={400}
                    className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
                    alt={item.heading || ""}
                  />
                </div>
                <div className="py-[1.125rem] lg:py-[1.875rem] 3xl:py-[2rem] px-[0.938rem] lg:px-[1.375rem] 3xl:px-[1.875rem] bg-white rounded-br-[12px] rounded-bl-[12px]">
                  <h3 className="heading3 text-left mb-[0.5rem] lg:mb-[0.938rem] 3xl:mb-[1.125rem]">
                    {item.heading}
                  </h3>
                  <p className="paragraph-large mb-[1.125rem] lg:mb-[1.563rem] 3xl:mb-[2rem]">
                    {item.description}
                  </p>
                  <Link href={item.route}>
                    <Button
                      variant={item.buttonVariant}
                      label={item.buttonLabel}
                      children={item.buttonIcon}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindandMake;
