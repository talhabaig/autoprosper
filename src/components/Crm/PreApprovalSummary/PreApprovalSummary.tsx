import React from "react";

const PreApprovalSummary = () => {
  const data = {
    preApproved: {
      title: "PRE APPROVED",
    },
    loanStart: {
      label: "Loan Start",
      date: "25 Jan 2024",
      previousDate: "30 Dec 2023",
    },
    ltv: {
      value: "63.9%",
      label: "LTV",
    },
    pti: {
      value: "18.1%",
      label: "PTI",
    },
    apr: {
      label: "APR",
      value: "17.53%",
      previousValue: "17.54%",
    },
  };
  return (
    <div className="bg-white rounded-2xl flex flex-col divide-y-[1px] divide-dark-6 md:w-[252px]">
      <div className="text-dark font-bold text-lg py-[58px] text-center">
        {data.preApproved.title}
      </div>
      <div className="text-dark font-bold text-lg py-[30px]">
        <div className="flex gap-[10px] flex-col">
          <div className="text-dark-2 text-xs text-center">
            {data.loanStart.label}
          </div>
          <div className="text-dark font-bold text-lg text-center">
            {data.loanStart.date}
          </div>
          <div className="text-primary text-xs text-center">
            Was {data.loanStart.previousDate}
          </div>
        </div>
      </div>
      <div className="text-dark font-bold text-lg py-[44px] text-center flex flex-col gap-[10px]">
        <div className="text-dark font-bold text-lg text-center">
          {data.ltv.value}
        </div>
        <div className="text-dark-2 text-xs text-center">{data.ltv.label}</div>
      </div>
      <div className="text-dark font-bold text-lg py-[44px] text-center flex flex-col gap-[10px]">
        <div className="text-dark font-bold text-lg text-center">
          {data.pti.value}
        </div>
        <div className="text-dark-2 text-xs text-center">{data.pti.label}</div>
      </div>
      <div className="text-dark font-bold text-lg py-[30px]">
        <div className="flex gap-[10px] flex-col">
          <div className="text-dark-2 text-xs text-center">
            {data.apr.label}
          </div>
          <div className="text-dark font-bold text-lg text-center">
            {data.apr.value}
          </div>
          <div className="text-primary text-xs text-center">
            Was {data.apr.previousValue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreApprovalSummary;
