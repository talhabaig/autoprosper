import { CrownIcon } from "@/components/Icons/Icons";
import { Button } from "@/components/ui/button";
import React from "react";

const Offers = () => {
  const offers = [
    {
      title: "2017 Nissan Maxima",
      status: "Pre-Approved",
      monthlyPayment: "$210",
      apr: "18.0%",
      loanAmount: "$16,065",
    },
    {
      title: "2017 Nissan Maxima",
      status: "Pre-Approved",
      monthlyPayment: "$210",
      apr: "18.0%",
      loanAmount: "$16,065",
    },
    {
      title: "2017 Nissan Maxima",
      status: "Pre-Approved",
      monthlyPayment: "$210",
      apr: "18.0%",
      loanAmount: "$16,065",
    },
    {
      title: "2017 Nissan Maxima",
      status: "Pre-Approved",
      monthlyPayment: "$210",
      apr: "18.0%",
      loanAmount: "$16,065",
    },
  ];
  return (
    <div className="flex flex-col gap-[12px] rounded-2xl p-[10px] bg-white ">
      <div className="rounded-xl bg-yellow flex flex-col gap-[10px] py-[16px] px-[12px] items-center">
        <CrownIcon />
        <div className="text-dark text-sm font-bold">You have {offers.length} offers</div>
      </div>
      {offers.map((offer, index) => (
        <div
          key={index}
          className="rounded-xl bg-green-light flex flex-col gap-[24px] py-[16px] px-[12px]"
        >
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <div className="text-dark font-bold text-sm text-center">
                {offer.title}
              </div>
              <div className="text-dark-3 text-[10px] leading-[15px] text-center">
                ({offer.status})
              </div>
            </div>
            <div className="text-[10px] leading-[15px] text-dark-4 text-center">
              <span className="text-dark font-bold text-lg">
                {offer.monthlyPayment}
              </span>
              /mo
            </div>
          </div>
          <div className="flex flex-col gap-[8px] border-t-[1px] border-dark-6 pt-[16px]">
            <div className="flex justify-between">
              <div className="text-dark-3 text-[10px] leading-[15px]">APR</div>
              <div className="text-dark font-bold text-xs ">{offer.apr}</div>
            </div>
            <div className="flex justify-between">
              <div className="text-dark-3 text-[10px] leading-[15px]">
                Loan Amount
              </div>
              <div className="text-dark font-bold text-xs">
                {offer.loanAmount}
              </div>
            </div>
          </div>
        </div>
      ))}
      <Button
        variant="gradient"
        size="md"
        className="!h-[36px] w-full !text-[13px]"
      >
        Add New Vehicle
      </Button>
    </div>
  );
};

export default Offers;
