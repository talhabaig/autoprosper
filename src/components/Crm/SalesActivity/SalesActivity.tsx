import {
  ApptComplete,
  ApptScheduled,
  CallIn,
  CallOut,
  EmailSent,
  SmsSent,
} from "@/components/Icons/Icons";
import React from "react";

const SalesActivityList = [
  {
    id: 1,
    heading: "Call In",
    totalRecord: "10",
    icon: <CallIn className="w-5 h-5" />,
  },
  {
    id: 2,
    heading: "Call Out",
    totalRecord: "18",
    icon: <CallOut className="w-5 h-5" />,
  },
  {
    id: 3,
    heading: "Email Sent",
    totalRecord: "60",
    icon: <EmailSent className="w-5 h-5" />,
  },
  {
    id: 4,
    heading: "SMS Sent",
    totalRecord: "50",
    icon: <SmsSent className="w-5 h-5" />,
  },
  {
    id: 5,
    heading: "Appt Scheduled",
    totalRecord: "15",
    icon: <ApptScheduled className="w-5 h-5" />,
  },
  {
    id: 6,
    heading: "Appt Complete",
    totalRecord: "20",
    icon: <ApptComplete className="w-5 h-5" />,
  },
];

const SalesActivity = () => {
  return (
    <section>
      <div className="rounded-xl bg-white p-[24px_16px]">
        <h1 className="text-lg font-bold text-[#001B44] mb-3">
          Sales Activity
        </h1>
        {SalesActivityList.map((item, index) => (
          <div
            key={index}
            className="rounded-full py-[5px] pr-4 pl-[5px] bg-[#E2FFF5] flex items-center justify-between mb-2"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-[38px] h-[38px] rounded-full flex items-center justify-center
                
                ${
                  item.heading === "Call In"
                    ? "bg-status-info"
                    : item.heading === "Call Out"
                    ? "bg-primary"
                    : item.heading === "Email Sent"
                    ? "bg-status-warning"
                    : item.heading === "SMS Sent"
                    ? "bg-status-danger"
                    : item.heading === "Appt Scheduled"
                    ? "bg-purple"
                    : item.heading === "Appt Complete"
                    ? "bg-status-success"
                    : "bg-green-light"
                }`}
              >
                {item.icon}
              </div>
              <div className="text-dark-2 flex text-xs font-normal">
                {item.heading}{" "}
              </div>
            </div>
            <div className="text-dark text-sm font-bold">
              {item.totalRecord}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SalesActivity;
