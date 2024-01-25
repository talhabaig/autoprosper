import React, { useState } from 'react'
import { ConvertibleIcon } from '../Icons/BodyStyleIcons'
import { Select } from '../ui/input';
import { ToyotaIcon } from '../Icons/BrandIcons';
import Image from 'next/image';
import { EllipseGradient } from '../ui/ellipseGradient';
import Button from "../Common/Button/Button";

interface FormData {
    color: string;
  }

const options = [
    { value: "option1", label: "Arctic Frost Pearl1" },
    { value: "option2", label: "Arctic Frost Pearl2" },
    { value: "option3", label: "Arctic Frost Pearl3" },
  ];
const YourCashOffer = () => {
    const [formData, setFormData] = useState<FormData>({
        color: "",
     });
    
    const InputHandler = (fieldName: string, value: string) => {
        setFormData((prevData) => ({
          ...prevData,
          [fieldName]: value,
        }));
        console.log("Email changed:", formData);
    };
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