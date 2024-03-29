import React from "react";
import Link from "next/link";
import { Facebook, Instagram, TwitterX, Youtube } from "../Icons/Icons";

const Learn = [
  {
    title: "Learn",
    items: [
      { id: 1, label: "Guides & Tips", href: "/services" },
      { id: 2, label: "About AutoProsper", href: "/about" },
      { id: 3, label: "Reviews", href: "/services" },
    ],
  },
];
const Help = [
  {
    title: "Help",
    items: [
      {
        id: 1,
        label: "support@autoprosper",
        href: "mailto:support@autoprosper.com",
      },
      { id: 2, label: "(877) 291-2886", href: "tel:+18772912886" },
      { id: 3, label: "Live Chat", href: "/live-chat" },
      { id: 4, label: "Contact", href: "/contact" },
      { id: 5, label: "FAQ", href: "/faq" },
    ],
  },
];
const Shop = [
  {
    title: "Shop",
    items: [
      { id: 1, label: "SUV", href: "/inventory" },
      { id: 2, label: "Truck", href: "/inventory" },
      { id: 3, label: "Sedan", href: "/inventory" },
      { id: 4, label: "Hatchback", href: "/inventory" },
      { id: 5, label: "Coupe", href: "/inventory" },
      { id: 6, label: "Wagon", href: "/inventory" },
      { id: 7, label: "Minivan", href: "/inventory" },
      { id: 8, label: "Convertible", href: "/inventory" },
    ],
  },
];

const Finance = [
  {
    title: "Finance",
    items: [
      { id: 1, label: "Get Pre-Qualified", href: "get-pre-qualified" },
      { id: 2, label: "Estimate Your Payment", href: "estimate-your-payment" },
    ],
  },
];

