import GetPreQualified from "@/components/GetPreQualified/GetPreQualified";
import NavigationBar from "../../components/ui/Navigations/navigationBar";

import React from "react";

const page = () => {
  return (
    <>
      <NavigationBar variant ='dark'/>
      <GetPreQualified />
    </>
  );
};

export default page;
