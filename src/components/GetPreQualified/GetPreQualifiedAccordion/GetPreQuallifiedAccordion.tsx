import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "@/components/Icons/Icons";

const accordionData = [
  {
    id: "item-1",
    question: "What is pre-qualification for financing?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    style: "border-t border-b border-solid border-dark",
  },
  {
    id: "item-2",
    question: "How does pre-qualification differ from pre-approval?",
    answer:
      "Yes. It comes with default styles that match the other components' aesthetic.",
    style: "",
  },
  
  {
    id: "item-3",
    question: "Why should I pre-qualify for financing?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    style: "",
  },
  {
    id: "item-4",
    question: "Will pre-qualifying impact my credit score?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    style: "",
  },
  {
    id: "item-5",
    question: "What information is needed for pre-qualification?",
    answer:
      "Yes. It comes with default styles that match the other components' aesthetic.",
    style: "",
  },
  {
    id: "item-6",
    question: "How long does the pre-qualification process take?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    style: "",
  },
];
const GetPreQuallifiedAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionData.map((item) => (
        <AccordionItem key={item.id} className={item.style} value={item.id}>
          <AccordionTrigger className="text-[14px] md:text-[16px] lg:text-[18px] [&>*:nth-child(even)]:!hidden
          font-bold leading-[130%] text-dark no-underline py-[24px] md:py-[28px] lg:py-[32px] text-left">
            {item.question}
            <Plus className="flex-[0_0_auto] w-[16px] h-[16px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]"/>
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default GetPreQuallifiedAccordion;
