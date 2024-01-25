import React, { useState } from 'react'
import { ConvertibleIcon } from '../Icons/BodyStyleIcons'
import { Select } from '../ui/input';
import { ToyotaIcon } from '../Icons/BrandIcons';
import Image from 'next/image';
import { EllipseGradient } from '../ui/ellipseGradient';

interface FormData {
    color: string;
  }

const options = [
    { value: "option1", label: "Arctic Frost Pearl1" },
    { value: "option2", label: "Arctic Frost Pearl2" },
    { value: "option3", label: "Arctic Frost Pearl3" },
  ];
const YourVehicle = () => {
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

        <p>2024 Nissan Kicks®</p>
        <p><span>VIP</span> 1GNEK13Z82R12</p>

        <div className="block w-[350px] md:w-[456px] h-[72px] rounded-[12px]  indent-4 detailSelect">
          <Select
            options={options}
            onChange={(selectedOption: any) => {
              if (selectedOption) {
                const value = selectedOption.value;
                setFormData((prevData) => {
                  const updatedData = { ...prevData, state: value };
                  console.log("Updated Form Data:", updatedData);
                  return updatedData;
                });
              }
            }}
            placeholder="State"
            className="rectSelectWrapper"
            label="Color"
          />
        </div>
    </div>
  )
}

export default YourVehicle