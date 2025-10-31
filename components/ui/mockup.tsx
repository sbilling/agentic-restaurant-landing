import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const mockupDevice = cva(
  "flex relative z-10 overflow-hidden shadow-2xl border border-border/70",
  {
    variants: {
      variant: {
        iphone:
          "rounded-[3rem] bg-foreground/95",
        macbook:
          "rounded-xl border-foreground/30",
        surface:
          "rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "iphone",
    },
  }
);

export interface MockupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mockupDevice> {}

function Mockup({ className, variant, ...props }: MockupProps) {
  return (
    <div
      data-slot="mockup"
      className={cn(mockupDevice({ variant, className }))}
      {...props}
    />
  );
}

const mockupScreen = cva(
  "bg-border/50 flex relative z-10 overflow-hidden rounded-2xl",
  {
    variants: {
      size: {
        small: "p-2",
        large: "p-4",
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

export interface MockupFrameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mockupScreen> {}

function MockupFrame({ className, size, ...props }: MockupFrameProps) {
  return (
    <div
      data-slot="mockup-frame"
      className={cn(mockupScreen({ size, className }))}
      {...props}
    />
  );
}

export { Mockup, MockupFrame };
