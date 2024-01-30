import { NissanIcon, ToyotaIcon, VwIcon } from "@/components/Icons/BrandIcons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Section, SectionDesc, SectionHeader } from "@/components/ui/section";
import { CarouselData } from "@/components/ui/CarouselCard/type";
import CarouselCard from "@/components/ui/CarouselCard";

const customers = [
  "/home/customers/1.jpg",
  "/home/customers/2.jpg",
  "/home/customers/3.jpg",
  "/home/customers/4.jpg",
  "/home/customers/5.jpg",
  "/home/customers/6.jpg",
  "/home/customers/7.jpg",
  "/home/customers/8.jpg",
];

const ProsperingCustomers: React.FC = () => {
  return (
    <Section className="bg-dark !flex-col md:!px-0">
      <div className="w-full md:max-w-[690px] px-[15px] md:px-0 flex flex-col items-center mx-auto text-center">
        <SectionHeader className="text-primary-light">
          Delivery to prospering customers
        </SectionHeader>
        <SectionDesc className="text-dark-6">
          Chronicles of the moment the keys are handed over in your driveway,
          the daily drive or feeling your vacation vibes. <span className="bg-rainbow-gradient bg-clip-text text-transparent">Use
          #DeliveredByDriveway</span> for a chance to be featured in our happy drivers
          gallery.
        </SectionDesc>
      </div>
      <div className="w-full">
        <Carousel
          className="w-full flex flex-col md:block max-w-[1728px] lg:mx-auto"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {customers.map((customer, index) => (
              <CarouselItem
                key={"carousel"+index}
                className="basis-1/4 lg:basis-[15%]"
              >
                <img
                  src={customer}
                  className="w-[210px] h-auto rounded-xl"
                  alt="prospering customers"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
};

export default ProsperingCustomers;
