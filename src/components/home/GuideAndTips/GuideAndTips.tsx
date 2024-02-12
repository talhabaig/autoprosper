"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "../../Icons/Icons";
import { FindOrMakeCard } from "../../../assests/interfaces/Home/index";
import styles from "./GuideAndTips.module.css";
import Button from "../../Common/Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData: FindOrMakeCard[] = [
  {
    id: 1,
    imageSrc: "/home/pre-qualification.png",
    heading: "2024 Nissan Kicks®",
    description:
      "Knowledgeable  ensuring seamless experience from start to finish.",
    buttonLabel: "Read more",
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
    buttonLabel: "Read more",
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
    buttonLabel: "Read more",
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
    buttonLabel: "Read more",
    buttonVariant: "transparent",
    buttonIcon: (
      <ArrowRight className="fill-gray w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
  },
];

const GuideAndTips = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem]  bg-dark-7 overflow-x-hidden">
      <div className="container">
        <div
          data-aos="fade-up"
          className="max-w-[360px] mx-auto text-center md:max-w-[510px] lg:max-w-[560px] 2xl:max-w-[700px]"
        >
          <h2 className="heading2 mb-[0.5rem] lg:mb-[1.125rem]">
            Guide & Tips
          </h2>
          <p className="paragraph-large mb-[1.5rem] md:mb-[1.875rem] lg:mb-[2.5rem] 2xl:mb-[3rem]  ">
            Everything you need to know about buying, selling, & maintaining
            your car.
          </p>
        </div>
        <div
          className={`flex md:justify-between md:items-stretch gap-[0.75rem]
          lg:gap-[1.125rem] 3xl:gap-[1.5rem] overflow-x-auto  ${styles.customScrollBar}`}
        >
          {cardData.map((item, index) => (
            <div
              key={item.id}
              className="flex-grow max-w-[240px] w-full xl:w-[22%] xl:max-w-full flex-[0_0_auto] rounded-[12px]  
              first-of-type:shadow-[0px_30px_20px_-18px_rgba(0,27,68,0.25)] p-[1px] mb-[1.875rem] 2xl:mb-12
              first-of-type:bg-btn-primary-gradient shadow-[0px_18px_36px_-18px_rgba(0,27,68,0.25)] bg-bg-none
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
                  className="py-[0.9375rem] xl:py-[1.5rem] px-[1.125rem]   xl:px-[1.5rem]
                 3xl:p-[1.5rem] bg-white rounded-br-[12px] rounded-bl-[12px] flex flex-col justify-between"
                >
                  <div>
                    <h3 className="heading4 truncate">{item.heading}</h3>
                    <p
                      className={`max-h-[80px] min-h-[80px] text-[0.75rem] 
                       leading-[21px] xl:text-[0.938rem] xl:leading-[25px] text-dark-3 mb-[0.625rem]
                       xl:max-h-[130px] xl:min-h-[130px]  ${styles.paragraphWrappeer}`}
                    >
                      {item.description}
                    </p>
                  </div>
                  <span
                    className={`${
                      index === 0 ? " text-primary-text" : ""
                    } text-[0.625rem] font-extrabold text-dark-4 block tracking-[0.9px] 
                    xl:text-[0.875rem] xl:tracking-[1.08px] underline cursor-pointer hover:text-primary-text`}
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
            label="Read more article"
            className=""
            children={
              <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] hidden md:block lg:w-[1.25rem] lg:h-[1.25rem]" />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default GuideAndTips;
