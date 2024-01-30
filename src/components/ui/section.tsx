import { cn } from "@/lib/utils";
import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
}

interface SectionDescProps extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
}

const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <section
      className={cn("px-[18px] max-w-full text-center py-[48px] md:py-[96px] flex flex-col md:flex-row justify-between md:justify-center md:px-10 lg:px-[159px] mx-auto", className)}
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
      className={cn("font-bold text-2xl md:text-[44px] text-dark leading-[31.2px] md:leading-[57.2px] mb-[10px] md:mb-[18px]", className)}
      {...props}
    >
      {children}
    </h1>
  );
};

const SectionDesc: React.FC<SectionDescProps> = ({ children, className, ...props }) => {
  return (
    <p
      className={cn("font-normal text-xs md:text-xl text-dark-2 leading-[18px] md:leading-[30px] md:mb-[48px] mb-[24px]", className)}
      {...props}
    >
      {children}
    </p>
  );
};

export { Section, SectionHeader, SectionDesc };
