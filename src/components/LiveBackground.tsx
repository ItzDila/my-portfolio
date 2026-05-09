"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { isLowEndAndroidDevice } from "@/lib/device-performance";

// Dynamically import the heavy WebGL shader.
// The LoadingScreen gives it ~1.9 s to download + initialise before being revealed.
const Silk = dynamic(() => import("@/components/effects/Silk"), {
  ssr: false,
  loading: () => null,
});

export default function LiveBackground() {
  const [useShader, setUseShader] = useState(false);

  useEffect(() => {
    // Fire on the very next tick after hydration — don't wait for browser idle.
    // The LoadingScreen covers the page while Three.js downloads & initialises.
    const t = setTimeout(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      setUseShader(!(isLowEndAndroidDevice() || prefersReducedMotion));
    }, 0);

    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#060606]"
    >
      {useShader && (
        <div className="absolute inset-0 opacity-[0.82]">
          <Silk
            speed={4.5}
            scale={1}
            color="#7b5f2f"
            noiseIntensity={1.15}
            rotation={-0.12}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,7,3,0.35),rgba(7,7,11,0.9))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[88px_88px] opacity-[0.14] mask-[radial-gradient(circle_at_center,black,transparent_76%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(0,0,0,0.25)_100%)]" />
    </div>
  );
}
