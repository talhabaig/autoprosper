import { Appointment } from "@/components/Crm/Appointments/Appointments";
import { AppointmentsAndSaleFunnel } from "@/components/Crm/AppointmentsAndSalesFunnel/AppointmentsAndSalesFunnel";
import { DealerPlex } from "@/components/Crm/DealerPlex/DealerPlex";
import { QuickFilters } from "@/components/Crm/QuickFilters/QuickFilters";
import EmailAndSms from "@/components/Crm/EmailAndSms/EmailAndSms";
import SalesActivity from "@/components/Crm/SalesActivity/SalesActivity";
import {Searchbar} from "@/components/Crm/Searchbar/Searchbar";

import React from "react";
import TasksList from "@/components/Crm/TasksList/TasksList";
import TaskAndRefresh from "@/components/Crm/AddTaskAndRefresh/TaskRefresh";
import AutomatedChat from "@/components/Crm/AutomatedChat/AutomatedChat";

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
      <div className="max-w-[1700px] mx-auto px-[15px]">
        <AppointmentsAndSaleFunnel/>
      </div>
      <div className="max-w-[324px] mx-auto px-[15px]">
        <QuickFilters />
      </div>
      <div>
        <TasksList/>
      </div>
<<<<<<< HEAD
      <div>
        <TaskAndRefresh/>
      </div>
      <div>
        <AutomatedChat/>
=======
      <div className="max-w-[1700px] mx-auto px-[15px]">
        <Searchbar/>
>>>>>>> 96cab682f20d5a9b98179d766bd3e2b55a6a28dc
      </div>
    </div>
  );
};

export default page;
