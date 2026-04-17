"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Circle } from "lucide-react";
import LiveBackground from "@/components/LiveBackground";

const skills = [
  "Brand Design",
  "Design Systems",
  "Social Campaigns",
  "0→1 Product Work",
  "Cross-functional",
  "Data-informed Design",
  "Prototyping",
  "A/B Testing",
  "Research & Strategy",
  "Design × Engineering",
  "AI-assisted Workflow",
  "Motion-first Storytelling",
];

const projects = [
  {
    id: "01",
    category: "Social & Brand Campaign",
    client: "TP Smart Laundry",
    title: "Campaign Visual System",
    meta: "2023 - 2024 · Sri Lanka",
    metricA: "+42% Reach growth on launch cycle",
    metricB: "12+ creatives delivered per month",
  },
  {
    id: "02",
    category: "Performance Conversion",
    client: "AutoCare Studio",
    title: "Content Funnel Redesign",
    meta: "2024 - 2025 · Sri Lanka",
    metricA: "+23% message conversion uplift",
    metricB: "-31% first-contact drop-off",
  },
  {
    id: "03",
    category: "UI/UX + Web Development",
    client: "Personal Portfolio",
    title: "Immersive Portfolio Architecture",
    meta: "2025 - 2026 · Global",
    metricA: "Responsive across mobile/tablet/desktop",
    metricB: "Performance-first with optimized media",
  },
];

const experience = [
  { role: "Freelance Designer & Developer", years: "2022 - Now" },
  { role: "Creative Designer · Multiple Brands", years: "2020 - 2022" },
  { role: "Graphic Design & Video Foundations", years: "2018 - 2020" },
];

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .glass-panel {
          background: linear-gradient(165deg, rgba(16,20,42,0.82), rgba(10,12,24,0.72));
          border: 1px solid rgba(159, 178, 255, 0.16);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .skill-ticker {
          width: max-content;
          animation: ticker 38s linear infinite;
        }

        .skill-ticker:hover { animation-play-state: paused; }
      `}</style>

      <LiveBackground />

      <div className="relative z-10 bg-[#07080f] text-white">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07080f]/85 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
            <Link href="#top" className="text-sm font-semibold tracking-[0.18em] text-blue-100/90 uppercase">
              TIMESH
            </Link>

            <nav className="hidden items-center gap-6 text-sm text-blue-100/80 md:flex">
              <Link href="#work" className="transition hover:text-white">Work</Link>
              <Link href="#about" className="transition hover:text-white">About</Link>
              <Link href="#contact" className="transition hover:text-white">Contact</Link>
            </nav>

            <span className="text-xs uppercase tracking-[0.16em] text-blue-100/60">Portfolio 2026</span>
          </div>
        </header>

        <main id="top" className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-24 pt-14 sm:px-6 sm:pt-20">
          <section className="grid gap-8 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-5">
              <p className="text-sm tracking-[0.18em] text-blue-100/75 uppercase">Senior Creative Designer</p>
              <h1 className="text-5xl leading-[0.94] font-black tracking-tight sm:text-7xl">
                Timesh <br /> Dillon
              </h1>
              <p className="max-w-xl text-base text-blue-100/80 sm:text-lg">
                Sri Lanka based, working across visual design, social content, motion edits, and modern web experiences.
              </p>

              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-blue-100/80">
                <span className="glass-panel inline-flex items-center gap-2 rounded-full px-3 py-1.5">
                  <Circle className="size-2.5 fill-emerald-300 text-emerald-300" />
                  Available for work
                </span>
                <span className="glass-panel rounded-full px-3 py-1.5">Colombo, Sri Lanka</span>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-5 sm:p-6">
              <p className="text-xs tracking-[0.16em] text-blue-100/65 uppercase">Quick intro</p>
              <p className="mt-3 text-sm text-blue-100/80">
                I help brands look premium and perform better through high-quality creative systems — from campaign concept to shipped UI.
              </p>
              <Button asChild className="mt-5 w-full bg-white text-black hover:bg-neutral-200 sm:w-auto">
                <Link href="#contact">
                  Let&apos;s Talk <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </section>

          <section className="border-y border-white/10 py-4">
            <div className="overflow-hidden">
              <div className="skill-ticker flex gap-7 text-sm text-blue-100/75">
                {[...skills, ...skills].map((item, idx) => (
                  <span key={`${item}-${idx}`} className="whitespace-nowrap">{item}</span>
                ))}
              </div>
            </div>
          </section>

          <section id="work" className="pt-16">
            <p className="text-sm tracking-[0.18em] text-blue-100/65 uppercase">Selected Projects</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Work</h2>

            <div className="mt-8 space-y-4">
              {projects.map((project) => (
                <article key={project.title} className="glass-panel rounded-3xl p-5 sm:p-7">
                  <div className="grid gap-5 lg:grid-cols-[80px_1fr_auto] lg:items-start">
                    <p className="text-2xl font-bold text-blue-200">{project.id}</p>

                    <div>
                      <p className="text-xs tracking-[0.14em] text-blue-100/60 uppercase">{project.category}</p>
                      <p className="mt-2 text-sm text-blue-100/70">{project.client}</p>
                      <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
                      <p className="mt-2 text-sm text-blue-100/70">{project.meta}</p>
                    </div>

                    <div className="space-y-2 text-sm text-blue-100/80 lg:text-right">
                      <p>{project.metricA}</p>
                      <p>{project.metricB}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="about" className="grid gap-7 border-t border-white/10 pt-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm tracking-[0.18em] text-blue-100/65 uppercase">My Story</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">About</h2>
              <p className="mt-5 max-w-2xl text-blue-100/80">
                I build research-aware creative work that stays visually sharp and commercially useful. My process starts with understanding user behavior, then shaping design systems that look premium and ship fast.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-6">
              <h3 className="text-sm tracking-[0.16em] text-blue-100/70 uppercase">Experience</h3>
              <ul className="mt-4 space-y-4">
                {experience.map((item) => (
                  <li key={item.role} className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 text-sm last:border-none last:pb-0">
                    <span className="text-blue-100/85">{item.role}</span>
                    <span className="text-blue-100/60">{item.years}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>

        <footer id="contact" className="border-t border-white/10 bg-black/35">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6">
            <div>
              <p className="text-sm tracking-[0.18em] text-blue-100/65 uppercase">Get in touch</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Say hi! Let&apos;s talk.</h2>
            </div>

            <div className="flex flex-col gap-3 text-blue-100/85 sm:flex-row sm:items-center sm:justify-between">
              <a href="mailto:timeshdillon@gmail.com" className="text-lg font-medium transition hover:text-white">
                timeshdillon@gmail.com
              </a>
              <div className="flex gap-4 text-sm">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="transition hover:text-white">Dribbble</a>
                <a href="https://www.behance.net" target="_blank" rel="noreferrer" className="transition hover:text-white">Behance</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
