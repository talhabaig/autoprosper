import Image from "next/image";
import React from "react";

const CalculatingOffer: React.FC = () => {
  return (
    <div className="w-full">
      <Image
        src="/images/circleCar.png"
        width={200}
        height={200}
        alt="CircleCar Loading"
        className="mt-6 mx-auto md:mx-0"
      />
      <p className="text-center md:text-start  md:ml-7 text-[#4B5768] text-[14px] xl:text-[16px] font-[400] mt-3">
        Calculating your offer...
      </p>
    </div>
  );
};

export default CalculatingOffer;
