"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// Note: Card components kept for the Services section
import {
  ArrowRight,
  Palette,
  Code,
  Mail,
  Video,
  Sparkles,
  MapPin,
  Tag,
} from "lucide-react";

// Profile picture
import pfpImage from "@/assets/pfp.jpg";

// Work showcase images
import tpslImage from "@/assets/tpsl.jpg";
import trvlpediaImage from "@/assets/Ultimate-car-care-Updated.png";
import axelaImage from "@/assets/Axela Post1.png";
import hpImage from "@/assets/HP 470 G7 Notebook 2.png";
import borderlineImage from "@/assets/New Year post.png";
import brakePostImage from "@/assets/Post 1.png";

const bestWorks = [
  tpslImage,
  trvlpediaImage,
  axelaImage,
  hpImage,
  borderlineImage,
  brakePostImage,
];

const stats = [
  { value: "4+", label: "Years Exp." },
  { value: "40+", label: "Projects" },
  { value: "20+", label: "Clients" },
];

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ringPulse {
          0%, 100% { box-shadow: 0 0 0 0px rgba(251,191,36,0.35), 0 0 32px rgba(251,191,36,0.15); }
          50%       { box-shadow: 0 0 0 6px rgba(251,191,36,0.12), 0 0 56px rgba(251,191,36,0.25); }
        }

        .anim-fade-up-1  { animation: fadeUp 0.7s ease-out 0.05s both; }
        .anim-fade-up-2  { animation: fadeUp 0.7s ease-out 0.15s both; }
        .anim-fade-up-3  { animation: fadeUp 0.7s ease-out 0.25s both; }
        .anim-fade-up-4  { animation: fadeUp 0.7s ease-out 0.35s both; }
        .anim-fade-up-5  { animation: fadeUp 0.7s ease-out 0.45s both; }
        .anim-fade-up-6  { animation: fadeUp 0.7s ease-out 0.55s both; }
        .anim-float      { animation: floatY 5s ease-in-out infinite; }
        .anim-ring-pulse { animation: ringPulse 3s ease-in-out infinite; }
        .animate-marquee {
          animation: marquee-scroll 38s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover { animation-play-state: paused; }

        .glass {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .glass-hover {
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }
        .glass-hover:hover {
          background: rgba(255,255,255,0.10);
          border-color: rgba(255,255,255,0.22);
          transform: translateY(-3px);
        }

        .gold-text {
          background: linear-gradient(120deg, #f59e0b, #fcd34d, #d97706);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(212,212,212,0.6);
        }
        .section-label span.line {
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.25);
        }
        .pfp-ring {
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, #f59e0b, #fcd34d 40%, #92400e 70%, #f59e0b);
        }
      `}</style>

      <div className="flex flex-col gap-0 relative z-10">
        {/* ─────────────────────────────────────────────
            HERO SECTION — split layout with profile pic
        ───────────────────────────────────────────── */}
        <section className="relative min-h-dvh flex items-center overflow-hidden pt-28 pb-16 sm:py-28 px-5 md:px-10 lg:px-16">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* ── Left: Text Content ── */}
            <div className="flex flex-col gap-5 sm:gap-7 order-2 lg:order-1">
              {/* Availability badge */}
              <div className="anim-fade-up-1">
                <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-neutral-300 uppercase">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Available for work
                </span>
              </div>

              {/* Name + role */}
              <div className="anim-fade-up-2 flex flex-col gap-3">
                <p className="text-neutral-400 text-sm tracking-[0.2em] uppercase font-medium">
                  Hello, I&apos;m
                </p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight text-white">
                  Timesh <span className="gold-text">Dillon</span>
                </h1>
                <p className="text-neutral-300/80 text-sm md:text-lg tracking-[0.06em] sm:tracking-[0.18em] uppercase">
                  Designer &nbsp;·&nbsp; Video Editor &nbsp;·&nbsp; Developer
                </p>
              </div>

              {/* Bio */}
              <p className="anim-fade-up-3 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                A passionate creative who blends{" "}
                <span className="text-amber-400 font-medium">
                  visual storytelling
                </span>{" "}
                with modern technology — building brands, videos, and digital
                experiences that leave a lasting impression.
              </p>

              {/* Location */}
              <div className="anim-fade-up-3 flex items-center gap-2 text-neutral-400 text-sm -mt-2">
                <MapPin className="w-4 h-4 text-amber-500/80" />
                <span>Sri Lanka</span>
              </div>

              {/* CTA Buttons */}
              {/* Buttons — stacked full-width on mobile, inline from sm up */}
              <div className="anim-fade-up-4 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black font-bold gap-2 shadow-lg shadow-amber-500/25 transition-all duration-200"
                >
                  <Link href="/projects/posts">
                    View My Work <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-white/25 text-white hover:bg-white/10 hover:border-white/45 gap-2 transition-all duration-200"
                >
                  <Link href="/services">
                    <Tag className="w-4 h-4" /> See Pricing
                  </Link>
                </Button>
                {/* Plain Link — avoids CVA ghost hover:text-accent-foreground conflict */}
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium text-neutral-400 hover:text-amber-400 hover:bg-amber-500/8 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" /> Contact
                </Link>
              </div>

              {/* Stats — spread evenly on mobile, left-aligned on sm+ */}
              <div className="anim-fade-up-5 flex justify-around sm:justify-start flex-nowrap sm:flex-wrap w-full sm:w-auto gap-2 sm:gap-6 pt-4 sm:pt-2 border-t border-white/8 sm:border-t-0">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center sm:items-start"
                  >
                    <span className="text-2xl font-bold gold-text">
                      {s.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-neutral-400 tracking-wider sm:tracking-widest uppercase">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Profile Picture ── */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="anim-float relative">
                {/* Outer decorative ring */}
                <div className="pfp-ring anim-ring-pulse">
                  <div className="rounded-full overflow-hidden w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] relative bg-black">
                    <Image
                      src={pfpImage}
                      alt="Timesh Dillon"
                      fill
                      priority
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 360px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Floating skill badges — hidden on xs, shown from sm up */}
                <div className="hidden sm:flex anim-fade-up-1 absolute -top-4 -right-8 md:-right-10 glass rounded-2xl px-3 py-2 items-center gap-2 text-xs font-semibold text-white shadow-lg">
                  <Palette className="w-3.5 h-3.5 text-amber-400" />
                  Graphic Design
                </div>
                <div className="hidden sm:flex anim-fade-up-2 absolute -bottom-4 -left-8 md:-left-10 glass rounded-2xl px-3 py-2 items-center gap-2 text-xs font-semibold text-white shadow-lg">
                  <Code className="w-3.5 h-3.5 text-sky-400" />
                  Web Dev
                </div>
                <div className="hidden sm:flex anim-fade-up-3 absolute top-1/2 -translate-y-1/2 -right-8 md:-right-14 glass rounded-2xl px-3 py-2 items-center gap-2 text-xs font-semibold text-white shadow-lg">
                  <Video className="w-3.5 h-3.5 text-violet-400" />
                  Video Edit
                </div>

                {/* Decorative blur orbs behind the photo */}
                <div className="absolute inset-0 -z-10 rounded-full bg-amber-600/20 blur-3xl scale-125" />
              </div>
            </div>
          </div>

          {/* Scroll hint — hidden on mobile (hero taller than viewport, would overlap stats) */}
          <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 opacity-40">
            <span className="text-[10px] tracking-widest uppercase text-neutral-400">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SERVICES SECTION
        ───────────────────────────────────────────── */}
        <section className="py-12 sm:py-20 px-5 md:px-10" id="services">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-2 text-center">
              <div className="flex justify-center">
                <span className="section-label">
                  <span className="line" /> Creative &amp; Digital Services{" "}
                  <span className="line" />
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                What I Offer
              </h2>
              <p className="text-neutral-400 max-w-md mx-auto text-sm">
                Blending creativity and technology to deliver impactful digital
                solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: "Graphic Design",
                  tag: "Branding & Visuals",
                  desc: "Compelling brand identities, marketing creatives, and digital visuals that capture attention and communicate with clarity.",
                  icon: <Palette className="w-6 h-6 text-amber-400" />,
                },
                {
                  title: "Web Development",
                  tag: "Code & UX",
                  desc: "Scalable, high-performance websites that combine seamless functionality with refined user experience.",
                  icon: <Code className="w-6 h-6 text-sky-400" />,
                },
                {
                  title: "Video Editing",
                  tag: "Motion & Production",
                  desc: "Raw footage transformed into engaging, high-impact video content that connects with audiences and strengthens brand identity.",
                  icon: <Video className="w-6 h-6 text-violet-400" />,
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="glass glass-hover rounded-2xl border-0"
                >
                  <CardHeader className="pb-2">
                    <div className="p-3 rounded-xl bg-white/8 border border-white/8 w-fit mb-3">
                      {item.icon}
                    </div>
                    <CardTitle className="text-white text-lg">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-neutral-500 text-xs tracking-wider uppercase">
                      {item.tag}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-neutral-400 text-sm leading-relaxed">
                    {item.desc}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-black font-semibold gap-2 shadow-lg shadow-amber-500/20"
              >
                <Link href="/services">
                  <Tag className="w-4 h-4" /> View Pricing
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass text-neutral-200 hover:text-white hover:bg-white/10 border-white/15 gap-2"
              >
                <Link href="/contact">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Separator className="bg-white/8" />

        {/* ─────────────────────────────────────────────
            SELECTED WORKS MARQUEE SLIDER
        ───────────────────────────────────────────── */}
        <section className="py-10 sm:py-16 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0  w-20 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-3 mb-5 sm:mb-8 px-5 md:px-10 max-w-6xl mx-auto">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Selected Social Media Posts
            </h2>
          </div>

          <div className="flex animate-marquee gap-5 px-5">
            {[...bestWorks, ...bestWorks].map((image, index) => (
              <div
                key={index}
                className="relative shrink-0 w-60 sm:w-72 aspect-square rounded-2xl overflow-hidden glass group cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Selected Work ${(index % bestWorks.length) + 1}`}
                  fill
                  sizes="(max-width: 640px) 240px, 288px"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            CTA SECTION
        ───────────────────────────────────────────── */}
        <section className="relative flex flex-col items-center justify-center text-center py-14 sm:py-24 gap-6 overflow-hidden px-5">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-black/40 pointer-events-none" />
          <div className="relative z-10 glass rounded-3xl p-6 sm:p-10 md:p-14 max-w-2xl w-full flex flex-col items-center gap-5 sm:gap-6">
            <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 font-semibold">
              Let&apos;s Collaborate
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to work <span className="gold-text">together?</span>
            </h2>
            <p className="text-neutral-400 max-w-sm text-sm leading-relaxed">
              Let&apos;s build something amazing. Reach out and let&apos;s
              discuss your project, idea, or collaboration.
            </p>
            {/* CTA buttons — stacked on mobile, inline from sm up */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center mt-2 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black font-semibold gap-2 shadow-lg shadow-amber-500/20"
              >
                <Link href="/contact">
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              {/* Plain Links — avoid CVA outline/ghost hover:text-accent-foreground conflict */}
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium border border-amber-500/45 text-amber-400 hover:text-amber-300 hover:bg-amber-500/14 hover:border-amber-500/70 transition-colors duration-200"
              >
                <Tag className="w-4 h-4" /> See Pricing
              </Link>
              <Link
                href="/projects/posts"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium text-amber-500/80 hover:text-amber-400 hover:bg-amber-500/8 transition-colors duration-200"
              >
                View Work <Sparkles className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
