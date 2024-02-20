import { AttachIcon } from "@/components/Icons/Icons";
import { Button } from "@/components/ui/button";
import React from "react";

const SalesBot = () => {
  const salesData = {
    title: "How can we sell today",
    image: "/images/robot.png",
    cards: [
      {
        subtitle: "do eiusmod tempor incididunt",
        description: "Duis aute irure dolor in reprehenderit in ..",
      },
      {
        subtitle: "do eiusmod tempor incididunt",
        description: "Duis aute irure dolor in reprehenderit in ..",
      },
      {
        subtitle: "do eiusmod tempor incididunt",
        description: "Duis aute irure dolor in reprehenderit in ..",
      },
      {
        subtitle: "do eiusmod tempor incididunt",
        description: "Duis aute irure dolor in reprehenderit in ..",
      },
    ],
    inputPlaceholder: "Type",
    buttonText: "Send",
  };
  return (
    <div className="bg-white w-full h-full md:h-[603px] md:py-[24px] md:px-[16px]">
      <div className="flex flex-col items-center w-full">
        <div className="font-bold text-xs bg-green py-[9px] mt-[20px] px-[42px] text-dark rounded-full">
          {salesData.title}
        </div>
        <img
          src={salesData.image}
          alt="Sales Robot"
          className="w-[95px] h-[155px] md:w-[147px] md:h-[240px]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[8px] px-[16px]">
        {salesData.cards.map((card, index) => (
          <div
            key={index}
            className="flex cursor-pointer flex-col gap-[7px] bg-greenish-blue rounded-xl pt-[8px] pb-[10px] px-[16px]"
          >
            <div className="text-xs text-dark font-normal">{card.subtitle}</div>
            <div className="text-dark-4 font-bold text-[9px] leading-[11.34px]">
              {card.description}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full gap-[12px] mt-[16px] px-[16px] pb-[24px]">
        <div className="flex flex-row border border-dark-4 w-full rounded-xl h-[52px] pl-[16px] pr-[17px] justify-between items-center">
          <input
            type="text"
            placeholder={salesData.inputPlaceholder}
            className="text-dark-4 text-xs appearance-none outline-none border-none w-full"
          />
          <AttachIcon className="cursor-pointer" />
        </div>
        <Button
          variant="gradient"
          size="md"
          className="w-full h-[36px] md:h-[46px] text-[13px] md:text-[14px]"
        >
          {salesData.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default SalesBot;
