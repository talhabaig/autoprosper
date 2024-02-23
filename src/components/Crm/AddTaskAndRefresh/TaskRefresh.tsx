import { Plus, RefreshTask } from "@/components/Icons/Icons";
import React from "react";
const TaskAndRefreshButton = [
  {
    id: 1,
    heading: "15 January",
    addbuttonName: "Add Task",
    refreshbuttonName: "Refresh Task",
    iconPlus: <Plus className="w-[16px] h-[16px]" />,
    iconrefresh: <RefreshTask className="w-[16px] h-[16px] fill-dark " />,
  },
];
const TaskAndRefresh = () => {
  return (
    <div className="rounded-xl p-[24px_16px] bg-white">
      {TaskAndRefreshButton.map((item, index) => (
        <div>
          <h1 className="text-dark font-bold text-[18px] border-b border-[#B7BCC3] leading-[130%] pb-[16px]">
            {item.heading}
          </h1>
          <button className="flex justify-center items-center mt-4 font-bold gap-[6px] text-[13px] p-[10px_20px] w-full rounded-[100px] bg-btn-primary-gradient text-dark hover:bg-btn-primary-gradient-hover">
            {item.iconPlus}
            {item.addbuttonName}
          </button>
          <button className="flex justify-center items-center gap-[6px] text-[13px] mt-4 p-[10px_20px] w-full rounded-[100px] text-dark bg-dark-7 font-bold">
            {item.iconrefresh}
            {item.refreshbuttonName}
          </button>
        </div>
      ))}
    </div>
  );
};
export default TaskAndRefresh;