const socialMedia = [
  {
    title: "Social",
    items: [
      {
        id: 1,
        href: "https://www.facebook.com/",
        label: (
          <Facebook className="fill-gray hover:fill-white w-[1.25rem] h-[1.25rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
        ),
        name: "Fcaebook",
      },
      {
        id: 2,
        href: "https://www.instagram.com/",
        label: (
          <Instagram className="fill-gray hover:fill-white w-[1.25rem] h-[1.25rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
        ),
        name: "Instagram",
      },
      {
        id: 3,
        href: "https://twitter.com/",
        label: (
          <TwitterX className="fill-gray hover:fill-white w-[1.25rem] h-[1.25rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
        ),
        name: "Twitter",
      },
      {
        id: 4,
        href: "https://www.youtube.com/",
        label: (
          <Youtube className="fill-gray hover:fill-white w-[1.25rem] h-[1.25rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
        ),
        name: "Youtube",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className=" pt-[3.75rem] pb-[1.5rem] 2xl:pt-[5rem] 3xl:pt-[7.5rem] 2xl:pb-[3.75rem]  overflow-hidden bg-dark">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="md:flex-grow w-[48%] lg:w-[18%]">
            <h4 className="text-[0.875rem] md:text-[1.25rem] xl:text-[1.5rem] mb-[1.25rem] 2xl:mb-[1.875rem] text-white font-bold">
              {Learn[0].title}
            </h4>
            <ul className="mb-[2.5rem] lg:mb-0">
              {Learn[0].items.map((item) => (
                <li
                  className="mb-[12px] lg:mb-[0.875rem] 2xl:mb-[1.125rem]"
                  key={item.id}
                >
                  <Link href={item.href}>
                    <span
                      className="text-dark-gray text-[12px] xl:text-[0.875rem] underline font-semibold hover:text-light-gray-4 cursor-pointer"
                      id={item.href}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:flex-grow w-[48%] lg:w-[18%]">
            <h4 className="text-[0.875rem] md:text-[1.25rem] xl:text-[1.5rem] mb-[1.25rem] 2xl:mb-[1.875rem] text-white font-bold">
              {Help[0].title}
            </h4>
            <ul className="mb-[2rem] lg:mb-0">
              {Help[0].items.map((item) => (
                <li
                  className="mb-[12px] lg:mb-[0.875rem] 2xl:mb-[1.125rem]"
                  key={item.id}
                >
                  <span
                    className="text-dark-gray text-[12px] xl:text-[0.875rem] underline font-semibold hover:text-light-gray-4 cursor-pointer"
                    id={item.href}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:flex-grow w-[48%] lg:w-[18%]">
            <h4 className="text-[0.875rem] md:text-[1.25rem] xl:text-[1.5rem] mb-[1.25rem] 2xl:mb-[1.875rem] text-white font-bold">
              {Shop[0].title}
            </h4>
            <ul className="mb-[2.5rem] lg:mb-0">
              {Shop[0].items.map((item) => (
                <li
                  className="mb-[12px] lg:mb-[0.875rem] 2xl:mb-[1.125rem]"
                  key={item.id}
                >
                  <Link href={item.href}>
                    <span
                      className="text-dark-gray text-[12px] xl:text-[0.875rem] underline font-semibold hover:text-light-gray-4 cursor-pointer"
                      id={item.href}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:flex-grow w-[48%] lg:w-[18%]">
            <h4 className="text-[0.875rem] md:text-[1.25rem] xl:text-[1.5rem] mb-[1.25rem] 2xl:mb-[1.875rem] text-white font-bold">
              {Finance[0].title}
            </h4>
            <ul className="mb-[3.75rem]">
              {Finance[0].items.map((item) => (
                <li
                  className="mb-[12px] lg:mb-[0.875rem] 2xl:mb-[1.125rem]"
                  key={item.id}
                >
                  <Link href={item.href}>
                    <span className="text-dark-gray text-[12px] xl:text-[0.875rem] underline font-semibold hover:text-light-gray-4 cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="lg:hidden">
              <h4 className="text-[0.875rem] md:text-[1.25rem] xl:text-[1.5rem] mb-[1.25rem] 2xl:mb-[1.875rem] text-white font-bold">
                {socialMedia[0].title}
              </h4>
              <ul className="mb-[2.5rem] lg:mb-0 flex items-center gap-[20px]">
                {socialMedia[0].items.map((item) => (
                  <li
                    className="mb-[12px] lg:mb-[0.875rem] 2xl:mb-[1.125rem]"
                    key={item.id}
                  >
                    <Link
                      target="_blank"
                      href={item.href}
                      rel="noopener noreferrer"
                      aria-label={`${item.name} Link`}
                    >
                      <span className="text-dark-gray text-[12px] xl:text-[0.875rem] underline font-semibold hover:text-light-gray-4 cursor-pointer">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden lg:block md:flex-grow w-[48%] lg:w-[18%]">
            <h4 className="text-[1rem] xl:text-[1.25rem] mb-[1.25rem] 2xl:mb-[1.875rem] text-white font-bold">
              {socialMedia[0].title}
            </h4>
            <ul className="mb-[2.5rem] lg:mb-0 flex items-center gap-[24px]">
              {socialMedia[0].items.map((item) => (
                <li
                  className="mb-[12px] lg:mb-[0.875rem] 2xl:mb-[1.125rem]"
                  key={item.id}
                >
                  <Link
                    target="_blank"
                    href={item.href}
                    rel="noopener noreferrer"
                    aria-label={`${item.name} Link`}
                  >
                    <span className="text-dark-gray text-[12px] xl:text-[0.875rem] underline font-semibold hover:text-light-gray-4 cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t-[1px] border-solid border-dark-gray mt-8 xl:mt-[2rem] 2xl:mt-[3.75rem]">
          <div
            className="pt-8 2xl:pt-[3.75rem] flex items-center justify-center gap-[10px]
           text-dark-gray text-[12px] 2xl:text-[14px] xl:text-[0.875rem] lg:gap-[18px] 2xl:gap-[24px]"
          >
            <span>© 2023 AutoProsper LLC</span>
            <span className="w-[1px] h-[24px] xl:h-[36px] inline-block bg-dark-gray"></span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
