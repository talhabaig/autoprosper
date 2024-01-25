import ProductSingle from "@/components/ProductDetail/ProductSingle";
import NavigationBar from "../../components/ui/Navigations/navigationBar";

import React from "react";
import Footer from "@/components/footer/Footer";

const page = () => {
  return (
    <>
      <NavigationBar variant ='dark' />
      <ProductSingle /> <Footer />
    </>
  );
};

export default page;
