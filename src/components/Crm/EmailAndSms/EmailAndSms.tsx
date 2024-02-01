import React from "react";
import { MessageIcon } from "@/components/Icons/Icons";
const SalesActivityList = [
  {
    id: 1,
    heading: "Call In",
    totalRecord: "10",
    //   icon: <CallIn className="w-5 h-5" />,
  },
  {
    id: 2,
    //   heading: "Call Out",
    totalRecord: "18",
    //   icon: <CallOut className="w-5 h-5" />,
  },
  {
    id: 3,
    //   heading: "Email Sent",
    totalRecord: "60",
    //   icon: <EmailSent className="w-5 h-5" />,
  },
  {
    id: 4,
    //   heading: "SMS Sent",
    totalRecord: "50",
    //   icon: <SmsSent className="w-5 h-5" />,
  },
  {
    id: 5,
    //   heading: "Appt Scheduled",
    totalRecord: "15",
    //   icon: <ApptScheduled className="w-5 h-5" />,
  },
  {
    id: 6,
    //   heading: "Appt Complete",
    totalRecord: "20",
    //   icon: <ApptComplete className="w-5 h-5" />,
  },
];

const EmailAndSms = () => {
  return (
    <section>
      <div className="border p-[24px_16px]">
        <div className="flex justify-between items-end mb-3">
          <h1 className="text-lg font-bold text-dark">Email and SMS</h1>
          <span className="text-[10px] font-normal">See All</span>
        </div>
        <div className="border-t py-4">
          <div className="relative mb-3 pl-[20px] ">
            <div className="absolute top-0 left-0">
              <MessageIcon className="w-[16px] 2xl:w-[20px]" />
            </div>
            <div className="relative mb-3 flex items-center justify-between gap-[5px]">
              <h1 className="text-xs font-bold text-dark">Wade Warren</h1>
              <span className="text-[#5D6878] text-[9px] font-bold">
                Today 06:00 PM
              </span>
            </div>
            <p className="text-[10px] text-dark-3 mb-3 truncate">
              Ut enim ad minim veniam, quis nostrud exercitation n
              asjddbsaandlsandlkasd
            </p>
          </div>
          <div className="flex justify-end gap-3 ">
            <span className="p-[4px_8px] rounded-[100px] bg-dark text-[#FFFFFF] text-[10px] font-bold tracking-[0.9px] uppercase">
              A.i warm up
            </span>
            <span className="p-[4px_8px] rounded-[100px] border border-[#4B5768] text-[#4B5768] text-[10px] font-bold tracking-[0.9px] uppercase">
              Mannual warm up
            </span>
          </div>
        </div>
        <div className="border-t py-4">
          <div className="relative mb-3 pl-[20px] ">
            <div className="absolute top-0 left-0">
              <MessageIcon className="w-[16px] 2xl:w-[20px]" />
            </div>
            <div className="relative mb-3 flex items-center justify-between gap-[5px]">
              <h1 className="text-xs font-bold text-dark">Robert Fox</h1>
              <span className="text-[#5D6878] text-[9px] font-bold">
                Today 06:00 PM
              </span>
            </div>
            <p className="text-[10px] text-dark-3 mb-3 truncate">
              Ut enim ad minim veniam, quis nostrud exercitation n
              asjddbsaandlsandlkasd
            </p>
          </div>
          <div className="flex justify-end gap-3 ">
            <span className="p-[4px_8px] rounded-[100px] bg-dark text-[#FFFFFF] text-[10px] font-bold tracking-[0.9px] uppercase">
              A.i warm up
            </span>
            <span className="p-[4px_8px] rounded-[100px] border border-[#4B5768] text-[#4B5768] text-[10px] font-bold tracking-[0.9px] uppercase">
              Mannual warm up
            </span>
          </div>
        </div>
        <div className="border-t py-4">
          <div className="relative mb-3 pl-[20px] ">
            <div className="absolute top-0 left-0">
              <MessageIcon className="w-[16px] 2xl:w-[20px]" />
            </div>
            <div className="relative mb-3 flex items-center justify-between gap-[5px]">
              <h1 className="text-xs font-bold text-dark">Guy Hawkins</h1>
              <span className="text-[#5D6878] text-[9px] font-bold">
                Today 06:00 PM
              </span>
            </div>
            <p className="text-[10px] text-dark-3 mb-3 truncate">
              Ut enim ad minim veniam, quis nostrud exercitation n
              asjddbsaandlsandlkasd
            </p>
          </div>
          <div className="flex justify-end gap-3 ">
            <span className="p-[4px_8px] rounded-[100px] bg-dark text-[#FFFFFF] text-[10px] font-bold tracking-[0.9px] uppercase">
              A.i warm up
            </span>
            <span className="p-[4px_8px] rounded-[100px] border border-[#4B5768] text-[#4B5768] text-[10px] font-bold tracking-[0.9px] uppercase">
              Mannual warm up
            </span>
          </div>
        </div>
        <div className="border-t py-4">
          <div className="relative mb-3 pl-[20px] ">
            <div className="absolute top-0 left-0">
              <MessageIcon className="w-[16px] 2xl:w-[20px]" />
            </div>
            <div className="relative mb-3 flex items-center justify-between gap-[5px]">
              <h1 className="text-xs font-bold text-dark">Wade Warren</h1>
              <span className="text-[#5D6878] text-[9px] font-bold">
                Today 06:00 PM
              </span>
            </div>
            <p className="text-[10px] text-dark-3 mb-3 truncate">
              Ut enim ad minim veniam, quis nostrud exercitation n
              asjddbsaandlsandlkasd
            </p>
          </div>
          <div className="flex justify-end gap-3 ">
            <span className="p-[4px_8px] rounded-[100px] bg-dark text-[#FFFFFF] text-[10px] font-bold tracking-[0.9px] uppercase">
              A.i warm up
            </span>
            <span className="p-[4px_8px] rounded-[100px] border border-[#4B5768] text-[#4B5768] text-[10px] font-bold tracking-[0.9px] uppercase">
              Mannual warm up
            </span>
          </div>
        </div>
        <div className="border-t py-4">
          <div className="relative mb-3 pl-[20px] ">
            <div className="absolute top-0 left-0">
              <MessageIcon className="w-[16px] 2xl:w-[20px]" />
            </div>
            <div className="relative mb-3 flex items-center justify-between gap-[5px]">
              <h1 className="text-xs font-bold text-dark">Wade Warren</h1>
              <span className="text-[#5D6878] text-[9px] font-bold">
                Today 06:00 PM
              </span>
            </div>
            <p className="text-[10px] text-dark-3 mb-3 truncate">
              Ut enim ad minim veniam, quis nostrud exercitation n
              asjddbsaandlsandlkasd
            </p>
          </div>
          <div className="flex justify-end gap-3 ">
            <span className="p-[4px_8px] rounded-[100px] bg-dark text-[#FFFFFF] text-[10px] font-bold tracking-[0.9px] uppercase">
              A.i warm up
            </span>
            <span className="p-[4px_8px] rounded-[100px] border border-[#4B5768] text-[#4B5768] text-[10px] font-bold tracking-[0.9px] uppercase">
              Mannual warm up
            </span>
          </div>
        </div>
        <div className="border-t py-4">
          <div className="relative mb-3 pl-[20px] ">
            <div className="absolute top-0 left-0">
              <MessageIcon className="w-[16px] 2xl:w-[20px]" />
            </div>
            <div className="relative mb-3 flex items-center justify-between gap-[5px]">
              <h1 className="text-xs font-bold text-dark">Wade Warren</h1>
              <span className="text-[#5D6878] text-[9px] font-bold">
                Today 06:00 PM
              </span>
            </div>
            <p className="text-[10px] text-dark-3 mb-3 truncate">
              Ut enim ad minim veniam, quis nostrud exercitation n
              asjddbsaandlsandlkasd
            </p>
          </div>
          <div className="flex justify-end gap-3 ">
            <span className="p-[4px_8px] rounded-[100px] bg-dark text-[#FFFFFF] text-[10px] font-bold tracking-[0.9px] uppercase">
              A.i warm up
            </span>
            <span className="p-[4px_8px] rounded-[100px] border border-[#4B5768] text-[#4B5768] text-[10px] font-bold tracking-[0.9px] uppercase">
              Mannual warm up
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailAndSms;
