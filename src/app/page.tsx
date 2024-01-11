import AutoProsperAdvnatage from "@/components/home/AutoProsperAdvnatage/AutoProsperAdvnatage";
import ConsultancyAndGrouth from "@/components/home/ConsultancyAndGrouth/ConsultancyAndGrouth";
import DiscountCreditHistory from "@/components/home/DiscountCreditHistory/DiscountCreditHistory";
import FindandMake from "@/components/home/FindandMake/FindandMake";
import FirstTimeBuyer from "@/components/home/FirstTimeBuyer/FirstTimeBuyer";
import GuideAndTips from "@/components/home/GuideAndTips/GuideAndTips";
import UpgradeRide from "@/components/home/UpgradeRide/UpgradeRide";


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
