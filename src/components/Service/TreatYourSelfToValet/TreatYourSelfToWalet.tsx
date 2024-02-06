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
    description:
      "Enter zip code for instant pricing!",
    buttonLabel: "Book Now",
    buttonIcon: (
      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] hidden md:block lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
    tickIcon:(<TickTrue className="w-[20px] h-[20px]" />),
    paragraphPoint1:"Competitive pricing",
    paragraphPoint2:"Roundtrip valet for your vehicle",
    paragraphPoint3:"Trusted mechanics",
  },
];

function TreatYourSelfToValet() {
  return (
    <>
      <section className="py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem] bg-white">
        <div className="container [&>*:nth-child(even)]:md:flex-row-reverse ">
          {TreatYourSelfToValetList.map((item) => (
            <div
              key={item.id}
              className="md:flex md:justify-between md:items-center pb-[3.75rem] lg:pb-[5rem] 3xl:pb-[6.875rem] last-of-type:pb-0"
            >
              
              <div className="md:flex-[0_0_auto] md:w-[48%] 3xl:w-[49%] ">
                <div
                  className="flex flex-col"
                >
                  <h2 className="heading2 2xl:text-[44px]  leading-[130%] xl:mb-6 md:max-w-[280px] lg:max-w-[360px] xl:max-w-[430px] 2xl:max-w-[500px] text-start mb-4">
                    {item.heading}
                  </h2>
                  <p className="paragraph-large text-dark mb-0 xl:text-[18px] font-normal">
                    {item.description}
                  </p>
                  
                  <div className="">
                    <Link href="/sell-trade">
                      <Button
                        variant="primary"
                        label={item.buttonLabel}
                        children={item.buttonIcon}
                        className="w-full rounded-xl md:rounded-full mb-3 xl:mb-6 md:max-w-[173px] !p-[14px_24px]"
                      />
                    </Link>
                  </div>
                  <div className="mb-6">
                  <div className="flex gap-[10px] mb-2 xl:mb-3 ">
                    {item.tickIcon}
                    <span className="mb-0  text-[14px] font-normal leading-5 2xl:text-[18px] text-dark">
                      {item.paragraphPoint1}
                    </span>
                  </div>
                  <div className="flex gap-[10px] mb-2 xl:mb-3">
                    {item.tickIcon}
                    <span className="mb-0 text-[14px] font-normal leading-5 2xl:text-[18px] text-dark">
                      {item.paragraphPoint2}
                    </span>
                  </div>
                  <div className="flex gap-[10px]">
                    {item.tickIcon}
                    <span className="mb-0 text-[14px] font-normal leading-5 2xl:text-[18px] text-dark">
                      {item.paragraphPoint3}
                    </span>
                  </div>
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
