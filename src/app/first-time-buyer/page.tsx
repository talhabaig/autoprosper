// pages/index.js
"use client";
// pages/index.js
import StepForm from "@/components/FirstTimeBuyer/StepForm";
import { FirstTimeBuyer } from "@/assests/interfaces/Home/index";

const Home = () => {
  const handleDataLog = (data: FirstTimeBuyer) => {
    // Log data in the parent component
    console.log("Data logged in parent component:", data);
    // You can perform additional actions with the data in the parent component
  };

  return (
    <>
      <StepForm onDataLog={handleDataLog} />
    </>
  );
};

export default Home;
