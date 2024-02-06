import DriveawayAutoDiagnostic from "@/components/Service/DrivewayAndAutoDiagnostic/DriveawayAutoDiagnostic";
import ServiceBanner from "@/components/Service/ServiceBanner/page";
import TreatYourSelfToValet from "@/components/Service/TreatYourSelfToValet/TreatYourSelfToWalet";
import FirstTimeBuyer from "@/components/home/FirstTimeBuyer/FirstTimeBuyer";
import React from "react";

const page = () => {
  return (
    <main>
      <ServiceBanner />
      <FirstTimeBuyer/>
      <DriveawayAutoDiagnostic/>
 
      <TreatYourSelfToValet/>
    </main>
  );
};

export default page;
