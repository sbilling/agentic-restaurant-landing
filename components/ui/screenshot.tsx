"use client";

import { cn } from "@/lib/utils";

interface ScreenshotProps {
  src: string;
  alt?: string;
  className?: string;
}

export function Screenshot({ src, alt = "", className }: ScreenshotProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-full", className)}
    />
  );
}
