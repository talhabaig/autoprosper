import AutoProsperAdvnatage from "@/components/home/AutoProsperAdvnatage";
import ConsultancyAndGrouth from "@/components/home/ConsultancyAndGrouth";
import DiscountCreditHistory from "@/components/home/DiscountCreditHistory";
import Discover from "@/components/home/Discover";
import FindandMake from "@/components/home/FindandMake";
import FirstTimeBuyer from "@/components/home/FirstTimeBuyer";
import GuideAndTips from "@/components/home/GuideAndTips";
import Hero from "@/components/home/Hero";
import UpgradeRide from "@/components/home/UpgradeRide";

export default function Home() {
  return (
    <main>
      <Hero />
      <Discover />
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
