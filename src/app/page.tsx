"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Mail,
  Sparkles,
  Palette,
  Clapperboard,
  MonitorSmartphone,
} from "lucide-react";
import LiveBackground from "@/components/LiveBackground";
import tpslImage from "@/assets/tpsl.jpg";
import trvlpediaImage from "@/assets/Ultimate-car-care-Updated.png";
import axelaImage from "@/assets/Axela Post1.png";
import hpImage from "@/assets/HP 470 G7 Notebook 2.png";
import borderlineImage from "@/assets/New Year post.png";
import brakePostImage from "@/assets/Post 1.png";
import profileImage from "@/assets/pfp.jpg";

const bestWorks = [
  tpslImage,
  trvlpediaImage,
  axelaImage,
  hpImage,
  borderlineImage,
  brakePostImage,
];

const contentColumns = [
  "Profile",
  "Branding",
  "Packaging",
  "Social Media",
  "Campaigns",
  "UI Design",
  "Video Work",
  "Client Wins",
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 64);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.35; transform: scale(0.97); }
          50% { opacity: 0.7; transform: scale(1.03); }
        }

        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .glass {
          background: linear-gradient(160deg, rgba(40, 49, 110, 0.42), rgba(10, 14, 36, 0.55));
          border: 1px solid rgba(123, 145, 255, 0.26);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 20px 60px rgba(4, 8, 28, 0.55);
        }

        .hero-glow {
          animation: pulseGlow 6s ease-in-out infinite;
        }

        .marquee {
          width: max-content;
          animation: marqueeScroll 42s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <LiveBackground />

      <div className="relative z-10 flex flex-col overflow-hidden text-white">
        <section className="relative min-h-screen px-4 pb-16 pt-28 sm:pt-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="hero-glow absolute left-1/2 top-28 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-blue-600/30 blur-3xl sm:h-[460px] sm:w-[460px]" />
            <p className="absolute left-1/2 top-20 -translate-x-1/2 text-[20vw] font-black uppercase tracking-[0.18em] text-blue-200/10 sm:text-[12vw]">
              Portfolio
            </p>
          </div>

          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 text-center">
            <Badge>
              <Sparkles className="size-3.5" /> Portfolio 2026 Direction
            </Badge>

            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-600/40 blur-2xl" />
              <Image
                src={profileImage}
                alt="Timesh Dillon"
                width={176}
                height={176}
                priority
                className="relative size-36 rounded-full border border-blue-200/30 object-cover shadow-2xl sm:size-44"
              />
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Designing visuals that help brands
              <span className="block bg-linear-to-r from-blue-200 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                sell, scale, and stand out.
              </span>
            </h1>

            <p className="max-w-2xl text-sm text-blue-100/85 sm:text-base">
              A premium blend of graphic design, content direction, and front-end execution — now styled with a darker editorial look inspired by top Behance showcases.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="glass text-white hover:bg-blue-500/20">
                <Link href="/services">
                  View Services <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass text-white hover:bg-blue-500/20">
                <Link href="/contact">
                  <Mail className="mr-2 size-4" /> Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">Contents</h2>

            <div className="no-scrollbar -mx-4 overflow-x-auto px-4">
              <div className="mx-auto grid w-max grid-flow-col gap-3 sm:gap-4">
                {contentColumns.map((item, index) => (
                  <article
                    key={item}
                    className="glass group relative flex h-[270px] w-20 shrink-0 items-end justify-center overflow-hidden rounded-[2.25rem] pb-5 sm:h-[320px] sm:w-24"
                  >
                    <Image
                      src={bestWorks[index % bestWorks.length]}
                      alt={item}
                      fill
                      sizes="96px"
                      className="object-cover opacity-30 saturate-125 transition duration-500 group-hover:scale-105 group-hover:opacity-45"
                    />
                    <span className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
                    <p className="relative z-10 rotate-180 text-lg tracking-wide text-blue-100 [writing-mode:vertical-rl]">
                      {item}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-blue-300/10" />

        <section className={`px-4 py-20 ${isScrolled ? "bg-black/25 backdrop-blur-sm" : ""}`}>
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                icon: Palette,
                title: "Brand Identity",
                description: "Purpose-driven identities with premium visual systems for social and web.",
              },
              {
                icon: MonitorSmartphone,
                title: "Responsive Web",
                description: "Fast, polished interfaces optimized for every device from mobile to 4K.",
              },
              {
                icon: Clapperboard,
                title: "High-impact Video",
                description: "Cinematic cuts and social edits built for retention and brand storytelling.",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="glass h-full text-white">
                  <CardHeader className="space-y-3">
                    <span className="w-fit rounded-xl border border-blue-200/25 bg-blue-300/10 p-2">
                      <Icon className="size-5 text-blue-100" />
                    </span>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-100/85">{card.description}</CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="relative w-full overflow-hidden py-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-black to-transparent" />
          <div className="marquee flex gap-5 px-4 sm:px-6">
            {[...bestWorks, ...bestWorks].map((image, index) => (
              <div key={`${image.src}-${index}`} className="glass relative aspect-[4/5] w-52 shrink-0 overflow-hidden rounded-3xl sm:w-64 lg:w-72">
                <Image
                  src={image}
                  alt={`Showcase work ${index + 1}`}
                  fill
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
