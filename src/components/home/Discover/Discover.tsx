import { Button } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import Image from "next/image";
import { Section, SectionDesc, SectionHeader } from "@/components/ui/section";
import { GradientCard, Card } from "@/components/ui/card";
import { SwitchWithLabel } from "@/components/ui/switch";

const Discover = () => {
  return (
    <Section>
      <div className="w-full md:max-w-[690px] flex flex-col items-center">
        <SectionHeader>
          Discover your purchasing alternatives now.
        </SectionHeader>
        <SectionDesc>
          Calculate your affordable car budget. Explore vehicles within your
          financial range based on your affordability assessment.
        </SectionDesc>
        <Image
          src="/images/yellow-car.png"
          alt="yellow car"
          width="690"
          height="342"
        />
      </div>
      <div className="flex md:max-w-[690px] w-full justify-center">
        <GradientCard variant="hide-on-mobile">
          <div className="flex flex-col gap-[30px] h-full w-full items-center justify-center bg-white rounded-md p-[32px]">
            <div className="grid grid-cols-2 w-full gap-5 ">
              <Card className="bg-light-gray rounded border-0 h-[100px]"></Card>
              <Card className="bg-light-gray rounded border-0 h-[100px]"></Card>
              <Card className="bg-light-gray rounded border-0 h-[100px]"></Card>
              <Card className="bg-light-gray rounded border-0 h-[100px]"></Card>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <Select
                type="text"
                label="Searching for"
                options={[{ label: "Charger", value: "Charger" }, { label: "Charger 2", value: "Charger" }, ]}
              />
              <Input currency="$" type="number" defaultValue="0" min="0" label="Down payment" />
              <Select
                type="text"
                label="Credit Score"
                options={[{ label: "670-739", value: "670-739" }]}
              />
              <Input currency="$" type="number" defaultValue="0" min="0" label="Monthly payment" />
            </div>
            <SwitchWithLabel label="Include trade-in" className="self-start" />
            <Button variant="gradient" className="w-full py-[18px]">
              SURPRISE ME
            </Button>
          </div>
        </GradientCard>
      </div>
    </Section>
  );
};

export default Discover;
