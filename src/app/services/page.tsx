import AutoRepairOnDemand from "@/components/Service/AutoRepairOnDemand/AutoRepairOnDemand";
import ClientReviewSlider from "@/components/Service/ClientReviewSlider/ClientReviewSlider";
import ServiceBanner from "@/components/Service/ServiceBanner/page";
import FirstTimeBuyer from "@/components/home/FirstTimeBuyer/FirstTimeBuyer";
import React from "react";

const page = () => {
  return (
    <main>
      <ServiceBanner />
      <AutoRepairOnDemand/>
      <ClientReviewSlider/>
      {/* <FirstTimeBuyer/> */}
    </main>
  );
};

export default page;
