import SellTradeVehicle from "@/components/SellOrTrade/SellTradeVehicle";
import NavigationBar from "../../components/ui/Navigations/navigationBar";

import React from "react";

const page = () => {
  return (
    <>
      <NavigationBar  variant ='dark'/>
      <SellTradeVehicle />
    </>
  );
};

export default page;
