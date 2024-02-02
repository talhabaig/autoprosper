import React from "react";
import { ChatBubble, MessageIcon } from "@/components/Icons/Icons";
import Button from "../../Common/Button/Button";
const EmailAndSmsList = [
  {
    id: 1,
    time: "Today 06:00 PM",
    heading: "Wade Warren",
    paragraph: "Ut enim ad minim veniam, quis nostrud exercitation n",
    icon: <MessageIcon className="w-[16px] 2xl:w-[20px]" />,
  },
  {
    id: 2,
    time: "Today 06:00 PM",
    heading: "Robert Fox",
    paragraph: "Ut enim ad minim veniam, quis nostrud exercitation n",
    icon: <ChatBubble className="w-[16px] 2xl:w-[20px]" />,
  },
  {
    id: 3,
    time: "Today 06:00 PM",
    heading: "Guy Hawkins",
    paragraph: "Ut enim ad minim veniam, quis nostrud exercitation n",
    icon: <MessageIcon className="w-[16px] 2xl:w-[20px]" />,
  },
  {
    id: 4,
    time: "Today 06:00 PM",
    heading: "Wade Warren",
    paragraph: "Ut enim ad minim veniam, quis nostrud exercitation n",
    icon: <MessageIcon className="w-[16px] 2xl:w-[20px]" />,
  },
  {
    id: 5,
    time: "Today 06:00 PM",
    heading: "Wade Warren",
    paragraph: "Ut enim ad minim veniam, quis nostrud exercitation n",
    icon: <MessageIcon className="w-[16px] 2xl:w-[20px]" />,
  },
  {
    id: 6,
    time: "Today 06:00 PM",
    heading: "Wade Warren",
    paragraph: "Ut enim ad minim veniam, quis nostrud exercitation n",
    icon: <MessageIcon className="w-[16px] 2xl:w-[20px]" />,
  },
];

const EmailAndSms = () => {
  return (
    <section>
      <div className="border p-[24px_16px]">
        <div className="border-b border-[#B7BCC3] flex justify-between items-end pb-4 ">
          <h1 className="text-lg font-bold text-dark">Email and SMS</h1>
          <span className="text-[10px] text-[#5D6878] font-normal uppercase">
            See All
          </span>
        </div>
        {EmailAndSmsList.map((item, index) => (
          <div
            key={index}
            className="border-b border-[#B7BCC3] py-4 hover:bg-green cursor-pointer"
          >
            <div className="relative mb-3 pl-[20px] lg:pl-[24px] xl:pl-[28px] ">
              <div className="absolute top-0 left-0">{item.icon}</div>
              <div className="relative mb-3 flex items-center justify-between gap-[5px]">
                <h1 className="text-xs font-bold text-dark">{item.heading}</h1>
                <span className="text-[#5D6878] text-[9px] font-bold">
                  {item.time}
                </span>
              </div>
              <p className="text-[10px] text-dark-3 mb-3 truncate">
                {item.paragraph}
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 ">
              <span
                className="p-[4px_8px] rounded-[100px] bg-dark text-[#FFFFFF]
             text-[10px] font-bold tracking-[0.9px] uppercase"
              >
                A.i warm up
              </span>
              <span
                className="p-[4px_8px] rounded-[100px] border border-[#4B5768]
             text-[#4B5768] text-[10px] font-bold tracking-[0.9px] uppercase"
              >
                Mannual warm up
              </span>
            </div>
          </div>
        ))}
        <Button
          variant="primary"
          className={`!p-[10px_20px] text-[13px] !bg-[#ECEEF1] mt-6 w-full !bg-bg-none `}
        >
          See All
        </Button>
      </div>
    </section>
  );
};

export default EmailAndSms;
