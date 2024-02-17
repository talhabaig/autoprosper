"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Plus,
  QuestionGradient,
  AnswerRounded,
  NegativeSign,
} from "@/components/Icons/Icons";
import { hkdf } from "crypto";

const accordionData = [
  {
    id: "item-1",
    title: "Where is my vehicle being serviced?",
    description:
      "A Driveway valet takes your vehicle to one of the many authorized service centers in our network, based on location, availability, and your car's make and model. Certified technicians perform all maintenance and service—our mechanics are some of the best in the industry.Your Driveway service advisor keeps you informed every step of the way.",
    icon: (
      <QuestionGradient className="w-[28px] h-[28px] md:w-[36px] md:h-[36px] 2xl:w-[48px] 2xl:h-[48px]" />
    ),
  },
  {
    id: "item-2",
    title: "Where is my vehicle being serviced?",
    description:
      "A Driveway valet takes your vehicle to one of the many authorized service centers in our network, based on location, availability, and your car's make and model. Certified technicians perform all maintenance and service—our mechanics are some of the best in the industry.Your Driveway service advisor keeps you informed every step of the way.",
    icon: (
      <QuestionGradient className="w-[28px] h-[28px] md:w-[36px] md:h-[36px] 2xl:w-[48px] 2xl:h-[48px]" />
    ),
  },
];
const FaqAccordion = () => {
  const pathname = usePathname();
  useEffect(() => {
    const faqSection = document.getElementById("faqservices");
    if (faqSection && pathname.includes("faqservices")) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <section
      className="py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem]  bg-dark-7"
      id="faqservices"
    >
      <div className="container">
        <div className="max-w-[360px] mx-auto text-center  lg:max-w-[400px]   xl:max-w-[416px] 2xl:max-w-[480px]">
          <h2 className="heading2 mb-[12px] lg:mb-[1.125rem]">FAQ</h2>
          <p className="paragraph-large mb-[16px] md:mb-[1.875rem] lg:mb-[2.5rem] 2xl:mb-[3rem]  ">
            Have questions about getting your car serviced? We’ve got answers.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-[1020px] mx-auto flex items-start justify-start flex-wrap lg:justify-between"
        >
          {accordionData.map((item) => (
            <AccordionItem
              key={item.id}
              className={`w-full border-b-[0] mb-[12px] rounded-[12px]
               bg-white shadow-[0px_8px_36px_-18px_rgba(0,27,68,0.10)]`}
              value={item.id}
            >
              <AccordionTrigger
                className="text-[14px] md:text-[16px] lg:text-[18px] [&>*:nth-child(even)]:stroke-dark
                font-bold leading-[130%] text-dark !no-underline   text-left bg-white rounded-[12px]
                shadow-[0px_8px_36px_-18px_rgba(0,27,68,0.10)] p-[16px]  [&>*:nth-child(4)]:!hidden 
                [&[data-state=open]>*:nth-child(2)]:hidden [&[data-state=open]>*:nth-child(3)]:!block
                md:p-[24px] xl:p-[30px] 2xl:p-[35px]"
              >
                <div className="flex gap-[16px] items-center">
                  <span>{item.icon}</span>
                  <div>
                    <span className="block text-[14px] md:text-[16px] xl:text-[18px] font-bold leading-[150%]">
                      {item.title}
                    </span>
                  </div>
                </div>
                <Plus className="flex-[0_0_auto] w-[16px] h-[16px]  lg:w-[20px] lg:h-[20px]" />
                <NegativeSign className="flex-[0_0_auto] w-[22px] h-[22px]  lg:w-[24px] lg:h-[24px] hidden" />
              </AccordionTrigger>
              <AccordionContent className="mx-[16px] md:mx-[24px] xl:mx-[30px] 2xl:mx-[35px] pt-[12px] border-t-[1px] border-solid border-dark-5">
                <div className="flex items-start gap-[16px]">
                  <span>
                    <AnswerRounded className="w-[28px] h-[28px] md:w-[36px] md:h-[36px] 2xl:w-[48px] 2xl:h-[48px]" />
                  </span>
                  <div>
                    {item.description.split("\n").map((line, index) => (
                      <span
                        key={index}
                        className="text-[13px] leading-[150%] text-dark-2 block mb-[16px]
                        md:text-[15px] xl:text-[16px]"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqAccordion;
