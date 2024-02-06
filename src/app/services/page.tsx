import AutoRepairOnDemand from "@/components/Service/AutoRepairOnDemand/AutoRepairOnDemand";
import ClientReviewSlider from "@/components/Service/ClientReviewSlider/ClientReviewSlider";
import DriveawayAutoDiagnostic from "@/components/Service/DrivewayAndAutoDiagnostic/DriveawayAutoDiagnostic";
import ServiceBanner from "@/components/Service/ServiceBanner/page";
import TreatYourSelfToValet from "@/components/Service/TreatYourSelfToValet/TreatYourSelfToWalet";
import FirstTimeBuyer from "@/components/home/FirstTimeBuyer/FirstTimeBuyer";
import React from "react";

const page = () => {
  return (
    <main>
      <ServiceBanner />
      <AutoRepairOnDemand/>
      <ClientReviewSlider/>
      {/* <FirstTimeBuyer/> */}
      <FirstTimeBuyer/>
      <DriveawayAutoDiagnostic/>
 
      <TreatYourSelfToValet/>
    </main>
  );
};

export default page;
