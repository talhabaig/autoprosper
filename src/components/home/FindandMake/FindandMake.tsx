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
      <ArrowRight  className="fill-primary-text w-[1.8rem] h-[1.8rem] lg:w-[2rem] lg:h-[2rem]" />
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
    buttonIcon:    <ArrowRight  className="fill-gray w-[1.8rem] h-[1.8rem] lg:w-[2rem] lg:h-[2rem]" />,
  },
];

const FindandMake = () => {
  return (
    <section className="py-[6rem] 2xl:py-[8rem] 3xl:pt-[11rem] 3xl:pb-[9.6rem] bg-light-gray">
      <div className="container">
        <div className="max-w-[360px] mx-auto text-center md:max-w-[480px] lg:max-w-[540px] 2xl:max-w-[700px]">
          <h2 className="heading2 mb-[1rem] lg:mb-[1.8rem]">Find or make</h2>
          <p className="paragraph-large mb-[3rem] lg:mb-[40px] 3xl:mb-[5rem] text-primary-text ">
            Whether seeking a rare find or customizing your dream car, trust us
            for a personalized, tailored automotive experience.
          </p>
        </div>
        <div className="md:flex md:justify-between md:items-stretch md:gap-[1rem] lg:gap-[2rem] 3xl:gap-[3rem]">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="flex-grow md:w-[48%] 3xl:w-[49%] rounded-[12px] mb-[3rem] 
              shadow-[0px_36px_72px_-18px_rgba(10,24,53,0.25)] p-[1px] bg-btn-primary-gradient
              last-of-type:shadow-[0px_18px_36px_-18px_rgba(10,24,53,0.25)] last-of-type:bg-bg-none"
            >
              <div className="h-full bg-white rounded-[12px]">
                <div className="rounded-tr-[12px] rounded-tl-[12px] px-[4px] pt-[4px] overflow-hidden bg-white">
                  <Image
                    src={item.imageSrc ? item.imageSrc : ""}
                    width={682}
                    height={400}
                    className="rounded-tr-[12px] rounded-tl-[12px]"
                    alt={item.heading || ""}
                  />
                </div>
                <div className="py-[2rem] lg:py-[3rem] 3xl:py-[4rem] px-[1.5rem] lg:px-[2.2rem] 3xl:px-[3rem] bg-white rounded-br-[12px] rounded-bl-[12px]">
                  <h3 className="heading3 text-left mb-[1rem] lg:mb-[1.5rem] 3xl:mb-[2rem]">
                    {item.heading}
                  </h3>
                  <p className="paragraph-large mb-[2rem] lg:mb-[2.5rem] 3xl:mb-[3rem]">
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
