"use client";
import React, { useState } from "react";
import Button from "../../Common/Button/Button";
import LoginWithGoogle from "../LoginWithGoogle/LoginWithGoogle";
import LoginWithFaceBook from "../LoginWithFaceBook/LoginWithFaceBook";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  console.log("email", email);
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="max-w-[456px] mx-auto px-4">
        <h2 className="heading1 text-center mb-[12px]">Login</h2>
        <p
          className="text-dark-3 text-center mb-[24px] md:mb-8 lg:text-[1rem] 
           xl:leading-[150%]"
        >
          Your responses will be securely stored in your account, ensuring no
          sharing with dealers.
        </p>
        <div className="mb-[18px] md:mb-6">
          <input
            className="shadow appearance-none border w-full py-4 px-[18px] text-gray-700 leading-tight 
             focus:shadow-outline focus:outline-none focus:bg-white focus:border-dark rounded-[12px]
             hover:border-dark"
            id="username"
            type="email"
            placeholder="Email Adddress"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Link href="/">
          <Button
            variant="primary"
            label="Continue"
            className="min-w-full w-full mb-[18px] md:mb-6"
          />
        </Link>
        <div className="flex gap-[13px] text-dark-3 text-[14px] md:text-[1rem] items-center leading-[150%] mb-[18px] md:mb-6">
          <hr className="block w-full h-[1px] bg-dark-6" />
          <span>Or</span>
          <hr className="block w-full h-[1px] bg-dark-6" />
        </div>
        <LoginWithGoogle />
        <LoginWithFaceBook />
      </div>
    </section>
  );
};

export default Login;
