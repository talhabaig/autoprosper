import AutoRepairOnDemand from "@/components/Service/AutoRepairOnDemand/AutoRepairOnDemand";
import ClientReviewSlider from "@/components/Service/ClientReviewSlider/ClientReviewSlider";
import DriveawayAutoDiagnostic from "@/components/Service/DrivewayAndAutoDiagnostic/DriveawayAutoDiagnostic";
import FaqAccordion from "@/components/Service/FaqAccordion/FaqAccordion";
import MediaAndPartners from "@/components/Service/MediaAndPartners/MediaAndPartners";
import ServiceBanner from "@/components/Service/ServiceBanner/page";
import ServiceAccordion from "@/components/Service/ServiceShopAccordion/ServiceAccordion";
import TreatYourSelfToValet from "@/components/Service/TreatYourSelfToValet/TreatYourSelfToWalet";
import Footer from "@/components/SiteFooter/Footer";
import FirstTimeBuyer from "@/components/home/FirstTimeBuyer/FirstTimeBuyer";
import React from "react";


const page = () => {
  return (
    <>
      <main>
        <ServiceBanner />
        <AutoRepairOnDemand />
        <ClientReviewSlider />
        <MediaAndPartners />
        <ServiceAccordion />
        <FirstTimeBuyer />
        <DriveawayAutoDiagnostic />
        <FaqAccordion />
        <TreatYourSelfToValet />
      </main>
      <Footer />
    </>
  );
};

export default page;
