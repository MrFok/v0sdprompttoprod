"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps {
  className?: string;
  duration?: number;
  shineColor?: string | string[];
  borderWidth?: number;
  style?: React.CSSProperties;
}

export function ShineBorder({
  className,
  duration = 14,
  shineColor = "#3b82f6",
  borderWidth = 1,
  style,
}: ShineBorderProps) {
  const colors = Array.isArray(shineColor) ? shineColor : [shineColor];
  const gradientStops = colors
    .map((color, index) => {
      const start = 10 + index * (70 / colors.length);
      const end = start + 10;
      return `${color} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", className)}
      style={style}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          padding: borderWidth,
          background: `conic-gradient(from 0deg, transparent 0%, ${gradientStops}, transparent 100%)`,
          animation: `shine-border-spin ${duration}s linear infinite`,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          filter: "blur(8px)",
          opacity: 0.9,
        }}
      />
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          padding: borderWidth,
          background: `conic-gradient(from 0deg, transparent 0%, ${gradientStops}, transparent 100%)`,
          animation: `shine-border-spin ${duration}s linear infinite`,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          opacity: 1,
        }}
      />
    </div>
  );
}
