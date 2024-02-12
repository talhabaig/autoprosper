import React from "react";
import { FlagIcon, PencilIcon, Plus, RefreshCwIcon } from "lucide-react";

const TasksList = () => {
  return (
    <div className="bg-white border rounded-2xl border-dark-5 p-[24px_16px]">
      <div className="border relative">
        <div className="fundDeal ">
          <ul className="relative pl-[40px]">
            <li className="pb-4">
              <a
                className="relative text-[14px] font-semibold text-dark"
                href="#"
              >
                $ Fund a WF deal ASAP
              </a>
              <div className="text-[10px] font-bold mb-3 leading-[130%]">
                9:00-9:30AM
              </div>
              <div className="flex gap-2">
                <PencilIcon className="w-[20px] h-[20px]" />
                <FlagIcon className="w-[20px] h-[20px]" />
                <RefreshCwIcon className="w-[20px] h-[20px]" />
              </div>
            </li>
            <li className="pb-6">
              <a
                className="relative text-[14px] font-semibold text-dark"
                href="#"
              >
                $ Fund a WF deal ASAP
              </a>
              <div className="text-[10px] font-bold mb-3 leading-[130%]">
                9:00-9:30AM
              </div>
              <div className="flex gap-2">
                <PencilIcon className="w-[20px] h-[20px]" />
                <FlagIcon className="w-[20px] h-[20px]" />
                <RefreshCwIcon className="w-[20px] h-[20px]" />
              </div>
            </li>
            <li className="pb-6">
              <a
                className="relative text-[14px] font-semibold text-dark"
                href="#"
              >
                $ Fund a WF deal ASAP
              </a>
              <div className="text-[10px] font-bold mb-3 leading-[130%]">
                9:00-9:30AM
              </div>
              <div className="flex gap-2">
                <PencilIcon className="w-[20px] h-[20px]" />
                <FlagIcon className="w-[20px] h-[20px]" />
                <RefreshCwIcon className="w-[20px] h-[20px]" />
              </div>
            </li>
            <li className="pb-6">
              <a
                className="relative text-[14px] font-semibold text-dark"
                href="#"
              >
                $ Fund a WF deal ASAP
              </a>
              <div className="text-[10px] font-bold mb-3 leading-[130%]">
                9:00-9:30AM
              </div>
              <div className="flex gap-2">
                <PencilIcon className="w-[20px] h-[20px]" />
                <FlagIcon className="w-[20px] h-[20px]" />
                <RefreshCwIcon className="w-[20px] h-[20px]" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-dark font-bold text-[18px] border-b leading-[130%] pb-[16px]">
            15 January
          </h1>
          <button className="flex justify-center items-center mt-4 font-bold gap-[6px] text-[13px] p-[10px_20px] w-full rounded-[100px] bg-btn-primary-gradient text-dark hover:bg-btn-primary-gradient-hover">
            <Plus className="w-[16px] h-[16px]" />
            Add Task
          </button>
          <button className="flex justify-center items-center gap-[6px] text-[13px] mt-4 p-[10px_20px] w-full rounded-[100px] text-dark bg-dark-7 font-bold">
            <RefreshCwIcon className="w-[16px] h-[16px]" />
            Refresh task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksList;
