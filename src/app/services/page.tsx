import ServiceBanner from "@/components/Service/ServiceBanner/page";
import FirstTimeBuyer from "@/components/home/FirstTimeBuyer/FirstTimeBuyer";
import React from "react";

const page = () => {
  return (
    <main>
      <ServiceBanner />
      <FirstTimeBuyer/>
    </main>
  );
};

export default page;
