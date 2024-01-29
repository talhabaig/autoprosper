import GetPreQualified from "@/components/GetPreQualified/GetPreQualified";
import NavigationBar from "../../components/ui/Navigations/navigationBar";


import React from "react"; 
import Footer from "@/components/SiteFooter/Footer";


const page = () => {
  return (
    <>
      <NavigationBar variant="dark" />
      <GetPreQualified />
      <Footer/>
      
    </>
  );
};

export default page;
