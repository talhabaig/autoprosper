import React from "react";

const TotalLoanInformation = () => {
  const data = {
    title: "Total loan amount (owed to Bank)",
    monthlyPayment: "Monthly payment (1st due 01 mar2024)",
    totalAmount: "$20,811.25",
  };
  return (
    <div className="bg-white py-[23px] px-[16px] rounded-2xl">
      <div className="flex flex-col md:flex-row gap-[12px] md:gap-[16px] items-center">
        <div className="text-dark text-sm md:text-lg font-bold">
          {data.title}
        </div>
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-[48px] items-start md:items-center">
          <div className="bg-dark-7 px-[8px] md:px-[10px] py-[4px] md:py-[5px] rounded-full text-dark-3 font-bold text-[10px] leading-[12.6px] md:text-xs tracking-[0.09em]">
            {data.monthlyPayment}
          </div>
          <div className="bg-dark px-[20px] py-[13px] text-white text-[13px] font-bold rounded-full">
            {data.totalAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalLoanInformation;
