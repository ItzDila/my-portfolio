"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [isMounted, setIsMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (label: string) =>
    setOpenSection((prev) => (prev === label ? null : label));

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      // Move, don't lock logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !mobileOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  if (!isMounted) return null;

  const springTransition: Transition = {
    type: "spring",
    stiffness: 400,
    damping: 35,
    mass: 1,
  };

  return (
    <>
      <style>{`
        /* Smooth glowing hover effect */
        .nav-link-glow {
          position: relative;
          transition: all 0.3s ease;
        }
        .nav-link-glow:hover {
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
          color: white !important;
        }

        /* Dropdown animations */
        [data-radix-navigation-menu-content] {
          animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dropdown-item {
          position: relative;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          color: white !important;
        }

        .dropdown-item::before {
          content: '';
          position: absolute;
          left: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: white;
          transition: height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
        }

        .dropdown-item:hover {
          padding-left: 8px;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
        }

        .dropdown-item:hover::before {
          height: 18px;
        }
      `}</style>

      {/* Main Header Container - Locked into a static island shape */}
      <motion.header
        initial={false}
        animate={{
          y: isHidden ? "-150%" : "0%",
          width: mobileOpen ? "92%" : "90%",
          maxWidth: "980px",
          top: "24px",
          borderRadius: mobileOpen ? "24px" : "100px",
          backgroundColor: mobileOpen
            ? "rgba(0, 0, 0, 0.85)"
            : isScrolled
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(20px) saturate(160%)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
        transition={springTransition}
        className="fixed z-50 left-1/2 -translate-x-1/2 shadow-2xl max-md:overflow-hidden"
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between w-full",
            "px-6 py-3 md:px-8" // Consistent padding prevents jumping
          )}
        >
          {/* Logo */}
          <a
            href="/"
            className="font-bold tracking-tighter text-white drop-shadow-md whitespace-nowrap transition-colors duration-300 text-lg md:text-xl"
          >
            Timesh Dillon
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">

                <NavigationMenuItem className="nav-item">
                  <NavigationMenuLink
                    href="/"
                    className="nav-link-glow block px-4 py-2 text-sm font-medium drop-shadow-sm text-white"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About Dropdown */}
                <NavigationMenuItem className="nav-item">
                  <NavigationMenuTrigger className="nav-link-glow px-4 py-2 text-sm font-medium cursor-pointer drop-shadow-sm bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-white data-[state=open]:text-white">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[280px] bg-black/80 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/10 mt-2">
                      <ul className="grid gap-3 p-5">
                        <li>
                          <NavigationMenuLink href="/about" className="dropdown-item block text-sm font-medium text-white">
                            About Me
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink href="/about/experiences" className="dropdown-item block text-sm font-medium text-white">
                            Experiences
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink href="/contact" className="dropdown-item block text-sm font-medium text-white">
                            Contact
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Projects Dropdown */}
                <NavigationMenuItem className="nav-item">
                  <NavigationMenuTrigger className="nav-link-glow px-4 py-2 text-sm font-medium cursor-pointer drop-shadow-sm bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-white data-[state=open]:text-white">
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[340px] bg-black/80 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/10 mt-2">
                      <ul className="grid gap-4 p-5">
                        <li>
                          <NavigationMenuLink href="/projects/university" className="dropdown-item block text-sm font-medium text-white">
                            University Projects
                            <p className="text-xs text-neutral-300 font-normal mt-1">Academic work & coursework</p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink href="/projects/video" className="dropdown-item block text-sm font-medium text-white">
                            Video Edits
                            <p className="text-xs text-neutral-300 font-normal mt-1">Motion & video production</p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink href="/projects/design" className="dropdown-item block text-sm font-medium text-white">
                            Post Designs
                            <p className="text-xs text-neutral-300 font-normal mt-1">Social media & graphics</p>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 -mr-1.5 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors duration-200"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 90 : 0, scale: mobileOpen ? 1.1 : 1 }}
              transition={springTransition}
              className="block"
            >
              {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </motion.span>
          </button>
        </div>

        {/* Mobile Menu Expansion */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={springTransition}
              className="md:hidden w-full px-5"
            >
              <div className="flex flex-col pb-4 border-t border-white/10 mt-1">
                <a
                  href="/"
                  className="block py-3 text-sm font-medium text-white hover:text-white/70 border-b border-white/10 transition-colors nav-link-glow"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </a>

                <div>
                  <button
                    className="flex w-full items-center justify-between py-3 text-sm font-medium text-white hover:text-white/70 border-b border-white/10 transition-colors nav-link-glow"
                    onClick={() => toggleSection("About")}
                  >
                    About
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "About" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openSection === "About" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={springTransition}
                        className="overflow-hidden ml-3 flex flex-col border-l border-white/20 pl-3"
                      >
                        <div className="py-2 flex flex-col gap-1">
                          <a href="/about" className="py-2 text-sm text-white/80 hover:text-white transition-colors">About Me</a>
                          <a href="/about/experiences" className="py-2 text-sm text-white/80 hover:text-white transition-colors">Experience</a>
                          <a href="/contact" className="py-2 text-sm text-white/80 hover:text-white transition-colors">Contact</a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    className="flex w-full items-center justify-between py-3 text-sm font-medium text-white hover:text-white/70 transition-colors nav-link-glow"
                    onClick={() => toggleSection("Projects")}
                  >
                    Projects
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "Projects" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openSection === "Projects" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={springTransition}
                        className="overflow-hidden ml-3 flex flex-col border-l border-white/20 pl-3 mb-1"
                      >
                         <div className="py-2 flex flex-col gap-1">
                          <a href="/projects/university" className="py-2 text-sm text-white/80 hover:text-white transition-colors">University Projects</a>
                          <a href="/projects/video" className="py-2 text-sm text-white/80 hover:text-white transition-colors">Video Edits</a>
                          <a href="/projects/design" className="py-2 text-sm text-white/80 hover:text-white transition-colors">Post Designs</a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}