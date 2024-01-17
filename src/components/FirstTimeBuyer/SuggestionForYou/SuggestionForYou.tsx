import React from "react";
import Image from "next/image";
import { ArrowRight } from "../../Icons/Icons";
import { FindOrMakeCard } from "../../../assests/interfaces/Home/index";
import styles from "./GuideAndTips.module.css";
import Button from "../../Common/Button/Button";

const cardData: FindOrMakeCard[] = [
  {
    id: 1,
    imageSrc: "/home/pre-qualification.png",
    heading: "How Pre-Qualification",
    description:
      "Knowledgeable  ensuring seamless experience from start to finish.",
    buttonLabel: "Read More",
    buttonVariant: "primary",
    buttonIcon: (
      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
  },
  {
    id: 2,
    imageSrc: "/home/best-family-car.png",
    heading: "The best family cars",
    description:
      "Knowledgeable  ensuring seamless experience from start to finish.",
    buttonLabel: "Read More",
    buttonVariant: "transparent",
    buttonIcon: (
      <ArrowRight className="fill-gray w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
  },
  {
    id: 3,
    imageSrc: "/home/best-family-cars-2.png",
    heading: "The best family cars",
    description:
      "Undecided on your ideal vehicle? Take a quick quiz to discover the perfect match tailored just for you! Let's begin!",
    buttonLabel: "Read More",
    buttonVariant: "primary",
    buttonIcon: (
      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
  },
  {
    id: 4,
    imageSrc: "/home/pre-qualification-2.png",
    heading: "How Pre-Qualification",
    description:
      "Knowledgeable  ensuring seamless experience from start to finish.",
    buttonLabel: "Read More",
    buttonVariant: "transparent",
    buttonIcon: (
      <ArrowRight className="fill-gray w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
  },
];

const SuggestionForYou = () => {
  return (
    <>
      <div className="max-w-[940px] mx-auto my-[28px] xl:my-[38px] 3xl:my-[48px]">
        <h2 className="heading1">Suggestions for you</h2>
        <p
          className="text-dark-2 text-center mb-[24px] md:mb-[30px] lg:text-[1rem] xl:mb-[40px]
         xl:text-[1.25rem] xl:leading-[1.5]"
        >
          Explore these curated options we think will suit your preferences and
          needs.
        </p>
      </div>
      <div
        className={`flex md:justify-between md:items-stretch gap-[0.625rem]
          lg:gap-[1.125rem] 3xl:gap-[1.875rem] overflow-x-auto `}
      >
        {cardData.map((item, index) => (
          <div
            key={item.id}
            className="flex-grow max-w-[215px] w-full xl:w-[22%] xl:max-w-full flex-[0_0_auto] rounded-[12px]  
              first-of-type:shadow-[0px_36px_72px_-18px_rgba(10,24,53,0.25)] p-[1px] mb-[1.875rem] 2xl:mb-[3.5rem]
              first-of-type:bg-btn-primary-gradient shadow-[0px_18px_36px_-18px_rgba(10,24,53,0.25)] bg-bg-none
              [&>span]:font-bold 
              "
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
              <div
                className="py-[0.9375rem] xl:py-[1.875rem] px-[0.938rem]   xl:px-[1.875rem]
                 3xl:px-[1.875rem] bg-white rounded-br-[12px] rounded-bl-[12px] flex flex-col justify-between"
              >
                <div>
                  <h3 className="heading4 truncate">{item.heading}</h3>
                  <p
                    className={`max-h-[80px] min-h-[80px] text-[0.75rem] 
                       leading-[21px] xl:text-[0.938rem] xl:leading-[25px] text-dark-muted mb-[0.625rem]
                       xl:max-h-[130px] xl:min-h-[130px]  `}
                  >
                    {item.description}
                  </p>
                </div>
                <span
                  className={`${
                    index === 0 ? " text-primary-text" : ""
                  } text-[0.625rem] font-extrabold text-gray block tracking-[0.9px] 
                    xl:text-[0.75rem] xl:tracking-[1.08px] uppercase underline cursor-pointer hover:text-primary-text`}
                >
                  {item.buttonLabel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant="primary"
          label="Shop All Cars"
          className="min-w-[244px] xl:min-w-[290px] "
          children={
            <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
          }
        />
      </div>
    </>
  );
};

export default SuggestionForYou;
