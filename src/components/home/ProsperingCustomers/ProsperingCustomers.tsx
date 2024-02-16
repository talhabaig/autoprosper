"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Section, SectionDesc, SectionHeader } from "@/components/ui/section";
import { CarouselData } from "@/components/ui/CarouselCard/type";
import CarouselCard from "@/components/ui/CarouselCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="bg-dark py-[3rem]  2xl:py-[4rem] 3xl:py-[6rem]  overflow-x-hidden">
      <div
        data-aos="fade-right"
        className="w-full max-w-[380px] md:max-w-[480px] 2xl:max-w-[680px] md:px-0 flex flex-col items-center mx-auto text-center "
      >
        <h2
          className={` heading2 mb-[0.75rem]  xl:mb-[1.125rem]  mx-auto px-[100px] 2xl:px-[40px] lg:px-0 !text-white `}
        >
          Delivery to prospering customers
        </h2>
        <p className="paragraph-large mb-[1.25rem] md:mb-[1.5rem] xl:mb-[2rem] 3xl:mb-[2.6rem] 4xl:mb-[3rem] !text-white">
          Chronicles of the moment the keys are handed over in your driveway,
          the daily drive or feeling your vacation vibes.{" "}
          <span className="bg-rainbow-gradient bg-clip-text text-transparent">
            Use #DeliveredByDriveway
          </span>{" "}
          for a chance to be featured in our happy drivers gallery.
        </p>
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
                key={"carousel" + index}
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
    </section>
  );
};

export default ProsperingCustomers;
