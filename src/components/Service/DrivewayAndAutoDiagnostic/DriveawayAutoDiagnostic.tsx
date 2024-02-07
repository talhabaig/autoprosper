import React from "react";
import Image from "next/image";
import Button from "../../Common/Button/Button";
import { ArrowRight, TickTrue } from "../../Icons/Icons";
import { FindOrMakeCard } from "../../../assests/interfaces/Home/index";
import Link from "next/link";

const cardData = [
  {
    id: 1,
    imageSrc: "/home/discover-ideal.png",
    heading: "Driveway customer care package",
    contentLabel: "Best Value",
    description:
      "Drive with confidence with our package of standard auto services.",
    buttonLabel: "Book Now",
    buttonVariant: "primary",
    buttonIcon: (
      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
    route: "find-or-make",
    tickIcon: <TickTrue className="w-[24px] h-[24px]" />,
    paragraph1: "Premium synthetic oil change",
    paragraph2: "Tire rotation and balance",
    paragraph3: "Brake inspection service",
    paragraph4: "Front wiper blades replacement",
    totalNumber: 199,
  },
  {
    id: 2,
    imageSrc: "/home/special-order.png",
    heading: "Auto diagnostic service",
    contentLabel: "Special",
    description: "Check engine light on? We got you.",
    buttonLabel: "Book Now",
    buttonVariant: "primary",
    buttonIcon: (
      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
    route: "customize",
    // buttonVariant: "transparent",
    // buttonIcon:    <ArrowRight  className="fill-gray w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />,
    paragraph1: "Identify the cause of the warning indicator light",
    paragraph2: "Run system diagnostics to identify the needed repair",
    paragraph3: "Provide an estimate to resolve the issue",
    paragraph4: "Front wiper blades replacement",
    totalNumber: 199,
  },
];

const DriveawayAutoDiagnostic = () => {
  return (
    <section className="py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem] bg-dark-7">
      <div className="container">
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
              <div className="h-full bg-white rounded-[12px] p-[24px_16px]">
                <div className=" bg-white rounded-br-[12px] rounded-bl-[12px] text-center">
                  <div className="rounded-tr-[12px] max-w-[699px] mb-[5px] rounded-tl-[12px] overflow-hidden bg-white">
                    <span
                      className="inline-block p-[6px_12px] lg:p-[5px_10px] leading-[1.3] rounded-[100px] tracking-[1.26px] 
                     font-bold text-dark-3 uppercase text-[14px] lg:text-[0.75rem]  bg-dark-7"
                    >
                      {item.contentLabel}
                    </span>
                  </div>
                  <div className="mb-[24px] max-w-[280px] xl:max-w-[370px] 2xl:max-w-full mx-auto">
                    <h3
                      className="heading3 text-2xl xl:text-[32px]   
                  mb-[12px] lg:mb-[0.938rem] 3xl:mb-[1.125rem]"
                    >
                      {item.heading}
                    </h3>
                    <p className="paragraph-large  lg:mb-[1.563rem] 3xl:mb-[2rem]">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-[44px] block font-bold leading-[130%] text-dark mb-[24px]">
                    ${item.totalNumber}
                  </span>
                  <div className="mb-6 flex justify-center items-center">
                    <Link href={item.route}>
                      <Button
                        variant="primary"
                        label={item.buttonLabel}
                        children={item.buttonIcon}
                      />
                    </Link>
                  </div>
                </div>
                <div className="rounded-xl p-[16px_12px] bg-green-light ">
                  
                  <div className="flex gap-[10px] mb-[12px]">
                    <TickTrue className="w-[24px] h-[24px]" />
                    <span className="mb-0 text-[14px] font-normal leading-5 2xl:text-[18px] text-dark" >
                      {item.paragraph1}
                    </span>
                  </div>
                  <div className="flex gap-[10px] mb-[12px]">
                    <TickTrue className="w-[24px] h-[24px]" />
                    <span className="mb-0 text-[14px] font-normal leading-5 2xl:text-[18px] text-dark">
                      {item.paragraph2}
                    </span>
                  </div>
                  <div className="flex gap-[10px] mb-[12px]">
                    <TickTrue className="w-[24px] h-[24px]" />
                    <span className="mb-0 text-[14px] font-normal leading-5 2xl:text-[18px] text-dark">
                      {item.paragraph3}
                    </span>
                  </div>
                  <div className="flex gap-[10px]">
                    <TickTrue className="w-[24px] h-[24px]" />
                    <p className="mb-0 text-[14px] font-normal leading-5 2xl:text-[18px] text-dark">
                      {item.paragraph4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriveawayAutoDiagnostic;
