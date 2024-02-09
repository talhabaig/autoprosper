import {
    Usericon,
    MailIcon,
    Cloudicon,
    LeftArrow,
    RightArrow,
} from "@/components/Icons/Icons";

import React from 'react'
export const Appointment = () => {
    return (
        <div className='bg-white rounded-2xl flex gap-4 flex-col items-center justify-center  border p-[24px_16px] w-full'>
            <h5 className="font-bold text-lg w-full text-left text-dark not-italic">Appointments</h5>
            <div className="w-full flex flex-col gap-4">
                <div className="flex flex-row md:flex-col md:items-start items-center gap-3">
                    <h4 className="font-bold text-sm text-dark">Today 06:00 PM
                    </h4>
                    <div
                        className="flex items-center justify-center gap-2 rounded-[6.325rem] bg-status-warning py-1 px-2 text-white  text-[10px] not-italic font-bold uppercase tracking-[0.9px]">
                        In Progress
                    </div>
                </div>
                <div className="flex flex-col flex-start gap-4">
                    <div className="flex gap-[0.313rem]">
                        <div>
                            <Usericon />
                        </div>
                        <h4 className="font-bold text-sm not-italic text-dark">Wade Warren
                        </h4>
                    </div>
                    <div className="w-[6.875rem] h-12 pl-[1.688rem] flex flex-col gap-3">
                        <div className="flex gap-[0.313rem] items-center w-max">
                            <div>
                                <MailIcon />
                            </div>
                            <p className="font-normal text-[12px] leading-[18px] text-dark-3 mb-0">(704)
                                555-0127</p>
                        </div>
                        <div className="flex gap-[0.313rem] items-center w-max">
                            <div>
                                <Cloudicon />
                            </div>
                            <p className=" font-normal text-[12px] leading-[18px] text-dark-3 mb-0">
                                Credit
                                app</p>
                        </div>
                    </div>
                    <div className="flex gap-3 flex-col">
                        <h4 className="font-bold text-xs not-italic text-dark">2024 TOYOTA CAMRY
                        </h4>
                        <div className="flex gap-[0.313rem]">
                            <div className="">
                                <Usericon width="16" height="16" fill="#5D6878" />
                            </div>
                            <p className="font-normal not-italic text-xs text-dark-3 mb-0">Rep: Frank
                                Seth
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <button
                        className=" flex justify-center items-center  py-[0.313rem] px-[0.625rem] text-white bg-dark rounded-[100px]  font-bold text-[10px] not-italic uppercase  cursor-pointer tracking-[0.9px]">
                        A.i warm up
                    </button>
                    <button
                        className=" flex justify-center items-center py-[0.313rem] px-[0.625rem] text-dark-4 border border-dark-4 rounded-[100px] font-bold text-[10px] not-italic uppercase tracking-[0.9px] cursor-pointer">
                        Mannual warm up
                    </button>
                </div>
                <div className=" border border-dark-5 "></div>
                <div className="flex gap-4 flex-col items-center justify-center">
                    <div className="w-[13.75rem] lg:w-44 h-11 flex items-center justify-between ">
                        <div>
                            <p className="text-dark-4  font-normal text-xs text-center mb-0">Today</p>
                            <p className="font-bold text-lg text-dark not-italic text-center mb-0">01</p>
                        </div>
                        <div className="h-11 border border-dark-5"></div>
                        <div>
                            <p className="text-dark-4 font-normal text-xs text-center mb-0">This Week</p>
                            <p className="font-bold text-lg text-dark not-italic text-center mb-0">07</p>
                        </div>
                        <div className="h-11 border border-dark-5"></div>
                        <div>
                            <p className="text-dark-4 font-normal text-xs text-center mb-0">Next 72H</p>
                            <p className="  font-bold text-lg text-dark not-italic text-center mb-0">03</p>
                        </div>
                    </div>
                    <div className="w-[10.938rem] h-6 flex items-center justify-between">
                        <LeftArrow className="cursor-pointer" />
                        <p className="text-dark-4 mb-0 text-xs">1/5 UPCOMING</p>
                        <RightArrow className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};