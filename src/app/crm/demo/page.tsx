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
    </div>
  );
};

export default page;
