import React from "react";
import Image from "next/image";
import Button from "../../Common/Button/Button";
import { ArrowRight } from "../../Icons/Icons";
import { FindOrMakeCard } from "../../../assests/interfaces/Home/index";

const cardData: FindOrMakeCard[] = [
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
  },
  {
    id: 2,
    imageSrc: "/home/special-order.png",
    heading: "Special order and customize",
    description:
      "Design your dream car, and watch as we bring it to life. Your perfect vehicle is just a few steps away!",
    buttonLabel: "Start Order",
    buttonVariant: "transparent",
    buttonIcon:    <ArrowRight  className="fill-gray w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />,
  },
];

const FindandMake = () => {
  return (
    <section className="py-[3.75rem] 2xl:py-[5rem] 3xl:pt-[6.875rem] 3xl:pb-[6rem] bg-light-gray">
      <div className="container">
        <div className="max-w-[360px] mx-auto text-center md:max-w-[480px] lg:max-w-[540px] 2xl:max-w-[700px]">
          <h2 className="heading2 mb-[0.625rem] lg:mb-[1.125rem]">Find or make</h2>
          <p className="paragraph-large mb-[1.875rem] lg:mb-[2.5rem] 3xl:mb-[3.125rem] text-primary-text ">
            Whether seeking a rare find or customizing your dream car, trust us
            for a personalized, tailored automotive experience.
          </p>
        </div>
        <div className="md:flex md:justify-between md:items-stretch md:gap-[0.625rem] lg:gap-[1.125rem] 3xl:gap-[1.875rem]">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="flex-grow md:w-[48%] 3xl:w-[49%] rounded-[12px] mb-[1.875rem] 
              shadow-[0px_36px_72px_-18px_rgba(10,24,53,0.25)] p-[1px] bg-btn-primary-gradient
              last-of-type:shadow-[0px_18px_36px_-18px_rgba(10,24,53,0.25)] last-of-type:bg-bg-none"
            >
              <div className="h-full bg-white rounded-[12px]">
                <div className="rounded-tr-[12px] max-w-[680px]  rounded-tl-[12px] px-[4px] pt-[4px] overflow-hidden bg-white">
                  <Image
                    src={item.imageSrc ? item.imageSrc : ""}
                    width={682}
                    height={400}
                    className="rounded-tr-[12px] rounded-tl-[12px] min-w-full"
                    alt={item.heading || ""}
                  />
                </div>
                <div className="py-[1.25rem] lg:py-[1.875rem] 3xl:py-[2.5rem] px-[0.938rem] lg:px-[1.375rem] 3xl:px-[1.875rem] bg-white rounded-br-[12px] rounded-bl-[12px]">
                  <h3 className="heading3 text-left mb-[0.625rem] lg:mb-[0.938rem] 3xl:mb-[1.25rem]">
                    {item.heading}
                  </h3>
                  <p className="paragraph-large mb-[1.25rem] lg:mb-[1.563rem] 3xl:mb-[1.875rem]">
                    {item.description}
                  </p>
                  <Button
                    variant={item.buttonVariant}
                    label={item.buttonLabel}
                    children={item.buttonIcon}
                  />
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
