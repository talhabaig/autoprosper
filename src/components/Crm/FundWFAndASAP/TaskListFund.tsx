import {
  FlagIcon,
  PencilIcon,
  Plus,
  RefreshTask,
} from "@/components/Icons/Icons";
import React from "react";
const TaskListFundWSDealAndASAP = [
  {
    id: 1,
    time: "9:00-9:30AM",
    heading: " $ Fund a WF deal ASAP",
    iconPencil: <PencilIcon className="w-[20px] h-[20px] cursor-pointer " />,
    iconFlag: <FlagIcon className="w-[20px] h-[20px] cursor-pointer" />,
    iconRefresh: (
      <RefreshTask className="w-[20px] h-[20px] cursor-pointer fill-dark-5 " />
    ),
  },
  {
    id: 2,
    time: "9:00-9:30AM",
    heading: " $ Fund a WF deal ASAP",
    iconPencil: <PencilIcon className="w-[20px] h-[20px] cursor-pointer " />,
    iconFlag: <FlagIcon className="w-[20px] h-[20px] cursor-pointer" />,
    iconRefresh: (
      <RefreshTask className="w-[20px] h-[20px] cursor-pointer fill-dark-5 " />
    ),
  },
];
const TaskListFund = () => {
  return (
    <div className="rounded-xl p-[24px_16px] bg-white">
      <div>
        <h1 className="text-dark font-bold text-[18px] border-b border-[#B7BCC3] leading-[130%] pb-[16px]">
          15 January
        </h1>

        <ul className="fundDeal mt-4">
          {TaskListFundWSDealAndASAP.map((item, index) => (
            <li
              key={index}
              className="pl-[20px] pb-4 border-l-2 border-dashed last-of-type:border-0 last-of-type:pb-0 border-dark-5	"
            >
              <h1 className="text-[14px] font-semibold mb-2 text-dark">
                {item.heading}
              </h1>
              <span className="block mb-[15px] text-[10px] font-bold leading-[130%]">
                {item.time}
              </span>
              <div className="flex gap-2">
                {item.iconPencil}
                {item.iconFlag}
                {item.iconRefresh}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="flex justify-center items-center mt-4 font-bold gap-[6px] text-[13px] p-[10px_20px] w-full rounded-[100px] bg-btn-primary-gradient text-dark hover:bg-btn-primary-gradient-hover">
          <Plus className="w-[16px] h-[16px]" />
          Add Task
        </button>
        <button className="flex justify-center items-center gap-[6px] text-[13px] mt-4 p-[10px_20px] w-full rounded-[100px] text-dark bg-dark-7 font-bold">
          <RefreshTask className="w-[16px] h-[16px] fill-dark " />
          Refresh task
        </button>
      </div>
    </div>
  );
};
export default TaskListFund;
