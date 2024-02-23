import React from "react";

const RelatedDatesSection = () => {
  const data = ["2021 Chevrolet Malibu", "2017 Nissan Maxima"];
  return (
    <div className="bg-white rounded-2xl flex flex-col md:flex-row px-[16px] py-[24px] gap-[12px] md:gap-[26px]">
      <div className="text-dark-3 text-sm font-semibold">Related dates:</div>
      <div className="flex flex-col md:flex-row gap-[8px] md:gap-[25px]">
        {data.map((date, index) => (
          <div
            key={index}
            className="text-xs md:text-sm font-bold text-primary"
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedDatesSection;
