import { Facebook } from "@/components/Icons/Icons";
import React from "react";

const LoginWithFaceBook = () => {
  return (
    <div
      className="w-full py-[12px] md:py-[18px] rounded-[100px] border border-solid border-dark-6 
      flex justify-center items-center gap-[12px] bg-white shadow-[0px_18px_36px_-18px_rgba(0,27,68,0.25)]
    text-dark-4 font-bold leading-[150%] mb-[4px] md:mb-[8px] cursor-pointer hover:bg-[#f0f0f0]"
    >
      <Facebook className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] fill-[#1877F2]" />{" "}
      Continue with Facebook
    </div>
  );
};

export default LoginWithFaceBook;
