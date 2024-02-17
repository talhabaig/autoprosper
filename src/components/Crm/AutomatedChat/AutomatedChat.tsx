import { AttachFile } from "@/components/Icons/Icons";
import React from "react";
const AutomatedChatlist = [
  {
    id: 1,
    heading: "do eiusmod tempor incididunt",
    paragraph: "Duis aute irure dolor in reprehenderit in",
  },
  {
    id: 2,
    heading: "do eiusmod tempor incididunt",
    paragraph: "Duis aute irure dolor in reprehenderit in",
  },
  {
    id: 3,
    heading: "do eiusmod tempor incididunt",
    paragraph: "Duis aute irure dolor in reprehenderit in",
  },
  {
    id: 4,
    heading: "do eiusmod tempor incididunt",
    paragraph: "Duis aute irure dolor in reprehenderit in",
  },
];
const AutomatedChat = () => {
  return (
    <div className="bg-white rounded-xl p-[15px]">
      <div className="lg:pt-[104px]">
        <div className="relative text-center p-[9px_42px_9px_48px] bg-green rounded-full">
          <span className="text-[12px] text-dark font-bold leading-[130%]">
            How can we sell today
          </span>
          <div className="triangle"></div>
        </div>
        <div className="lg:mb-[110px]">
          <img src=" ../crm/robot.png" className="mx-auto" />
        </div>
        {AutomatedChatlist.map((item, index) => (
          <div
            key={index}
            className="rounded-xl mb-2 bg-light-green p-[8px_16px_10px_16px]"
          >
            <h1 className="text-[12px] mb-[7px] font-normal leading-[130%] text-dark">
              {item.heading}
            </h1>
            <p className="text-[9px] font-bold leading-normal mb-0 truncate  text-dark-4">
              {item.paragraph}
            </p>
          </div>
        ))}
        <div className="relative">
          <input
            type="text"
            placeholder="Type"
            className="w-full p-[17px_38px_17px_16px] text-[12px] block rounded-xl border border-[#8E97A6]"
          />
          <div className="absolute right-[16px] top-[16px]">
            <AttachFile className="w-[18px] h-[18px] cursor-pointer" />
          </div>
        </div>
        <button className="flex justify-center items-center mt-3 font-bold text-[14px] p-[14px_24px] w-full rounded-[100px] bg-btn-primary-gradient text-dark hover:bg-btn-primary-gradient-hover">
          Send
        </button>
      </div>
    </div>
  );
};
export default AutomatedChat;
