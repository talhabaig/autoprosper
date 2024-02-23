import { WarningFill, WarningOutline } from '@/components/Icons/Icons';
import { Button } from '@/components/ui/button';
import React from 'react';

const Task = () => {

const data = {
    "title": "Within Range",
    "subtitle": "Lead fraud risk",
    "assignee": {
      "name": "Cameron",
      "avatar": "/images/avatar-2.png"
    },
    "priority": {
      "label": "ASAP",
      "icon": "WarningOutline"
    },
    "buttonText": "A.I WARM UP"
  };
  return (
    <div className="flex flex-col rounded-2xl px-[16px] py-[24px] bg-white">
      <div className="flex flex-col gap-[4px]">
        <div className="flex justify-between items-center">
          <div className="text-dark font-bold text-lg">
            {data.title}
          </div>
          <WarningFill />
        </div>
        <div className="text-dark-2 text-xs">{data.subtitle}</div>
      </div>
      <div className="w-full h-[1px] bg-dark-6 mt-[16px] mb-[20px]"></div>
      <div className="flex flex-col gap-[11px]">
        <div className="flex justify-between">
          <div className="text-dark text-xs">Assignee:</div>
          <div className="flex gap-[5px] items-center">
            <img
              src={data.assignee.avatar}
              className="w-[20px] h-[20px]"
              alt="avatar"
            />
            <div className="font-bold text-dark text-xs">{data.assignee.name}</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-dark text-xs">Priority:</div>
          <div className="flex gap-[5px] items-center">
            <WarningOutline />
            <div className="font-bold text-dark text-xs">{data.priority.label}</div>
          </div>
        </div>
      </div>
      <Button className="mt-[24px]">{data.buttonText}</Button>
    </div>
  );
};

export default Task;
