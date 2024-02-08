import React from 'react'
export const AppointmentsAndSaleFunnel = () => {
    return (
        <div className='bg-white  h-[45.938rem] lg:h-[25.688rem] border rounded-2xl border-dark-5 flex items-center justify-center flex-col gap-4  w-full  p-[24px_16px]'>
            <div className='lg:hidden flex justify-start w-full'>
                <h5 className=" font-bold text-lg text-dark not-italic ">Sales funnel - Last 30 Day
                    (S)</h5>
            </div>
            <div className="flex w-full lg:flex-row-reverse flex-col gap-4">

                <div className="flex flex-col gap-3 items-center lg:w-[64.5%] lg:gap-5">
                    <h5 className="hidden lg:block mb-0  font-bold text-lg text-dark not-italic w-full">Sales funnel - Last 30 Day
                        (S)</h5>
                    <div className="lg:flex lg:flex-row lg:w-full lg:justify-evenly">
                        <div className="flex flex-col  items-center gap-[1px] w-[17.25rem] h-[16.5rem]">
                            <div className="bg-no-repeat bg-center bg-cover w-full h-[3.25rem] flex flex-col justify-center items-center bg-Rectangle-red"
                            >
                                <p className="text-white text-sm font-bold mb-0">100</p>
                                <p className="text-white text-[10px] font-normal mb-0">New</p>
                            </div>
                            <div className="bg-no-repeat bg-center bg-cover h-[3.25rem] w-[14.75rem] flex flex-col justify-center items-center bg-Rectangle-yellow"
                            >
                                <p className="mb-0 text-dark text-sm font-bold">80</p>
                                <p className="mb-0 text-dark text-[10px] font-normal">Contacted</p>
                            </div>
                            <div className="bg-no-repeat bg-center bg-cover h-[3.25rem] w-[12.625rem] flex flex-col justify-center items-center bg-Rectangle-green "
                            >
                                <p className="mb-0 text-dark text-sm font-bold">60</p>
                                <p className="mb-0 text-dark text-[10px] font-normal">APPT. Scheduled</p>
                            </div>
                            <div className="bg-no-repeat bg-center bg-cover h-[3.25rem] w-[10.75rem] flex flex-col justify-center items-center bg-Rectangle-blue">
                                <p className="mb-0 text-white text-sm font-bold">25</p>
                                <p className="mb-0 text-white text-[10px] font-normal">Visits</p>
                            </div>
                            <div className="bg-no-repeat bg-center bg-cover h-[3.25rem] w-[9.188rem] flex flex-col justify-center items-center bg-Rectangle"
                            >
                                <p className="mb-0 text-white text-sm font-bold">15</p>
                                <p className="mb-0 text-white text-[10px] font-normal">Sold</p>
                            </div>
                        </div>
                        <div className="hidden w-[18.25rem] lg:w-auto lg:justify-center lg:flex-col lg:flex items-start justify-start gap-4 flex-wrap">
                            <div className="flex flex-col w-[8.625rem] lg:w-36 h-9 gap-1">
                                <div className="flex gap-2">
                                    <div className="w-[10px] h-[10px] rounded-full mt-[3px] bg-primary"></div>
                                    <p className="text-dark mb-0 font-bold text-xs not-italic">1 Day</p>
                                </div>
                                <p className="text-dark-3 mb-0 font-normal text-center text-[10px] not-italic">Avg.
                                    before contacted</p>
                            </div>
                            <div className="flex flex-col w-[8.625rem]  lg:w-36 h-9 gap-1">
                                <div className="flex gap-2">
                                    <div className="w-[10px] h-[10px] rounded-full mt-[3px] bg-yellow"></div>
                                    <p className="text-dark mb-0 font-bold text-xs not-italic">1 Day</p>
                                </div>
                                <p className="text-dark-3 mb-0 font-normal text-center text-[10px] not-italic">Avg.
                                    in contacted</p>
                            </div>
                            <div className="flex flex-col w-[8.625rem] lg:w-36 h-9 gap-1">
                                <div className="flex gap-2">
                                    <div className="w-[10px] h-[10px] rounded-full mt-[3px] bg-green"></div>
                                    <p className="text-dark mb-0 font-bold text-xs not-italic">2 Days</p>
                                </div>
                                <p className="text-dark-3 mb-0 font-normal text-center text-[10px] not-italic">Avg.
                                    in Schedule</p>
                            </div>
                            <div className="flex flex-col w-[8.625rem] lg:w-36 h-9 gap-1">
                                <div className="flex gap-2">
                                    <div className="w-[10px] h-[10px] rounded-full mt-[3px] bg-status-info"></div>
                                    <p className="text-dark mb-0 font-bold text-xs not-italic">1 Day</p>
                                </div>
                                <p className="text-dark-3 mb-0 font-normal text-center text-[10px] not-italic">Avg.
                                    after visit</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center  lg:gap-[15px]">
                        <p className="mb-0 font-normal text-[16px] text-dark-3"><span
                            className="text-dark font-semibold">100</span> Total Leads</p>
                        <div className="lg:w-[0.313rem] lg:h-[0.313rem] rounded-full bg-dark"></div>
                        <p className="mb-0 font-normal text-[16px] text-dark-3"><span
                            className="text-dark font-semibold">15%</span> Lead conversion Rate</p>
                    </div>
                    <div className="w-full lg:hidden flex items-start justify-start gap-4 ">
                        <div className='w-1/2 flex flex-col gap-2 items-center'>
                            <div className="flex flex-col w-[8.625rem] lg:w-36 h-9 gap-1">
                                <div className="flex gap-2">
                                    <div className="w-[10px] h-[10px] rounded-full mt-[3px] bg-primary"></div>
                                    <p className="text-dark mb-0 font-bold text-xs not-italic">1 Day</p>
                                </div>
                                <p className="text-dark-3 mb-0 font-normal text-center text-[10px] not-italic">Avg.
                                    before contacted</p>
                            </div>
                            <div className="flex flex-col w-[8.625rem]  lg:w-36 h-9 gap-1">
                                <div className="flex gap-2">
                                    <div className="w-[10px] h-[10px] rounded-full mt-[3px] bg-yellow"></div>
                                    <p className="text-dark mb-0 font-bold text-xs not-italic">1 Day</p>
                                </div>
                                <p className="text-dark-3 mb-0 font-normal text-center text-[10px] not-italic">Avg.
                                    in contacted</p>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col gap-2 items-center'>
                            <div className="flex flex-col w-[8.625rem] lg:w-36 h-9 gap-1">
                                <div className="flex gap-2">
                                    <div className="w-[10px] h-[10px] rounded-full mt-[3px] bg-green"></div>
                                    <p className="text-dark mb-0 font-bold text-xs not-italic">2 Days</p>
                                </div>
                                <p className="text-dark-3 mb-0 font-normal text-center text-[10px] not-italic">Avg.
                                    in Schedule</p>
                            </div>
                            <div className="flex flex-col w-[8.625rem] lg:w-36 h-9 gap-1">
                                <div className="flex gap-2">
                                    <div className="w-[10px] h-[10px] rounded-full mt-[3px] bg-status-info"></div>
                                    <p className="text-dark mb-0 font-bold text-xs not-italic">1 Day</p>
                                </div>
                                <p className="text-dark-3 mb-0 font-normal text-center text-[10px] not-italic">Avg.
                                    after visit</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[1px] lg:h-[22.688rem]  border border-dark-5 "></div>
                <div className="flex flex-col justify-center items-start w-full lg:w-[33.5%]  gap-3">
                    <h5 className=" text-start font-bold text-lg text-dark not-italic">Appointments
                    </h5>
                    <div className=" flex flex-col gap-3 justify-center items-start h-[8.313rem] w-full  lg:h-[19.813rem]">
                        <div
                            className="w-full  lg:h-[5.938rem] h-[3.438rem] border rounded-2xl border-dark-5 bg-green-light flex justify-center items-center  font-bold text-lg text-dark not-italic">
                            Points
                        </div>
                        <div className="flex lg:flex-col gap-3 w-full">
                            <div
                                className="w-1/2 lg:w-full h-[4.125rem]  lg:h-[5.938rem] lg:border-0 border rounded-2xl border-dark-5 bg-white flex flex-col gap-[2px] justify-center items-center  font-bold text-lg text-dark not-italic leading-[23.4px]">
                                <div>20</div>
                                <div className="font-normal text-[10px] leading-[15px]  text-dark-3">Total Attained</div>
                            </div>
                            <div
                                className="w-1/2 lg:w-full h-[4.125rem]  lg:h-[5.938rem] lg:border-0 border rounded-2xl border-dark-5 bg-white flex flex-col gap-[2px] justify-center items-center  font-bold text-lg text-dark not-italic leading-[23.4px]">
                                <div>10</div>
                                <div className="font-normal leading-[15px] text-[10px] text-dark-3">Current Daily target
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};