"use client";

import { useEffect, useState } from "react";

/**
 * LoadingScreen — shown once per hard page load (not on client-side nav).
 *
 * Strategy:
 *  - Show for DURATION ms, giving the Silk WebGL shader time to download + init.
 *  - Fade out smoothly so the animated background is already running underneath.
 *  - Because this lives in the root layout and Next.js never unmounts the layout
 *    during client-side navigation, it only runs once per full page refresh.
 */
const TOTAL_MS = 1900; // how long the screen is fully visible
const FADE_MS = 380; // CSS fade-out duration

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"show" | "fade" | "done">("show");

  useEffect(() => {
    // Start the fade shortly before the full duration ends
    const fadeTimer = setTimeout(() => setPhase("fade"), TOTAL_MS - FADE_MS);
    // Unmount once the fade completes
    const doneTimer = setTimeout(() => setPhase("done"), TOTAL_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <>
      <style>{`
        @keyframes ls-grad {
          0%,100% { background-position:0% 50%; }
          50%      { background-position:100% 50%; }
        }
        @keyframes ls-bar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes ls-dot {
          0%,80%,100% { opacity:.25; transform:scale(.85); }
          40%         { opacity:1;   transform:scale(1); }
        }
        .ls-name {
          background: linear-gradient(120deg,#f59e0b,#fcd34d,#d97706);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: ls-grad 2.2s ease infinite;
        }
        .ls-bar-fill {
          transform-origin: left center;
          animation: ls-bar ${TOTAL_MS}ms cubic-bezier(.4,0,.2,1) forwards;
        }
        .ls-dot { animation: ls-dot 1.2s ease-in-out infinite; }
        .ls-dot:nth-child(2) { animation-delay: .18s; }
        .ls-dot:nth-child(3) { animation-delay: .36s; }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "#060606",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          /* Responsive gap — tighter on small phones, spacious on desktop */
          gap: "clamp(20px, 5vw, 36px)",
          opacity: phase === "fade" ? 0 : 1,
          transition: `opacity ${FADE_MS}ms ease`,
          pointerEvents: phase === "fade" ? "none" : "auto",
          /* Keep content clear of iPhone notch (top) and home bar (bottom) */
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "max(env(safe-area-inset-bottom), 16px)",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
        }}
      >
        {/* ── Brand mark ── */}
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h1
            className="ls-name"
            style={{
              /*
               * 6vw on a 375px phone = 22.5px — hits the 26px floor and looks tiny.
               * 8vw on 375px = 30px, on 320px = 25.6px → floor is 30px on both.
               * Caps at 52px on wide screens.
               */
              fontSize: "clamp(30px, 8vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Timesh Dillon
          </h1>
          <p
            style={{
              color: "rgba(150,150,150,0.6)",
              /* Slightly larger subtitle on mobile for legibility */
              fontSize: "clamp(10px, 2.5vw, 11px)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Designer · Developer · Creative
          </p>
        </div>

        {/* ── Progress bar ── */}
        <div
          style={{
            /* Scales with screen width on mobile, fixed on desktop */
            width: "min(140px, 42vw)",
            height: "2px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "99px",
            overflow: "hidden",
          }}
        >
          <div
            className="ls-bar-fill"
            style={{
              height: "100%",
              background: "linear-gradient(90deg,#f59e0b,#fcd34d,#f59e0b)",
              backgroundSize: "200% auto",
              borderRadius: "99px",
            }}
          />
        </div>

        {/* ── Dots ── */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="ls-dot"
              style={{
                display: "block",
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "rgba(251,191,36,0.55)",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
