"use client";
import {
  Clock,
  Edit,
  PlayCircle,
  Plusicon,
  Cross,
  CheckIcon,
  Sheduled,
  Copy,
} from "@/components/Icons/Icons";

// import React from 'react'
import React, { useState } from "react";
import Image from "next/image";

export const DealerPlex = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isEditTime, setEditTime] = useState(false);

  const handleEditClick = () => {
    setEditTime(!isEditTime);
    setIsButtonDisabled(true);
  };

  const handleCloseClick = () => {
    setEditTime(false);
    setIsButtonDisabled(false);
  };

  return (
    <div className="bg-white rounded-2xl h-[255px] flex gap-4 flex-col items-center justify-center border p-[20px_16px] ">
      <div className="flex items-center justify-center w-full">
        <Image src="/Crm/logo.png" alt="Logo" width="189" height="31" />
      </div>
      <div className="bg-green-light rounded-lg w-full">
        <div className="pt-[1.313rem] pb-[1.188rem] pl-3 flex flex-col gap-3  ">
          <div className="flex justify-between items-center pr-2">
            <h4 className="font-bold text-sm  text-dark">
              Open a bank account
            </h4>
            {isEditTime && (
              <div onClick={handleCloseClick}>
                <Cross className="cursor-pointer" />
              </div>
            )}
          </div>
          {isEditTime ? (
            <div className="flex items-center justify-between pr-4">
              <div className="inline-flex items-start gap-2">
                <div className="w-9 h-9 rounded border border-dark-5 bg-white flex items-center cursor-pointer justify-center">
                  <CheckIcon />
                </div>
                <div className="w-9 h-9 rounded border border-dark-5 bg-white flex items-center cursor-pointer justify-center">
                  <Sheduled />
                </div>
                <div className="w-9 h-9 rounded border border-dark-5 bg-white flex items-center cursor-pointer justify-center">
                  <Copy />
                </div>
              </div>
              <p className="text-primary text-sm font-bold not-italic mb-0">
                00:15
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div>
                  <Clock />
                </div>
                <p className="font-normal text-xs text-dark-3 mb-0">
                  02:30 PM - 03:00 PM
                </p>
              </div>
              <div className="flex gap-1">
                <div onClick={handleEditClick}>
                  <Edit className="cursor-pointer" />
                </div>
                <PlayCircle className="cursor-pointer" />
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        disabled={isButtonDisabled}
        className={`flex gap-[6px] justify-center items-center py-[10px] px-[20px]  w-full h-9 rounded-[6.25rem]  ${
          isButtonDisabled
            ? "bg-dark-7 opacity-40 cursor-not-allowed"
            : "bg-btn-primary-gradient  hover:bg-btn-primary-gradient-hover"
        }  `}
      >
        <div>
          <Plusicon />
        </div>
        <div>
          <p className="text-dark font-bold text-[13px] mb-0">Add Task</p>
        </div>
      </button>
    </div>
  );
};

export default DealerPlex;
