"use client";

import { useEffect, useRef } from "react";

export default function LiveBackground() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!glowRef.current) return;
        glowRef.current.style.setProperty("--x", `${e.clientX - 150}px`);
        glowRef.current.style.setProperty("--y", `${e.clientY - 150}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{`
        /* 1. Global Reset & Modern Black Cursor */
        html, body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 4L11 20L14 14L20 11L4 4Z" fill="%23000000" stroke="%23ffffff" stroke-width="1.5" stroke-linejoin="round"/></svg>') 4 4, auto !important;
          overflow-x: hidden;
        }

        a, button, input, [role="button"] {
          cursor: inherit;
        }

        /* 2. The Glow Effect */
        .mouse-glow {
          position: fixed;
          top: 0; left: 0;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(43, 19, 25, 0.5) 0%, rgba(125, 20, 48, 0.2) 40%, transparent 50%);
          filter: blur(40px);
          -webkit-filter: blur(40px);
          pointer-events: none;
          z-index: -1; /* Tucked right behind content */
          mix-blend-mode: screen;
          transition: transform 0.25s cubic-bezier(0.15, 0.85, 0.35, 1);
          transform: translate3d(var(--x, -300px), var(--y, -300px), 0);
          will-change: transform;
        }

        /* 3. Original Blob Keyframes */
        @keyframes moveBlob1 { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30vw, 20vh) scale(1.3); } 66% { transform: translate(-10vw, 40vh) scale(0.8); } }
        @keyframes moveBlob2 { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(-25vw, -30vh) scale(1.2); } 66% { transform: translate(20vw, -20vh) scale(0.9); } }
        @keyframes moveBlob3 { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(25vw, -20vh) scale(0.9); } 66% { transform: translate(-30vw, 15vh) scale(1.3); } }
        @keyframes moveBlob4 { 0%, 100% { transform: translate(0, 0) scale(0.8); } 33% { transform: translate(-30vw, 30vh) scale(1.2); } 66% { transform: translate(30vw, -10vh) scale(1); } }
        @keyframes moveBlob5 { 0%, 100% { transform: translate(0, 0) scale(1.1); } 33% { transform: translate(20vw, 35vh) scale(0.8); } 66% { transform: translate(-25vw, -25vh) scale(1.3); } }
        @keyframes moveBlob6 { 0%, 100% { transform: translate(0, 0) scale(1.2); } 33% { transform: translate(20vw, 45vh) scale(0.8); } 66% { transform: translate(-25vw, -25vh) scale(1.3); } }

        /* 4. Full Page Background Container */
        .live-bg-container {
          position: fixed; /* Locks it to the viewport */
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh; /* Crucial for mobile browser address bars */
          z-index: -999; /* Pushes it to the absolute bottom layer */
          pointer-events: none; /* Ensures you can click links above it */
          overflow: hidden;
          background: linear-gradient(
            135deg,
            rgba(15, 15, 20, 1) 0%,
            rgba(25, 25, 35, 1) 25%,
            rgba(35, 20, 30, 1) 50%,
            rgba(20, 25, 40, 1) 75%,
            rgba(10, 15, 30, 1) 100%
          );
        }

        .live-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          -webkit-filter: blur(60px);
          opacity: 0.95;
          will-change: transform;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        .blob-1 { top: -15%; left: -15%; width: max(50vw, 300px); height: max(50vw, 300px); background: radial-gradient(circle, rgba(190, 81, 3, 0.8), transparent 70%); animation: moveBlob1 12s infinite ease-in-out; }
        .blob-2 { bottom: -15%; right: -15%; width: max(45vw, 280px); height: max(45vw, 280px); background: radial-gradient(circle, rgba(255, 206, 27, 0.75), transparent 70%); animation: moveBlob2 11s infinite ease-in-out; }
        .blob-3 { top: 30%; left: 20%; width: max(55vw, 320px); height: max(55vw, 320px); background: radial-gradient(circle, rgba(193, 74, 17, 0.7), transparent 70%); animation: moveBlob3 14s infinite ease-in-out; }
        .blob-4 { top: 40%; right: 10%; width: max(40vw, 260px); height: max(40vw, 260px); background: radial-gradient(circle, rgba(6, 148, 148, 0.6), transparent 70%); animation: moveBlob4 11s infinite ease-in-out; }
        .blob-5 { top: 60%; left: 40%; width: max(48vw, 290px); height: max(48vw, 290px); background: radial-gradient(circle, rgba(13, 219, 137, 0.6), transparent 70%); animation: moveBlob5 13s infinite ease-in-out; }
        .blob-6 { top: 60%; left: 40%; width: max(48vw, 290px); height: max(48vw, 290px); background: radial-gradient(circle, rgba(255, 61, 87, 0.9), transparent 70%); animation: moveBlob6 13s infinite ease-in-out; }

        /* 5. Mobile Layout Tweaks */
        @media (max-width: 768px) {
          .live-blob {
            filter: blur(40px);
            -webkit-filter: blur(40px);
            opacity: 1;
          }
          /* Using vmax ensures blobs are big enough on TALL mobile screens */
          .blob-1 { width: 85vmax; height: 85vmax; }
          .blob-2 { width: 80vmax; height: 80vmax; }
          .blob-3 { width: 90vmax; height: 90vmax; }
          .blob-4 { width: 75vmax; height: 75vmax; }
          .blob-5 { width: 82vmax; height: 82vmax; }
          .blob-6 { width: 82vmax; height: 82vmax; }

          .mouse-glow { display: none; }
        }
      `}</style>

      <div ref={glowRef} className="mouse-glow" />

      <div className="live-bg-container">
        <div className="live-blob blob-1" />
        <div className="live-blob blob-2" />
        <div className="live-blob blob-3" />
        <div className="live-blob blob-4" />
        <div className="live-blob blob-5" />
        <div className="live-blob blob-6" />
      </div>
    </>
  );
}