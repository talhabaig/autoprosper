import React from "react";
import {
  FireIcon,
  BasicLocationIcon,
  BasicPhoneIcon,
  BasicMailIcon,
} from "@/components/Icons/Icons";

const UserProfile = () => {
  const userData = {
    fireIcons: 3,
    name: "Kyle Dyson",
    prospectId: "J5NTYX5P3E",
    address: "12101 Creek Point Dr Frisco TX 75035",
    phone: "(469) 266-3336",
    email: "kdodson11@yahoo.com",
  };
  return (
    <div className="flex flex-col bg-white rounded-2xl p-[24px_16px] gap-[12px]">
      <div className="flex gap-[2px]">
        {[...Array(userData.fireIcons)].map((_, index) => (
          <FireIcon key={index} />
        ))}
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[12px]">
          <h5 className="font-bold text-lg w-full text-left text-dark not-italic leading-[23.4px]">
            {userData.name}
          </h5>
          <p className="text-dark-2 text-xs font-normal leading-[18px] m-0">
            Prospect ID: {userData.prospectId}
          </p>
        </div>
        <div className="flex flex-col gap-[11px]">
          <div className="flex flex-row gap-[16px]">
            <BasicLocationIcon />
            <p className="text-dark-2 text-xs font-normal leading-[18px] m-0">
              {userData.address}
            </p>
          </div>
          <div className="flex flex-row gap-[16px]">
            <BasicPhoneIcon />
            <p className="text-dark-2 text-xs font-normal leading-[18px] m-0">
              {userData.phone}
            </p>
          </div>
          <div className="flex flex-row gap-[16px]">
            <BasicMailIcon />
            <p className="text-dark-2 text-xs font-normal leading-[18px] m-0">
              {userData.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
