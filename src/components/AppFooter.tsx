import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const pageRoutes = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experiences", href: "/about/experiences" },
  { name: "Services", href: "/services" },
  { name: "Graphics", href: "/graphics" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "WhatsApp",
    url: "https://wa.me/94717735051",
    icon: MessageCircle,
    hoverClass: "hover:text-green-300 hover:border-green-400/50",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/timesh-dillon",
    icon: Linkedin,
    hoverClass: "hover:text-blue-300 hover:border-blue-400/50",
  },
  {
    name: "GitHub",
    url: "https://github.com/ItzDila",
    icon: Github,
    hoverClass: "hover:text-white hover:border-white/50",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/___dila.z____/",
    icon: Instagram,
    hoverClass: "hover:text-pink-300 hover:border-pink-400/50",
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/timesh.dillon",
    icon: Facebook,
    hoverClass: "hover:text-blue-300 hover:border-blue-500/50",
  },
];

export default function AppFooter() {
  return (
    <footer className="relative z-20 px-4 pb-6 pt-2">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/15 bg-black/40 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
              Quick Routes
            </p>
            <div className="flex flex-wrap gap-2">
              {pageRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-200 transition-all duration-300 hover:border-white/35 hover:bg-white/10 hover:text-white"
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              Timesh Dillon
            </p>
            <p className="text-xs text-neutral-300">
              Designer and developer building modern digital experiences.
            </p>
            <p className="mt-1 text-xs text-neutral-400">Created by me & All rights reserved @2026 </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 transition-all duration-300 ${link.hoverClass}`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
