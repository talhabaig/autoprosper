import React from "react";
import Button from "../../Common/Button/Button";
import { WrenchRounded, BadgeRounded, KeyRounded } from "../../Icons/Icons";
import Image from "next/image";
import type { AutoRepairOnDemand } from "../../../assests/interfaces/Home/index";
import Link from "next/link";

const autoRepairOnDemandData: AutoRepairOnDemand[] = [
  {
    id: 1,
    imageSrc: "/images/auto-repair-on-demand.png",
    heading: "Auto Repair on Demand",
    pointsArray: [
      {
        subHeading: "Full-service maintenance",
        paragraph: "Choose from a complete range of auto maintenance options.",
        icon: (
          <WrenchRounded className="w-[36px] h-[36px] lg:w-[46px] lg:h-[46px] 2xl:w-[64px] 2xl:h-[64px]" />
        ),
      },
      {
        subHeading: "Experienced mechanics",
        paragraph: "Our trustworthy technicians provide high quality service.",
        icon: (
          <BadgeRounded className="w-[36px] h-[36px] lg:w-[46px] lg:h-[46px] 2xl:w-[64px] 2xl:h-[64px]" />
        ),
      },
      {
        subHeading: "Valet car transport",
        paragraph:
          "Relax and leave getting to the service center to our valets.",
        icon: (
          <KeyRounded className="w-[36px] h-[36px] lg:w-[46px] lg:h-[46px] 2xl:w-[64px] 2xl:h-[64px]" />
        ),
      },
    ],
  },
];

const AutoRepairOnDemand: React.FC = () => {
  return (
    <>
      <section className="pt-[9rem] md:pt-[10rem] pb-[3rem]  2xl:pb-[4rem] 3xl:pb-[6rem] 3xl:pt-[11.625rem]">
        <div className="container  ">
          {autoRepairOnDemandData.map((item) => (
            <div
              key={item.id}
              className="md:flex md:justify-between   md:items-center pb-[3rem] 
               lg:pb-[4rem]  3xl:pb-[6rem] last-of-type:pb-0"
            >
              <div className="md:flex-[0_0_auto] md:w-[48%] 3xl:w-[49%] mb-[1.5rem] md:mb-0">
                <Image
                  src={item.imageSrc ? item.imageSrc : ""}
                  width={696}
                  height={520}
                  alt={item.heading || ""}
                />
              </div>
              <div
                className="md:flex md:flex-col  md:flex-[0_0_auto] md:w-[48%]
               3xl:w-[49%] 2xl:px-8 md:justify-start md:items-start md:text-start"
              >
                <h2
                  className={`heading2 mb-[0.75rem] md:text-start lg:mb-[1.125rem] text-left `}
                >
                  {item.heading}
                </h2>
                <div className="[&>*:nth-child(2)]:bg-btn-primary-gradient 
                 [&>*:nth-child(2)]:shadow-[0px_10px_36px_-18px_rgba(0,27,68,0.25)]
                 [&>*:nth-child(2)]:xl:shadow-[0px_36px_72px_-18px_rgba(0,27,68,0.25)]">
                  {item.pointsArray &&
                    item.pointsArray.map((point, index) => (
                      <div className=" 
                        p-[1px] rounded-[12px] overflow-hidden  mb-[12px] lg:mb-[15px] 2xl:mb-[18px]">
                        <div
                          key={index}
                          className="flex md:items-center  gap-[16px] p-[16px_12px] rounded-[12px] bg-white
                          lg:p-[20px_16px] xl:p-[23px_19px] 2xl:p-[26px_24px] xl:gap-[18px] 2xl:gap-[20px]"
                        >
                          <span>{point.icon}</span>
                          <div>
                            <h3 className="heading4 text-start font-bold mb-[12px]">
                              {point.subHeading}
                            </h3>
                            <span
                              className="block text-[13px] leading-[150%] 
                               font-normal text-dark-2 text-left lg:text-[16px] xl:text-[18px] 2xl:text-[20px]"
                            >
                              {point.paragraph}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AutoRepairOnDemand;
