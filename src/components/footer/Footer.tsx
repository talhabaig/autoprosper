import React from "react";

const Learn = [
  {
    title: "Learn",
    items: [
      { id: 1, label: "Guides & Tips", href: "/guides" },
      { id: 2, label: "About AutoProsper", href: "/about" },
      { id: 3, label: "Reviews", href: "/reviews" },
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
      { id: 1, label: "SUV", href: "/suv" },
      { id: 2, label: "Truck", href: "/truck" },
      { id: 3, label: "Sedan", href: "/sedan" },
      { id: 4, label: "Hatchback", href: "/hatchback" },
      { id: 5, label: "Coupe", href: "/coupe" },
      { id: 6, label: "Wagon", href: "/wagon" },
      { id: 7, label: "Minivan", href: "/minivan" },
      { id: 8, label: "Convertible", href: "/convertible" },
    ],
  },
];

const Finance = [
  {
    title: "Finance",
    items: [
      { id: 1, label: "Get Pre-Qualified", href: "/get-pre-qualified" },
      { id: 2, label: "Estimate Your Payment", href: "/estimate-payment" },
    ],
  },
];

const socialMedia = [
  {
    title: "Shop",
    items: [
      { id: 1, label: "Get Pre-Qualified", href: "/get-pre-qualified" },
      { id: 2, label: "Estimate Your Payment", href: "/estimate-payment" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className=" pt-[3.75rem] pb-[1.5rem] 2xl:pt-[5rem] 3xl:pt-[7.5rem] 2xl:pb-[3.75rem]  overflow-hidden bg-primary-text">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="md:flex-grow w-[48%] lg:w-[18%]">
            <h5 className="text-[1rem] xl:text-[1.25rem] mb-[1.25rem] 2xl:mb-[1.875rem] text-white font-bold">
              {Learn[0].title}
            </h5>
            <ul className="mb-[2.5rem] lg:mb-0">
              {Learn[0].items.map((item) => (
                <li className="mb-[12px] lg:mb-[0.875rem] 2xl:mb-[1.125rem]" key={item.id}>
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
            <h5 className="text-[1rem] xl:text-[1.25rem] mb-[1.25rem] 2xl:mb-[1.875rem] text-white font-bold">
              {Help[0].title}
            </h5>
            <ul className="mb-[2.5rem] lg:mb-0">
              {Help[0].items.map((item) => (
                <li className="mb-[12px] lg:mb-[0.875rem] 2xl:mb-[1.125rem]" key={item.id}>
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
            <h5 className="text-[1rem] xl:text-[1.25rem] mb-[1.25rem] 2xl:mb-[1.875rem] text-white font-bold">
              {Shop[0].title}
            </h5>
            <ul className="mb-[2.5rem] lg:mb-0">
              {Shop[0].items.map((item) => (
                <li className="mb-[12px] lg:mb-[0.875rem] 2xl:mb-[1.125rem]" key={item.id}>
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
            <h5 className="text-[1rem] xl:text-[1.25rem] mb-[1.25rem] 2xl:mb-[1.875rem] text-white font-bold">
              {Finance[0].title}
            </h5>
            <ul className="mb-[3.75rem]">
              {Finance[0].items.map((item) => (
                <li className="mb-[12px] lg:mb-[0.875rem] 2xl:mb-[1.125rem]" key={item.id}>
                  <span
                    className="text-dark-gray text-[12px] xl:text-[0.875rem] underline font-semibold hover:text-light-gray-4 cursor-pointer"
                    id={item.href}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="lg:hidden">
              <h5 className="text-[1rem] xl:text-[1.25rem] mb-[1.25rem] 2xl:mb-[1.875rem] text-white font-bold">
                {socialMedia[0].title}
              </h5>
              <ul className="mb-[2.5rem] lg:mb-0">
                {socialMedia[0].items.map((item) => (
                  <li className="mb-[12px] lg:mb-[0.875rem] 2xl:mb-[1.125rem]" key={item.id}>
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
          </div>
          <div className="hidden lg:block md:flex-grow w-[48%] lg:w-[18%]">
            <h5 className="text-[1rem] xl:text-[1.25rem] mb-[1.25rem] 2xl:mb-[1.875rem] text-white font-bold">
              {socialMedia[0].title}
            </h5>
            <ul className="mb-[2.5rem] lg:mb-0">
              {socialMedia[0].items.map((item) => (
                <li className="mb-[12px] lg:mb-[0.875rem] 2xl:mb-[1.125rem]" key={item.id}>
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
        </div>
        <div className="border-t-[1px] border-solid border-dark-gray mt-[1.5rem] xl:mt-[2rem] 2xl:mt-[3.75rem]">
          <div className="pt-[30px] 2xl:pt-[3.75rem] flex items-center justify-center gap-[10px] text-dark-gray text-[12px] 2xl:text-[14px] xl:text-[0.875rem]">
            <span>© 2023 AutoProsper LLC</span>
            <span>|</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
