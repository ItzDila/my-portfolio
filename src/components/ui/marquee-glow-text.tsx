"use client";

import React from "react";

interface MarqueeGlowTextProps {
  children: React.ReactNode;
  className?: string;
}

export function MarqueeGlowText({
  children,
  className = "",
}: MarqueeGlowTextProps) {
  return <div className={className}>{children}</div>;
}
