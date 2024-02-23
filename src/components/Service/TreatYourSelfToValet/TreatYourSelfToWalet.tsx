"use client"
import React from "react";
import Button from "../../Common/Button/Button";
import { ArrowRight, TickTrue } from "../../Icons/Icons";
import Image from "next/image";
import { upGradeRide } from "../../../assests/interfaces/Home/index";
import Link from "next/link";

const TreatYourSelfToValetList = [
  {
    id: 1,
    imageSrc: "/servicepage/treatYourSelf.png",
    contentLabel: "Seamless Ride Upgrades",
    heading: "Treat yourself to valet auto maintenance.",
    description: "Enter zip code for instant pricing!",
    buttonLabel: "Book Now",
    buttonIcon: (
      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] hidden md:block lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
    tickIcon: <TickTrue className="w-[20px] h-[20px] fill-dark" />,
    treatYourSelfPoints: [
      "Competitive pricing",
      "Roundtrip valet for your vehicle",
      "Trusted mechanics",
    ],
  },
];

function TreatYourSelfToValet() {
  return (
    <>
      <section className="py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem] bg-[#FFF]">
        <div className="container [&>*:nth-child(even)]:md:flex-row-reverse ">
          {TreatYourSelfToValetList.map((item) => (
            <div
              key={item.id}
              className="md:flex md:justify-between md:items-center pb-[3.75rem] lg:pb-[5rem] 3xl:pb-[6.875rem] last-of-type:pb-0"
            >
              <div className="md:flex-[0_0_auto] md:w-[48%] md:px-3 2xl:px-[32px] 3xl:w-[49%] ">
                <div className="flex flex-col">
                  <h2 className="heading2 2xl:text-[44px] max-w-[270px] leading-[130%] xl:mb-6 md:max-w-[280px] lg:max-w-[360px] xl:max-w-[430px] 2xl:max-w-[500px] text-start mb-4">
                    {item.heading}
                  </h2>
                  <p className="paragraph-large text-dark mb-3 xl:text-[18px] font-normal">
                    {item.description}
                  </p>
                  <div
                    className={`relative w-full md:w-[70%] block mb-[20px] 2xl:mb-[24px]`}
                  >
                    <label
                      className="inline-block text-dark font-bold text-[9px] absolute top-[8px] left-[18px]
                      lg:top-[13px] lg:text-[12px] lg:left-[22px] 2xl:left-[24px]"
                    >
                      Location
                    </label>
                    <input
                      className="appearance-none border w-full pt-[24px] pb-[8px] px-[18px] text-[14px] text-gray-700 leading-tight 
                      focus:shadow-outline border-dark-5 focus:outline-none focus:bg-white focus:border-dark rounded-[12px]
                    hover:border-dark lg:pt-[30px] lg:pb-[14px] lg:px-[24px]  2xl:pt-[33px] 2xl:pb-[17px]
                      2xl:pl-[24px]"
                      type="number"
                      placeholder="e.g 97210"
                      onChange={(e) => console.log("zipcode", e.target.value)}
                    />
                  </div>
                  <div>
                    <Link href="/sell-trade">
                      <Button
                        variant="primary"
                        label={item.buttonLabel}
                        children={item.buttonIcon}
                        className="w-full rounded-xl md:rounded-full mb-3 xl:mb-6 md:max-w-[173px] !p-[14px_24px] 2xl:!p-[18px_32px]"
                      />
                    </Link>
                  </div>
                  <div className="mb-6 md:mb-0">
                    {item.treatYourSelfPoints.map((point, index) => (
                      <div key={index} className="flex gap-[8px] mb-2 xl:mb-3 ">
                        {item.tickIcon}
                        <span className="mb-0  text-[14px] font-normal leading-5 2xl:text-[16px] text-dark">
                          {point}
                        </span>
                      </div>
                    ))}
                    ,
                  </div>
                </div>
              </div>
              <div className="md:flex-[0_0_auto] md:w-[48%] 3xl:w-[49%] mb-[1.5rem] md:mb-0">
                <Image
                  src={item.imageSrc ? item.imageSrc : ""}
                  width={690}
                  height={520}
                  alt={item.contentLabel || ""}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TreatYourSelfToValet;
