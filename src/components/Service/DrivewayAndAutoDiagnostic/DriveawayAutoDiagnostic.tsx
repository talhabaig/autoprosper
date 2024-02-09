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
    totalNumber: 199,
    drivewayCustomerPoints: [
      "Premium synthetic oil change",
      "Tire rotation and balance",
      "Brake inspection service",
      "Front wiper blades replacement",
    ],
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
    drivewayCustomerPoints: [
      "Identify the cause of the warning indicator light",
      "Run system diagnostics to identify the needed repair",
      "Provide an estimate to resolve the issue",
      "Front wiper blades replacement",
    ],
    totalNumber: 199,
  },
];

const DriveawayAutoDiagnostic = () => {
  return (
    <section className="py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem] bg-[#FFF]">
      <div className="container">
        <div className="md:flex md:justify-between md:items-stretch md:gap-[12px] lg:gap-[1.125rem] 3xl:gap-[1.5rem]">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="flex-grow md:w-[48%] 3xl:w-[49%] rounded-[12px] mb-[0.75rem] 
              shadow-[0px_36px_72px_-18px_rgba(0,27,68,0.25)] p-[1px]
              last-of-type:shadow-[0px_36px_72px_-18px_rgba(0,27,68,0.25)]
              md:last-of-type:shadow-[0px_36px_72px_-18px_rgba(0,27,68,0.25)] 
              md:last-of-type:bg-btn-primary-gradient last-of-type:mb-0 md:mb-0 "
            >
              <div className="h-full bg-white rounded-[12px] p-[24px_16px]">
                <div className=" bg-white rounded-br-[12px] rounded-bl-[12px] text-center">
                  <div className="rounded-tr-[12px] max-w-[699px] mb-[5px] rounded-tl-[12px] overflow-hidden bg-white">
                    <span
                      className="inline-block p-[6px_12px] lg:p-[5px_10px] leading-normal rounded-[100px] tracking-[1.26px] 
                     font-bold text-dark-3 uppercase text-[14px] lg:text-[0.75rem]  bg-dark-7"
                    >
                      {item.contentLabel}
                    </span>
                  </div>
                  <div className="mb-[24px] ">
                    <h3 className="heading3 text-[24px] xl:text-[28px] 3xl:text-[32px] leading-[31px] 3xl:leading-[41px] mx-auto mb-[12px] max-w-[275px] md:max-w-[260px] lg:max-w-full">
                      {item.heading}
                    </h3>
                    <p className="paragraph-large mb-0 leading-[150%] max-w-[280px] xl:max-w-[370px] 2xl:max-w-full mx-auto">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-[44px] block font-bold leading-[49px] text-dark mb-[24px]">
                    <span className="text-[24px] font-medium ">$</span>
                    {item.totalNumber}
                  </span>
                  <div className="mb-6 flex justify-center items-center">
                    <Link href={item.route}>
                      <Button
                      className="!p-[14px_24px] 2xl:!p-[18px_32px]"
                        variant="primary"
                        label={item.buttonLabel}
                        children={item.buttonIcon}
                      />
                    </Link>
                  </div>
                </div>
                <div className="rounded-xl p-[16px_12px] bg-green-light ">
                  {item.drivewayCustomerPoints?.map((point, index) => (
                    <div className="flex gap-[10px] mb-[12px] 3xl:mb-6 last-of-type:mb-0">
                      <TickTrue className="w-[24px] h-[24px] fill-dark flex-[0_0_auto]" />
                      <span className="mb-0 text-[14px] font-normal leading-[150%] 2xl:text-[18px] text-dark">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          ,
        </div>
      </div>
    </section>
  );
};

export default DriveawayAutoDiagnostic;
