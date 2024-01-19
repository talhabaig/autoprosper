import React from "react";
import Button from "../../Common/Button/Button";
import { ArrowRight } from "../../Icons/Icons";
import Image from "next/image";
import { upGradeRide } from "../../../assests/interfaces/Home/index";

const upGradeRideDetails: upGradeRide[] = [
  {
    id: 1,
    imageSrc: "/home/upgrade-ride.png",
    contentLabel: "Seamless Ride Upgrades",
    heading: "Upgrade Your Ride, Effortlessly!",
    description:
      "levate your car effortlessly: either transform it into your dream ride online or effortlessly sell for the best offers at home.",
    buttonLabel: "Trade Up",
    buttonIcon: (
      <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
    ),
  },
];

function UpgradeRide() {
  return (
    <>
      <section className="py-[3.75rem]  2xl:py-[5rem] 3xl:py-[7.5rem] bg-white">
        <div className="container [&>*:nth-child(even)]:md:flex-row-reverse ">
          {upGradeRideDetails.map((item) => (
            <div
              key={item.id}
              className="md:flex md:justify-between md:items-center pb-[3.75rem] lg:pb-[5rem] 3xl:pb-[6.875rem] last-of-type:pb-0"
            >
              <div className="md:flex-[0_0_auto] md:w-[48%] 3xl:w-[49%] mb-[1.875rem] md:mb-0">
                <Image
                  src={item.imageSrc ? item.imageSrc : ""}
                  width={690}
                  height={520}
                  alt={item.contentLabel || ""}
                />
              </div>
              <div className="md:flex-[0_0_auto] md:w-[48%] 3xl:w-[49%] ">
                <div className="text-center  max-w-[450px] mx-auto flex flex-col justify-center items-center md:justify-start md:items-start md:text-start">
                  <div className="pb-[0.625rem] xl:pb-[1.25rem]">
                    <span
                      className="inline-block p-[0.5rem_1rem] leading-[1.3] rounded-[100px] tracking-[1px] 
                     font-bold text-gray uppercase text-[0.625rem] lg:text-[0.75rem] border border-solid
                     border-border-color"
                    >
                      {item.contentLabel}
                    </span>
                  </div>
                  <h2 className="heading2 md:text-start max-w-[320px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[340px] 3xl:max-w-full">{item.heading}</h2>
                  <p className="paragraph-large mb-[1.25rem] xl:mb-[1.875rem]">
                    {item.description}
                  </p>
                  <div>
                    <Button
                      variant="primary"
                      label={item.buttonLabel}
                      children={item.buttonIcon}
                      className="min-w-[157px] xl:min-w-[190px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default UpgradeRide;
