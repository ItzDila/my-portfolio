"use client";

import { useState, useEffect } from "react";
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
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (label: string) =>
    setOpenSection((prev) => (prev === label ? null : label));

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <style>{`
        @keyframes headerFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes navItemSlide {
          from { opacity: 0; transform: translateX(8px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .header {
          animation: headerFadeIn 0.6s ease-out;
        }

        .nav-item {
          animation: navItemSlide 0.5s ease-out;
        }

        .nav-item:nth-child(1) { animation-delay: 0.05s; }
        .nav-item:nth-child(2) { animation-delay: 0.1s; }
        .nav-item:nth-child(3) { animation-delay: 0.15s; }

        [data-radix-navigation-menu-content] {
          animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nav-link {
          position: relative;
          color: white !important; /* Forces pure white */
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: white;
          transition: width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .dropdown-item {
          position: relative;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          color: white !important; /* Forces pure white in dropdowns */
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
        }

        .dropdown-item:hover {
          padding-left: 8px;
        }

        .dropdown-item:hover::before {
          height: 18px;
        }

        .dropdown-item a {
          text-decoration: none;
        }

        @keyframes mobileMenuIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes accordionIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mobile-menu {
          animation: mobileMenuIn 0.25s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        .accordion-content {
          animation: accordionIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 header",
          "border-b transition-all duration-500 ease-out",
          isScrolled
            ? "border-white/10 bg-black/30 backdrop-blur-xl shadow-lg py-3"
            : "border-transparent bg-transparent py-5"
        )}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className={cn(
                "font-bold tracking-tighter text-white drop-shadow-md transition-all duration-500 ease-out",
                "hover:text-white/80 cursor-pointer",
                isScrolled ? "text-xl" : "text-2xl"
              )}
            >
              Timesh Dillon
            </a>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-1">

                {/* Home Link */}
                <NavigationMenuItem className="nav-item">
                  <NavigationMenuLink
                    href="/"
                    className={cn(
                      "nav-link block px-4 py-2 text-sm font-medium transition-colors duration-300 drop-shadow-sm",
                      "text-white hover:text-white/80"
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About Dropdown */}
                <NavigationMenuItem className="nav-item">
                  <NavigationMenuTrigger
                    className={cn(
                      "nav-link px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer drop-shadow-sm",
                      "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                      "text-white hover:text-white/80 data-[state=open]:text-white"
                    )}
                  >
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[280px] bg-black/60 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/10">
                      <ul className="grid gap-3 p-5">
                        <li>
                          <NavigationMenuLink
                            href="/about"
                            className="dropdown-item block text-sm font-medium text-white hover:text-white/80 transition-all duration-200"
                          >
                            About Me
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="/about/experiences"
                            className="dropdown-item block text-sm font-medium text-white hover:text-white/80 transition-all duration-200"
                          >
                            Experiences
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="/contact"
                            className="dropdown-item block text-sm font-medium text-white hover:text-white/80 transition-all duration-200"
                          >
                            Contact
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Projects Dropdown */}
                <NavigationMenuItem className="nav-item">
                  <NavigationMenuTrigger
                    className={cn(
                      "nav-link px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer drop-shadow-sm",
                      "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                      "text-white hover:text-white/80 data-[state=open]:text-white"
                    )}
                  >
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[340px] bg-black/60 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/10">
                      <ul className="grid gap-4 p-5">
                        <li>
                          <NavigationMenuLink
                            href="/projects/university"
                            className="dropdown-item block text-sm font-medium text-white hover:text-white/80 transition-all duration-200"
                          >
                            University Projects
                            <p className="text-xs text-neutral-300 font-normal mt-1 transition-colors">
                              Academic work & coursework
                            </p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="/projects/video"
                            className="dropdown-item block text-sm font-medium text-white hover:text-white/80 transition-all duration-200"
                          >
                            Video Edits
                            <p className="text-xs text-neutral-300 font-normal mt-1 transition-colors">
                              Motion & video production
                            </p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="/projects/design"
                            className="dropdown-item block text-sm font-medium text-white hover:text-white/80 transition-all duration-200"
                          >
                            Post Designs
                            <p className="text-xs text-neutral-300 font-normal mt-1 transition-colors">
                              Social media & graphics
                            </p>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors duration-200"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className={`block transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${mobileOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}`}>
                {mobileOpen
                  ? <X className="w-6 h-6 text-white" />
                  : <Menu className="w-6 h-6 text-white" />}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mobile-menu md:hidden border-t border-white/10 bg-black/60 backdrop-blur-2xl px-6 pb-5">

            {/* Home */}
            <a
              href="/"
              className="block py-3 text-sm font-medium text-white hover:text-white/70 border-b border-white/10 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </a>

            {/* About */}
            <div>
              <button
                className="flex w-full items-center justify-between py-3 text-sm font-medium text-white hover:text-white/70 border-b border-white/10 transition-colors"
                onClick={() => toggleSection("About")}
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "About" ? "rotate-180" : ""}`} />
              </button>
              {openSection === "About" && (
                <div className="accordion-content ml-3 mb-2 flex flex-col border-l border-white/20 pl-3">
                  <a href="/about" className="py-2 text-sm text-white/80 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>About Me</a>
                  <a href="/about/experiences" className="py-2 text-sm text-white/80 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Experience</a>
                  <a href="/contact" className="py-2 text-sm text-white/80 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Contact</a>
                </div>
              )}
            </div>

            {/* Projects */}
            <div>
              <button
                className="flex w-full items-center justify-between py-3 text-sm font-medium text-white hover:text-white/70 transition-colors"
                onClick={() => toggleSection("Projects")}
              >
                Projects
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "Projects" ? "rotate-180" : ""}`} />
              </button>
              {openSection === "Projects" && (
                <div className="accordion-content ml-3 mb-2 flex flex-col border-l border-white/20 pl-3">
                  <a href="/projects/university" className="py-2 text-sm text-white/80 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>University Projects</a>
                  <a href="/projects/video" className="py-2 text-sm text-white/80 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Video Edits</a>
                  <a href="/projects/design" className="py-2 text-sm text-white/80 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Post Designs</a>
                </div>
              )}
            </div>

          </div>
        )}
      </header>
    </>
  );
}