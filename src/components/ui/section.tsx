import { cn } from "@/lib/utils";
import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
}

interface SectionDescProps extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
}

const Section: React.FC<SectionProps> = ({ children, ...props }) => {
  return (
    <section
      className="mt-[60px] px-[15px] max-w-full text-center md:py-[120px] flex flex-col md:flex-row md:gap-[30px] justify-between md:justify-center md:px-10 lg:px-[159px] mx-auto"
      {...props}
    >
      {children}
    </section>
  );
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      className={cn("font-bold text-2xl md:text-5xl text-dark md:leading-[60.5px] mb-[10px] md:mb-[18px]", className)}
      {...props}
    >
      {children}
    </h1>
  );
};

const SectionDesc: React.FC<SectionDescProps> = ({ children, className, ...props }) => {
  return (
    <p
      className={cn("font-normal text-xs md:text-xl text-dark-muted md:leading-[30px] md:mb-[60px] mb-[30px]", className)}
      {...props}
    >
      {children}
    </p>
  );
};

export { Section, SectionHeader, SectionDesc };
