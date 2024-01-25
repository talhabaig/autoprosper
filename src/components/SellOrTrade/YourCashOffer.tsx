"use client"
import React from 'react'
import Image from 'next/image';
import { EllipseGradient } from '../ui/ellipseGradient';
import Button from "../Common/Button/Button";

const YourCashOffer = () => {
  return (
    <div>
        <div className="flex min-h-[187px] relative justify-center">
            <Image
                src='/home/red-toyota.png'
                alt="car image"
                className="relative z-10 object-contain"
                width="348"
                height="174"
            />
            <EllipseGradient className="absolute z-0"/>
        </div>

        <span>$375*</span> 
        <p>2024 Nissan Kicks®</p>
        <p>Kicks® SR</p>

        <Button variant="primary" label="Find vehicle" className="" />

        <p>Let's gather your documents and get you paid.</p>

        <Button variant="transparent" label="Find vehicle" className="" />

        <p>Put your offer toward your next ride and start shopping.</p>

        <span>Not sure yet? Save this Offer</span>

    </div>
  )
}

export default YourCashOffer