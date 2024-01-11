import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

interface SectionHeaderProps {
  children: string;
}

interface SectionDescProps {
  children: string;
}

const Section: React.FC<SectionProps> = ({ children, ...props }) => {
  return (
    <section
      className="mt-[60px] max-w-[330px] md:max-w-full text-center md:py-[120px] flex flex-col md:flex-row md:gap-[30px] justify-between md:justify-center md:px-10 lg:px-[159px] mx-auto"
      {...props}
    >
      {children}
    </section>
  );
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  ...props
}) => {
  return (
    <h1
      className="font-bold text-2xl md:text-5xl text-dark md:leading-[60.5px] mb-[10px] md:mb-[18px]"
      {...props}
    >
      {children}
    </h1>
  );
};

const SectionDesc: React.FC<SectionDescProps> = ({ children, ...props }) => {
  return (
    <p
      className="font-normal text-xs md:text-xl text-dark-muted md:leading-[30px] md:mb-[60px] mb-[30px]"
      {...props}
    >
      {children}
    </p>
  );
};

export { Section, SectionHeader, SectionDesc };
