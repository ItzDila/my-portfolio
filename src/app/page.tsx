"use client";

import { useEffect, useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Palette,
  Code,
  Layers,
  Star,
  Mail,
  Video,
  Sparkles,
  Rocket,
  Gauge,
  WandSparkles,
} from "lucide-react";
import LiveBackground from "@/components/LiveBackground";
import { ModernAnimatedHeroTitle } from "@/components/ui/modern-animated-hero-section";
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

const serviceCards = [
  {
    title: "Graphic Design",
    desc: "Compelling brand identities, campaigns, and digital assets that make brands instantly recognizable.",
    icon: Palette,
  },
  {
    title: "Web Development",
    desc: "Fast, modern, conversion-focused websites with premium interactions and clean architecture.",
    icon: Code,
  },
  {
    title: "Video Editing",
    desc: "High-retention short and long form video edits tailored for storytelling and social growth.",
    icon: Video,
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .hero-content { animation: fadeInUp 0.7s ease-out; }
        .section-animate { animation: fadeInUp 0.8s ease-out; }
        .animate-gradient-flow {
          background-size: 220% auto;
          animation: gradient-flow 4s ease infinite;
        }
        .animate-marquee {
          animation: marquee-scroll 45s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover { animation-play-state: paused; }

        .glassmorphic {
          background: rgba(255, 255, 255, 0.08) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          border: 1px solid rgba(255, 255, 255, 0.16) !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3) !important;
          transition: all 300ms ease;
        }
        .glassmorphic:hover {
          background: rgba(255, 255, 255, 0.13) !important;
          border-color: rgba(255, 255, 255, 0.24) !important;
          transform: translateY(-2px);
        }
      `}</style>

      <LiveBackground />

      <div className="relative z-10 flex flex-col">
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center sm:py-32">
          <div className="hero-content flex w-full max-w-6xl flex-col items-center gap-8">
            <Badge className="mx-auto">
              <WandSparkles className="size-3.5" />
              Portfolio Direction: Bold × Editorial × Immersive
            </Badge>

            <h1 className="text-4xl font-black leading-[1.04] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-7xl lg:text-8xl">
              Hello 👋🏻 I&apos;m Timesh Dillon
              <span className="mt-3 flex justify-center px-2 sm:px-0">
                <ModernAnimatedHeroTitle
                  phrases={[
                    "Creative Director",
                    "Visual Engineer",
                    "Design Storyteller",
                    "Brand Experience Builder",
                  ]}
                  className="inline-block bg-linear-to-r from-amber-500 via-orange-300 to-rose-400 bg-clip-text text-center text-transparent animate-gradient-flow"
                />
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-relaxed text-neutral-200 sm:text-lg md:text-xl">
              I build high-impact visuals, conversion-focused websites, and social-first
              video content designed to feel premium, perform fast, and adapt beautifully
              on every screen.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Button asChild size="lg" className="glassmorphic text-white">
                <Link href="/services">
                  View Services <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glassmorphic text-white">
                <Link href="/contact">
                  <Mail className="mr-2 size-4" /> Contact Me
                </Link>
              </Button>
            </div>

            <div
              className={`grid w-full max-w-4xl grid-cols-1 gap-4 rounded-2xl p-3 sm:grid-cols-3 sm:p-4 ${
                isScrolled ? "glassmorphic" : "bg-transparent"
              }`}
            >
              {[
                { value: "5+", label: "Years Experience", icon: Rocket },
                { value: "40+", label: "Projects Delivered", icon: Sparkles },
                { value: "95%", label: "Client Satisfaction", icon: Gauge },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4 text-left"
                  >
                    <div className="rounded-lg border border-white/20 bg-white/10 p-2">
                      <Icon className="size-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
                      <p className="text-xs text-neutral-300 sm:text-sm">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Separator className="bg-white/10" />

        <section className={`px-4 py-20 ${isScrolled ? "bg-black/20 backdrop-blur-sm" : ""}`}>
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="section-animate text-center">
              <Badge className="mx-auto">Creative DNA</Badge>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">About Me</h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-300 sm:text-base">
                A multidisciplinary creative focused on meaningful visuals, performance-driven UI,
                and unforgettable brand moments.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  title: "Who I Am",
                  desc: "A design-first creator blending motion, static visuals, and product thinking.",
                  icon: Star,
                },
                {
                  title: "My Story",
                  desc: "Started in graphic design and video, then expanded to code to ship complete digital experiences.",
                  icon: Layers,
                },
                {
                  title: "Approach",
                  desc: "Fast, responsive, and intentional execution with a premium visual language.",
                  icon: Code,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="glassmorphic h-full">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <span className="rounded-lg border border-white/10 bg-white/10 p-2">
                        <Icon className="size-5 text-white" />
                      </span>
                      <CardTitle className="text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm leading-relaxed text-neutral-300">{item.desc}</CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <Separator className="bg-white/10" />

        <section className={`w-full py-16 ${isScrolled ? "bg-black/20 backdrop-blur-sm" : ""}`}>
          <div className="mx-auto mb-8 flex w-full max-w-6xl items-center gap-3 px-4 text-white">
            <Sparkles className="size-5 text-amber-400" />
            <h2 className="text-xl font-bold sm:text-2xl">Selected Social Media Content</h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-black/45 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-black/45 to-transparent" />
            <div className="animate-marquee flex gap-5 px-4 sm:gap-6 sm:px-6">
              {[...bestWorks, ...bestWorks].map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="glassmorphic relative aspect-square w-60 shrink-0 overflow-hidden rounded-2xl bg-black/30 sm:w-72 lg:w-80"
                >
                  <Image
                    src={image}
                    alt={`Portfolio work ${index + 1}`}
                    fill
                    loading={index < 3 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                    className="object-contain p-2 opacity-90 transition-transform duration-700 hover:scale-105 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="bg-white/10" />

        <section className={`px-4 py-20 ${isScrolled ? "bg-black/20 backdrop-blur-sm" : ""}`} id="services">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="section-animate text-center">
              <Badge className="mx-auto">Creative & Digital Services</Badge>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">What I Offer</h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-300 sm:text-base">
                Premium creative systems crafted for visibility, trust, and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {serviceCards.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="glassmorphic h-full">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <span className="rounded-lg border border-white/15 bg-white/10 p-2">
                        <Icon className="size-5 text-white" />
                      </span>
                      <div>
                        <CardTitle className="text-white">{item.title}</CardTitle>
                        <CardDescription className="text-neutral-400">Premium delivery</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm leading-relaxed text-neutral-300">{item.desc}</CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <Separator className="bg-white/10" />

        <section className={`px-4 py-20 ${isScrolled ? "bg-black/20 backdrop-blur-sm" : ""}`}>
          <div className="glassmorphic mx-auto flex w-full max-w-4xl flex-col items-center gap-5 rounded-3xl px-6 py-12 text-center sm:px-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to build your next <span className="text-orange-500">iconic</span> project?
            </h2>
            <p className="max-w-xl text-sm text-neutral-200 sm:text-base">
              Let&apos;s create a portfolio-grade brand presence for your business with speed,
              clarity, and high-end execution.
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-200">
              <Link href="/contact">
                Start a Project <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
