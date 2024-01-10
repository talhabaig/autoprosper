import AutoProsperAdvnatage from "@/components/home/AutoProsperAdvnatage";
import ConsultancyAndGrouth from "@/components/home/ConsultancyAndGrouth";
import DiscountCreditHistory from "@/components/home/DiscountCreditHistory";
import FindandMake from "@/components/home/FindandMake";
import FirstTimeBuyer from "@/components/home/FirstTimeBuyer";
import GuideAndTips from "@/components/home/GuideAndTips";
import UpgradeRide from "@/components/home/UpgradeRide";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <DiscountCreditHistory />
      <FirstTimeBuyer/>
      <FindandMake/>
      <UpgradeRide/>
      <AutoProsperAdvnatage/>
      <ConsultancyAndGrouth/>
      <GuideAndTips/>
    </main>
  );
}
