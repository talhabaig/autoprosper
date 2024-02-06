import {
    Clock,
    Edit,
    PlayCircle,
    Plusicon,
} from "@/components/Icons/Icons";

import React from 'react'
import Image from "next/image";
export const DealerPlex = () => {
    return (
        <div className='bg-white rounded-2xl h-[255px] flex gap-4 flex-col items-center justify-center border p-[20px_16px] overflow-y-auto'>
            <div className="flex items-center justify-center w-full">
                <Image
                    src="/Crm/logo.png"
                    alt="Logo"
                    width="189"
                    height="31"
                />
            </div>
            <div className='bg-green-light rounded-lg w-full'>
                <div className="pt-[1.313rem] pb-[1.188rem] pl-3 flex flex-col gap-2  ">
                    <h4 className="font-bold text-sm  text-dark">Open a bank account
                    </h4>
                    <div className="flex gap-2">
                        <div>
                            <Clock />
                        </div>
                        <p className="font-normal text-xs  text-dark-3 mb-0"> 02:30 PM_ 03:00 PM</p>
                    </div>
                    <div className="flex gap-1">
                        <Edit />
                        <PlayCircle />
                    </div>
                </div>
            </div>

            <button
                className="flex gap-[6px] justify-center items-center py-[10px] px-[20px]  w-full h-9 rounded-[6.25rem] bg-custom ">
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
