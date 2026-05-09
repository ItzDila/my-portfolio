"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, FileText, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const lastY = useRef(0);
  const lockY = useRef(0);

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  /* ── Scroll handler — clamp to ≥0 so iOS rubber-band can't flicker the header ── */
  useEffect(() => {
    const onScroll = () => {
      const y = Math.max(0, window.scrollY); // clamp negative iOS rubber-band values
      setScrolled(y > 20);
      if (!mobileOpen) {
        setHidden(y > lastY.current && y > 110);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  /* ── iOS-safe body scroll lock — prevents background scrolling when menu is open ── */
  useEffect(() => {
    if (mobileOpen) {
      lockY.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${lockY.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll"; // prevents layout-shift from scrollbar disappearing
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      // Restore scroll position that was saved before locking
      window.scrollTo({ top: lockY.current, behavior: "instant" });
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, [mobileOpen]);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    const t = setTimeout(() => setMobileOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <style>{`
        /* ── Floating root ── */
        .hdr-root {
          position: fixed;
          left: 50%;
          /* Respect iOS notch / Dynamic Island */
          top: max(14px, calc(env(safe-area-inset-top) + 10px));
          z-index: 50;
          will-change: transform;          /* GPU layer for silky transitions */
          -webkit-transform: translateZ(0);
          transition:
            transform 0.3s  cubic-bezier(0.4, 0, 0.2, 1),
            opacity   0.3s  ease,
            width     0.28s ease;
        }

        /* ── Shell — border-radius + bg, no overflow:hidden (would clip dropdowns) ── */
        .hdr-bg {
          border: 1px solid rgba(255,255,255,0.13);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          transition:
            background    0.3s ease,
            border-color  0.3s ease,
            /* border-radius intentionally excluded — snapped via inline style
               to prevent the 'circle flash' glitch when opening the mobile menu */
            box-shadow    0.3s ease;
        }

        /* ── Desktop dropdown ── */
        .hdr-dd { position: relative; }

        .hdr-dd-panel {
          position: absolute;
          top: 100%;
          left: 50%;
          padding-top: 10px;               /* transparent bridge keeps hover alive */
          transform: translateX(-50%) translateY(-6px);
          min-width: 210px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
          z-index: 200;
        }
        .hdr-dd-panel > div {
          transition: transform 0.18s cubic-bezier(0.4,0,0.2,1), opacity 0.18s ease;
          transform: translateY(-4px);
          opacity: 0;
        }
        .hdr-dd:hover .hdr-dd-panel,
        .hdr-dd:focus-within .hdr-dd-panel {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .hdr-dd:hover .hdr-dd-panel > div,
        .hdr-dd:focus-within .hdr-dd-panel > div {
          transform: translateY(0);
          opacity: 1;
        }

        /* ── Mobile slide panel ── */
        .mob-panel {
          overflow: hidden;
          /* Use max-height for the accordion — GPU-friendly on iOS */
          transition: max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease;
          max-height: 0;
          opacity: 0;
        }
        .mob-panel.is-open {
          /* Limit to 70vh so panel never extends off-screen on short phones */
          max-height: min(70svh, 580px);
          opacity: 1;
        }

        /* ── Sub-accordion (dropdown items) ── */
        .mob-sub {
          overflow: hidden;
          transition: max-height 0.25s cubic-bezier(0.4,0,0.2,1), opacity 0.22s ease;
          max-height: 0;
          opacity: 0;
        }
        .mob-sub.is-open {
          max-height: 180px;
          opacity: 1;
        }

        /* ── All interactive header elements ── */
        .hdr-root a,
        .hdr-root button {
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          user-select: none;
          -webkit-user-select: none;
        }

        /* ── Active link indicator ── */
        .nav-active {
          position: relative;
        }
        .nav-active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(251,191,36,0.8);
        }
      `}</style>

      {/* ════════ Floating wrapper ════════ */}
      <div
        className="hdr-root"
        style={{
          transform: `translateX(-50%) translateY(${hidden ? "-200%" : "0"})`,
          opacity: hidden ? 0 : 1,
          pointerEvents: hidden ? "none" : "auto",
          /* On mobile keep a consistent 8px margin from each side */
          width: mobileOpen ? "calc(100% - 16px)" : "min(90vw, 960px)",
          maxWidth: mobileOpen ? "640px" : "960px",
        }}
      >
        {/* ════════ Shell ════════ */}
        <div
          className={cn(
            "hdr-bg",
            scrolled || mobileOpen
              ? "bg-black/85 backdrop-blur-2xl shadow-2xl shadow-black/50"
              : "bg-black/28 backdrop-blur-md shadow-lg",
          )}
          style={{
            /* Snap border-radius immediately — no transition so there's
               no intermediate 'circle' state when the mobile menu opens */
            borderRadius: mobileOpen ? "20px" : "9999px",
          }}
        >
          {/* ── Top bar ── */}
          <div className="flex items-center justify-between px-4 py-2.5 md:px-7 md:py-3">
            {/* Logo */}
            <Link
              href="/"
              className="text-white font-bold text-sm md:text-lg tracking-tight shrink-0 hover:opacity-75 transition-opacity duration-200"
            >
              Timesh Dillon
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                    isActive(item.href)
                      ? "text-white bg-white/12 nav-active"
                      : "text-neutral-300 hover:text-white hover:bg-white/8",
                  )}
                >
                  {item.label}
                </Link>
              ))}

              {/* Portfolio dropdown */}
              <div className="hdr-dd">
                <button
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200 flex items-center gap-1.5",
                    isActive("/projects")
                      ? "text-white bg-white/12"
                      : "text-neutral-300 hover:text-white hover:bg-white/8",
                  )}
                  aria-expanded="false"
                >
                  Portfolio
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="hdr-dd-panel">
                  <div className="bg-black/90 backdrop-blur-xl border border-white/12 rounded-2xl shadow-xl overflow-hidden">
                    <Link
                      href="/projects/posts"
                      className="block px-4 py-3 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/8 transition-colors duration-150"
                    >
                      Social Media Posts
                    </Link>
                    <Link
                      href="/projects/videos"
                      className="block px-4 py-3 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/8 transition-colors duration-150 border-t border-white/8"
                    >
                      Video Edits
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Right: Resume button + hamburger */}
            <div className="flex items-center gap-2">
              <Link
                href="/cv"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-white bg-white/10 hover:bg-white/18 border border-white/14 px-4 py-1.5 rounded-full transition-colors duration-200"
              >
                <FileText className="w-3.5 h-3.5" />
                Resume
              </Link>

              {/* ── Hamburger — 44×44 px touch target (Apple HIG minimum) ── */}
              <button
                onClick={() => setMobileOpen((p) => !p)}
                className="md:hidden w-11 h-11 flex items-center justify-center rounded-full text-white hover:bg-white/10 active:bg-white/18 transition-colors duration-200"
                aria-label={
                  mobileOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={mobileOpen}
              >
                <span
                  style={{
                    display: "inline-flex",
                    transform: mobileOpen ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.22s ease",
                  }}
                >
                  {mobileOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* ── Mobile slide-down menu ── */}
          <div
            className={cn("mob-panel md:hidden", mobileOpen && "is-open")}
            /* Allow the panel itself to scroll on very short phones */
            style={{ overflowY: "auto", WebkitOverflowScrolling: "touch" }}
          >
            <div
              className="px-3 pb-4 border-t border-white/8"
              /* Push content down from the border */
              style={{ paddingTop: "6px" }}
            >
              <div className="flex flex-col gap-0.5 pt-1">
                {/* Mobile links */}
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-3.5 text-[15px] font-medium rounded-2xl transition-colors duration-150",
                      isActive(item.href)
                        ? "text-white bg-white/10"
                        : "text-neutral-300 hover:text-white active:bg-white/10 hover:bg-white/7",
                    )}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                    )}
                  </Link>
                ))}

                {/* Portfolio accordion */}
                <button
                  onClick={() => setPortfolioOpen(!portfolioOpen)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3.5 text-[15px] font-medium rounded-2xl transition-colors duration-150",
                    portfolioOpen
                      ? "text-white bg-white/10"
                      : "text-neutral-300 hover:text-white active:bg-white/10 hover:bg-white/7",
                  )}
                >
                  Portfolio
                  <ChevronDown
                    className="w-4 h-4 ml-auto transition-transform duration-200"
                    style={{ transform: portfolioOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <div className={cn("mob-sub", portfolioOpen && "is-open")}>
                  <Link
                    href="/projects/posts"
                    className="flex items-center px-8 py-3 text-[15px] font-medium text-neutral-300 hover:text-white hover:bg-white/8 active:bg-white/10 transition-colors duration-150"
                  >
                    Social Media Posts
                  </Link>
                  <Link
                    href="/projects/videos"
                    className="flex items-center px-8 py-3 text-[15px] font-medium text-neutral-300 hover:text-white hover:bg-white/8 active:bg-white/10 transition-colors duration-150"
                  >
                    Video Edits
                  </Link>
                </div>

                {/* Resume row */}
                <Link
                  href="/cv"
                  className="flex items-center gap-2.5 mt-1.5 px-4 py-3.5 text-[15px] font-medium text-white bg-white/7 hover:bg-white/12 active:bg-white/16 rounded-2xl transition-colors duration-150 border border-white/8"
                >
                  <FileText className="w-4 h-4 shrink-0 text-amber-400/80" />
                  Resume / CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
