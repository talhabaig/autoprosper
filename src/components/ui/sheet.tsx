"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ArrowLeft,
  ArrowRightIcon,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { DoubleEllipseGradient } from "@/components/ui/EllipseGradient";
import { NavigationContentType } from "./Navigations/type";
import Link from "next/link";
import { Button } from "./button";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  selectedItem?: NavigationContentType | null;
  onBack?: () => void;
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    { side = "right", selectedItem, onBack, className, children, ...props },
    ref
  ) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        {children}
        {selectedItem?.title ? (
          <div
            onClick={onBack}
            className="absolute top-4 left-4 font-bold text-xl text-primary-text flex items-center gap-[10px]"
          >
            <ArrowLeft /> {selectedItem.title}
          </div>
        ) : (
          <div className="absolute top-4 left-4 font-bold text-xl text-primary-text">
            Menu
          </div>
        )}
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
        <DoubleEllipseGradient className="absolute bottom-0 -z-10" />
      </SheetPrimitive.Content>
    </SheetPortal>
  )
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold text-neutral-950 dark:text-neutral-50",
      className
    )}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

interface SheetItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

const SheetItem: React.FC<SheetItemProps> = ({ label, ...props }) => {
  return (
    <div
      className="flex justify-between pl-[15px] pr-[14px] z-10 py-[23px] border-x-0 border-border-color"
      {...props}
    >
      <div className="text-sm font-bold">{label}</div>
      <ChevronRight className="md:hidden"/>
    </div>
  );
};

interface SheetSectionItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  items: Array<{
    label: string;
    link: string;
  }>;
}

const SheetSectionItems: React.FC<SheetSectionItemsProps> = ({
  title,
  className,
  items,
  ...props
}) => {
  return (
    <div className="md:relative flex flex-col lg:w-[336px] md:mr-[36px] lg:mr-[72px]">
      <div className="text-xs text-gray px-[15px] font-bold mb-[15px] tracking-[1.2px]">
        {title}
      </div>
      <div className="divide-y first:border-t-2 divide-gray-100 border-y-[1px] border-border-color">
        {items.map((item, index) => (
          <SheetItem key={index} label={item.label} />
        ))}
      </div>

      <DoubleEllipseGradient className="hidden md:block absolute -bottom-10 right-7" />
    </div>
  );
};

interface SheetSectionDetailsProps {
  content: {
    title: string;
    list: Array<{
      element: string;
    }>;
    button: {
      text: string;
      icon: JSX.Element;
    };
  };
}

const SheetSectionDetails: React.FC<SheetSectionDetailsProps> = ({
  content,
  ...props
}) => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-primary-text font-bold text-base">
          {content.title}
        </h1>
        <div className="flex-col mt-[10px] mb-[20px]">
          {content.list.map((list) => list.element)}
        </div>
        <Button
          className="rounded-full border-gray text-gray md:w-1/2 md:px-[24px] md:py-[18px]"
          variant="outline"
        >
          {content.button.text} {content.button.icon}
        </Button>
      </div>
    </>
  );
};

export {
  Sheet,
  SheetItem,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetSectionItems,
  SheetSectionDetails,
};
