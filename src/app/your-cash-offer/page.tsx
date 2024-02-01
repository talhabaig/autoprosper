import NavigationBar from "../../components/ui/Navigations/navigationBar";

import React from "react";
import YourCashOffer from "@/components/SellOrTrade/YourCashOffer/YourCashOffer";

const page = () => {
  return (
    <>
      <NavigationBar  variant ='dark'/>
       <YourCashOffer />
    </>
  );
};

export default page;
