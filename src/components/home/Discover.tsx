import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Section, SectionDesc, SectionHeader } from "@/components/ui/section";
import { GradientCard, Card } from "@/components/ui/card";

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
      <div className="flex max-w-[690px] w-full justify-center">
        <GradientCard>
          <div className="flex flex-col gap-[30px] h-full w-full items-center justify-center bg-white rounded-md p-[40px]">
            <div className="grid grid-cols-3 w-full gap-5 ">
              <Card className="bg-gray-300 rounded h-[100px]"></Card>
              <Card className="bg-gray-300 rounded h-[100px]"></Card>
              <Card className="bg-gray-300 rounded h-[100px]"></Card>
              <Card className="bg-gray-300 rounded h-[100px]"></Card>
              <Card className="bg-gray-300 rounded h-[100px]"></Card>
              <Card className="bg-gray-300 rounded h-[100px]"></Card>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <Input
                type="text"
                label="Searching for"
                options={[{ label: "Charger", value: "Charger" }]}
              />
              <Input type="text" label="Searching for" />
              <Input
                type="text"
                label="Searching for"
                options={[{ label: "Charger", value: "Charger" }]}
              />
              <Input type="text" label="Searching for" />
            </div>

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
