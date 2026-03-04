"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const themeByRoute: Record<string, string> = {
  "/": "from-fuchsia-500/20 via-cyan-500/20 to-emerald-500/20",
  "/about": "from-violet-500/20 via-sky-500/20 to-teal-500/20",
  "/projects": "from-amber-500/20 via-rose-500/20 to-purple-500/20",
  "/contact": "from-blue-500/20 via-indigo-500/20 to-cyan-500/20",
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const theme =
    themeByRoute[pathname] ??
    "from-slate-500/20 via-zinc-500/20 to-neutral-500/20";

  return (
    <div className="relative">
      <div
        className={`pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br ${theme}`}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}