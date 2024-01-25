import { CircleCar } from "@/assests/Images";
import Image from "next/image";
import React from "react";

const CalculatingOffer = () => {
  return (
    <div className="w-full">
      <Image
        src={CircleCar}
        width={200}
        height={200}
        alt="CircleCar"
        className="mt-5"
      />
      <p className="text-center text-[#4B5768] text-[16px] font-[400] mt-3">
        Calculating your offer...
      </p>
    </div>
  );
};

export default CalculatingOffer;
