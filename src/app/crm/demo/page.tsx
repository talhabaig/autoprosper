import { Appointment } from "@/components/Crm/Appointments/Appointments";
import { DealerPlex } from "@/components/Crm/DealerPlex/DealerPlex";
import EmailAndSms from "@/components/Crm/EmailAndSms/EmailAndSms";
import SalesActivity from "@/components/Crm/SalesActivity/SalesActivity";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-[324px] mx-auto px-[15px]">
        <SalesActivity />
      </div>
      <div className="max-w-[1700px] mx-auto px-[15px]">
        <EmailAndSms/>
      </div>
      <div className="max-w-[400px] mx-auto px-[15px]">
        <DealerPlex/>
      </div>
      <div className="max-w-[400px] mx-auto px-[15px]">
        <Appointment/>
      </div>
    </div>
  );
};

export default page;
