import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DownArrow,
  GasCan,
  DiscBrake,
  TireAssets,
  WrenchRounded,
  TickTrue,
} from "@/components/Icons/Icons";
import { hkdf } from "crypto";

const accordionData = [
  {
    id: "item-1",
    title: "Synthetic Oil Change",
    subHeading: "What's included?",
    totalPrice: "99",
    description:
      "Choose longer-lasting premium synthetic oil for better engine performance and protection.",
    featurePoinsts: [
      "Premium synthetic oil",
      "New oil filter",
      "Inspect engine and cabin air filters",
      "Top up common vehicle fluids",
      "Check and adjust tire pressure",
      "Lube suspension joints",
      "Multi-point inspection",
    ],
    icon: (
      <GasCan className="w-[34px] h-[34px] xl:w-[54px] xl:h-[54px] 2xl:w-[64px] 2xl:h-[64px]" />
    ),
  },
  {
    id: "item-2",
    title: "Brake Inspection",
    subHeading: "What's included?",
    totalPrice: "99",
    description:
      "Choose longer-lasting premium synthetic oil for better engine performance and protection.",
    featurePoinsts: [
      "Premium synthetic oil",
      "New oil filter",
      "Inspect engine and cabin air filters",
      "Top up common vehicle fluids",
      "Check and adjust tire pressure",
      "Lube suspension joints",
      "Multi-point inspection",
    ],
    icon: (
      <DiscBrake className="w-[34px] h-[34px] xl:w-[54px] xl:h-[54px] 2xl:w-[64px] 2xl:h-[64px]" />
    ),
  },

  {
    id: "item-3",
    title: "Tire rotation & inspection ",
    subHeading: "What's included?",
    totalPrice: "99",
    description:
      "Choose longer-lasting premium synthetic oil for better engine performance and protection.",
    featurePoinsts: [
      "Premium synthetic oil",
      "New oil filter",
      "Inspect engine and cabin air filters",
      "Top up common vehicle fluids",
      "Check and adjust tire pressure",
      "Lube suspension joints",
      "Multi-point inspection",
    ],
    icon: (
      <TireAssets className="w-[34px] h-[34px] xl:w-[54px] xl:h-[54px] 2xl:w-[64px] 2xl:h-[64px]" />
    ),
  },
  {
    id: "item-4",
    title: "Express auto detailing",
    subHeading: "What's included?",
    totalPrice: "99",
    description:
      "Choose longer-lasting premium synthetic oil for better engine performance and protection.",
    featurePoinsts: [
      "Premium synthetic oil",
      "New oil filter",
      "Inspect engine and cabin air filters",
      "Top up common vehicle fluids",
      "Check and adjust tire pressure",
      "Lube suspension joints",
      "Multi-point inspection",
    ],
    icon: (
      <WrenchRounded className="w-[34px] h-[34px] xl:w-[54px] xl:h-[54px] 2xl:w-[64px] 2xl:h-[64px]" />
    ),
  },
];
const ServiceAccordion = () => {
  return (
    <section className="py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem]  bg-dark-7">
      <div className="container">
        <div className="max-w-[360px] mx-auto text-center  lg:max-w-[400px]   xl:max-w-[416px] 2xl:max-w-[480px]">
          <h2 className="heading2 mb-[0.5rem] lg:mb-[1.125rem]">
            Service Shop
          </h2>
          <p className="paragraph-large mb-[1.5rem] md:mb-[1.875rem] lg:mb-[2.5rem] 2xl:mb-[3rem]  ">
            Choose from our menu of services, for auto maintenance as easy as
            ordering lunch.
          </p>
        </div>
        {/* <Plus className="flex-[0_0_auto] w-[16px] h-[16px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]" /> */}
         
        <Accordion
          type="single"
          collapsible
          className="w-full flex items-start justify-start flex-wrap lg:justify-between"
        >
          {accordionData.map((item) => (
            <AccordionItem
              key={item.id}
              className={`w-full lg:w-[49%] border-b-[0] mb-[12px] rounded-[12px]
               bg-white shadow-[0px_8px_36px_-18px_rgba(0,27,68,0.10)] xl:mb-[24px]`}
              value={item.id}
            >
              <AccordionTrigger
                className="text-[14px] md:text-[16px] lg:text-[18px] [&>*:nth-child(even)]:stroke-dark
                font-bold leading-[130%] text-dark !no-underline   text-left bg-white rounded-[12px]
                shadow-[0px_8px_36px_-18px_rgba(0,27,68,0.10)] p-[16px] 
                [&[data-state=open]>svg]:w-[24px]  [&>*:nth-child(3)]:!hidden 
                xl:p-[24px]"
              >
                <div className="flex gap-[12px] items-center xl:gap-[16px]">
                  <span>{item.icon}</span>
                  <div>
                    <span
                      className="block text-[12px] leading-[150%] text-dark-4 mb-[10px]
                       md:text-[14px] xl:text-[18px] font-normal"
                    >
                      {item.title}
                    </span>
                    <span className="block text-[14px] md:text-[16px] xl:text-[24px] font-bold leading-[130%]">
                      ${item.totalPrice}
                    </span>
                  </div>
                </div>
                
                <DownArrow className="flex-[0_0_auto] w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]  " />
              </AccordionTrigger>
              <AccordionContent className="px-[16px]">
                <div className="pl-[46px] xl:pl-[74px] 2xl:pl-[84px]">
                  <span
                    className="text-[13px] leading-[150%] text-dark-2 block mb-[16px]
                   md:text-[16px] xl:text-[16px]"
                  >
                    {item.description}
                  </span>
                  <h3
                    className="heading4 mb-[16px] pb-[16px] border-b-[1px] border-solid border-dark-5
                   text-dark font-bold leading-[130%]"
                  >
                    {item.subHeading}
                  </h3>
                  <ul className="p-[16px] bg-green-light rounded-[12px] md:p-[18px] xl:p-[24px]">
                    {item.featurePoinsts.map((point, index) => (
                      <li
                        key={index}
                        className="mb-[12px] md:mb-[14px] xl:mb-[16px] text-[14px] font-normal leading-[150%]
                         2xl:text-[18px] text-dark flex items-center gap-[10px] last-of-type:mb-0
                        "
                      >
                        <span>
                          <TickTrue className="w-[20px] h-[20px]" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServiceAccordion;
