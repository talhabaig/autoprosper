import React from "react";

import { GetPreQualifiedSecureFinancing } from "../../../assests/interfaces/Home/index";
import {
  DocumentRounded,
  SecureLock,
  CreditCard,
  ArrowRight,
} from "@/components/Icons/Icons";
import GetPreQuallifiedForm from "./GetPreQualifiedForm";
import GetPreQuallifiedAccordion from "./GetPreQuallifiedAccordion";
import Button from "@/components/Common/Button/Button";

const cardData: GetPreQualifiedSecureFinancing[] = [
  {
    id: 1,
    imageSrc: "/home/discover-ideal.png",
    heading: "Navigate the auto maze",
    description:
      "Zero effect on your credit card during this process—no impact on your credit score whatsoever.",
    icon: (
      <CreditCard className="w-[56px] h-[56px] lg:w-[76px] lg:h-[76px] 3xl:w-[96px] 3xl:h-[96px]" />
    ),
  },
  {
    id: 2,
    imageSrc: "/home/special-order.png",
    heading: "Cut through the noise",
    description:
      "Rest assured, your data remains completely safeguarded within our secure systems, ensuring utmost protection at all times.",
    icon: (
      <SecureLock className="w-[56px] h-[56px] lg:w-[76px] lg:h-[76px] 3xl:w-[96px] 3xl:h-[96px]" />
    ),
  },
  {
    id: 3,
    imageSrc: "/home/special-order.png",
    heading: "Personalize car matching",
    description:
      "Experience tailored financial solutions with loan terms personalized to meet your unique needs and financial goals.",
    icon: (
      <DocumentRounded className="w-[56px] h-[56px] lg:w-[76px] lg:h-[76px] 3xl:w-[96px] 3xl:h-[96px]" />
    ),
  },
];

const GetPreQualified = () => {
  return (
    <>
      <section className="bg-dark-7">
        <div className="container">
          {" "}
          <div
            className="max-w-[930px] mx-auto pt-[3rem] pb-[4rem]  2xl:pt-[4rem] 
          2xl:pb-[8rem] 3xl:pt-[6rem] 3xl:pb-[11.6rem]"
          >
            <h1 className="heading1">
              Secure Financing with a Pre-Qualification Check.
            </h1>
            <p
              className="text-dark-2 text-center lg:text-[1rem]   xl:text-[1.25rem] xl:leading-[1.5]
             max-w-[700px] mx-auto"
            >
              Discover your eligibility for an auto loan instantly without
              affecting your credit score through a rapid pre-qualification
              process.
            </p>
          </div>
        </div>
      </section>
      <GetPreQuallifiedForm />

      <section className="bg-dark-7 py-[3rem]   2xl:py-[4rem] 3xl:py-[6rem]">
        <div className="container">
          <div
            className="md:flex md:flex-wrap md:justify-between md:items-stretch
            md:gap-[1rem] lg:gap-[1.25rem] xl:gap-[24px]"
          >
            {cardData.map((item) => (
              <div
                key={item.id}
                className="md:flex-grow md:w-[48%] bg-white lg:w-[30%] rounded-[12px]
                  mb-[12px] md:mb-0 shadow-[0px_18px_36px_-18px_rgba(0,27,68,0.25)]"
              >
                <div
                  className="h-full flex flex-col justify-center items-center text-center
                  lg:justify-start lg:items-start lg:text-left 
                 py-[1.5rem] lg:py-8  xl:py-12 px-[18px] lg:px-[1.5rem] xl:px-8  "
                >
                  <div className="mb-[1.125rem] lg:mb-[1.5rem] ">
                    {item.icon}
                  </div>

                  <h3 className="heading4 text-left ">{item.heading}</h3>
                  <p className="text-dark-3 text-[0.875rem] md:text-[16px] leading-[150%]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem]">
        <div className="max-w-[360px] mx-auto text-center md:max-w-[480px] lg:max-w-[540px] 2xl:max-w-[700px]">
          <h2 className="heading2 mb-[0.625rem] lg:mb-[1.125rem]">
            Finance FAQs
          </h2>
          <p className="paragraph-large mb-8 md:mb-[2.2rem] lg:mb-[2.5rem] 2xl:mb-[3rem] 4xl:mb-[4rem]">
            Interested in delving deeper into the realm of financing? There's a
            wealth of information waiting to be explored and understood!
          </p>
        </div>
        <div className="container">
          <div className="mb-8 md:mb-[2.2rem] lg:mb-[2.5rem] 2xl:mb-[3rem] 4xl:mb-[4rem]">
            <GetPreQuallifiedAccordion />
          </div>
          <div className="md:flex md:justify-center md:items-center">
            {" "}
            <Button
              variant="primary"
              label="View more finance FAQs"
              className="w-full md:w-[initial]"
              children={
                <ArrowRight className="fill-primary-text w-[1.125rem] h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]" />
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GetPreQualified;
