"use client";
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import XIcon from "@/components/Icons/XIcon";
import CheckIcon from "@/components/Icons/CheckIcon";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex  p-[7px]  w-[65px] shrink-0 cursor-pointer items-center rounded-full border-2 border-gray data-[state=checked]:border-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-white",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "group is-checked pointer-events-none block relative h-5 w-5 rounded-full bg-gray shadow-lg ring-0 transition-transform data-[state=checked]:bg-green data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"
      )}
    >
      <XIcon className="absolute top-1 left-[5px] group-data-[state=checked]:hidden" />
      <CheckIcon className="absolute top-1 left-[4px] group-data-[state=unchecked]:hidden" />
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

interface SwitchWithLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

const SwitchWithLabel: React.FC<SwitchWithLabelProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex items-center space-x-2", className)} {...props}>
      <Switch id={label} />
      <Label className="text-gray text-[17px] font-normal" htmlFor={label}>
        {label}
      </Label>
    </div>
  );
};

export { Switch, SwitchWithLabel };
