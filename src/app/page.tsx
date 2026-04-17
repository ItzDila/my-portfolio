"use client";

import Link from "next/link";
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

export default function Home() {
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

      <div className="flex flex-col gap-0 relative z-10">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-32 gap-8 overflow-hidden min-h-screen flex-center">
          <div className="hero-content flex flex-col items-center gap-6 px-4 relative z-10">
            <div className="absolute inset-0 bg-radial-gradient from-black/20 to-transparent -z-10 blur-3xl rounded-full" />

            <Badge className="badge-animate animate-float glassmorphic text-neutral-100 px-5 py-2 rounded-full">
              ✦ Turning Ideas into Visual Reality
            </Badge>

            <div className="flex flex-col gap-4 max-w-4xl">
              <h1 className="title-animate text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-extrabold tracking-tight drop-shadow-2xl">
                <span className="text-white">
                  Hello👋🏻 <br />I&apos;m Timesh Dillon {" "}
                </span>
                <br />

                <span className="animate-neon-pulse flex justify-center w-full px-4 sm:px-0">
                  <ModernAnimatedHeroTitle
                    phrases={["Creative Designer", "Video Editor ", "Web Developer", "Visual Storyteller", "UI/UX Enthusiast",]}
                    className="courgette-font inline-block mx-auto text-center text-transparent bg-clip-text bg-linear-to-r from-amber-600 via-yellow-300 to-red-500 animate-gradient-flow animate-hue-cycle [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]"
                  />
                </span>
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
                <article key={project.title} className="glass-panel project-card rounded-3xl p-5 sm:p-7">
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
