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
      <ArrowRight width="2rem" height="2rem" className="fill-primary-text" />
    ),
  },
];

function UpgradeRide() {
  return (
    <>
      <section className="py-[6rem]  2xl:py-[8rem] 3xl:py-[12rem] bg-white">
        <div className="container [&>*:nth-child(even)]:md:flex-row-reverse ">
          {upGradeRideDetails.map((item) => (
            <div
              key={item.id}
              className="md:flex md:justify-between md:items-center pb-[6rem] lg:pb-[8rem] 3xl:pb-[11rem] last-of-type:pb-0"
            >
              <div className="md:flex-[0_0_auto] md:w-[48%] 3xl:w-[49%] mb-[3rem] md:mb-0">
                <Image
                  src={item.imageSrc ? item.imageSrc : ""}
                  width={690}
                  height={520}
                  alt={item.contentLabel || ""}
                />
              </div>
              <div className="md:flex-[0_0_auto] md:w-[48%] 3xl:w-[49%] ">
                <div className="text-center  max-w-[450px] mx-auto flex flex-col justify-center items-center md:justify-start md:items-start md:text-start">
                  <div className="pb-[1rem] xl:pb-[2rem]">
                    <span
                      className="inline-block p-[0.8rem_1.6rem] leading-[1.3] rounded-[10rem] tracking-[1px] 
                     font-bold text-gray uppercase text-[1rem] lg:text-[1.2rem] border border-solid
                     border-border-color"
                    >
                      {item.contentLabel}
                    </span>
                  </div>
                  <h2 className="heading2 md:text-start ">{item.heading}</h2>
                  <p className="paragraph-large mb-[2rem] xl:mb-[3rem]">
                    {item.description}
                  </p>
                  <div>
                    <Button
                      variant="primary"
                      label={item.buttonLabel}
                      children={item.buttonIcon}
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
