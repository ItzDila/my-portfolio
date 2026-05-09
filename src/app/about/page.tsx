"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Mail,
  MapPin,
  Palette,
  Code,
  Video,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Play,
  X,
  Clock,
  Film,
  Globe,
  Server,
  Wrench,
  Sparkles,
} from "lucide-react";

// ── Profile photo ──
import pfpImage from "@/assets/pfp.jpg";

// ── Post design images ──
import axel1 from "@/assets/Axela Post1.png";
import newyear from "@/assets/New Year post.png";
import tpsl from "@/assets/tpsl.jpg";
import tppg from "@/assets/trvlpedia.jpg";
import js1 from "@/assets/1D Flyer.png";
import js2 from "@/assets/2 in one View Copy.png";
import lp1 from "@/assets/Dell latitude e 5580  1  copy.png";
import lp2 from "@/assets/HP 470 G7 Notebook 2.png";
import rvt1 from "@/assets/Service Record Front.png";
import rvt2 from "@/assets/Diagram Board.png";
import sen1 from "@/assets/sinhala aurudu flyer.png";
import sen2 from "@/assets/Toyota oil copy.png";
import sen3 from "@/assets/fs.png";
import brakePost from "@/assets/Brake-post.png";
import boardImg from "@/assets/Board 1.png";
import teeImg from "@/assets/!st Tee updated b.png";

// ── Video thumbnail images ──
import voxyImage from "@/assets/voxy.png";
import amsLight from "@/assets/ams_light.png";
import sena from "@/assets/sena.png";
import rome from "@/assets/rome.png";
import bfb from "@/assets/bfb.png";
import mtnq from "@/assets/mtnq.png";

// ─────────────────────────────── DATA ───────────────────────────────

const skillCategories = [
  {
    icon: <Palette className="w-5 h-5 text-amber-400" />,
    title: "Design",
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Canva",
      "Lightroom",
    ],
  },
  {
    icon: <Video className="w-5 h-5 text-violet-400" />,
    title: "Video & Motion",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut"],
  },
  {
    icon: <Code className="w-5 h-5 text-sky-400" />,
    title: "Development",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"],
  },
];

const EXPERIENCE = [
  {
    title: "Freelance Graphic Designer",
    company: "Self-Employed",
    description:
      "Created branding, social media creatives, posters, and marketing visuals for multiple clients while maintaining modern UI/UX design principles.",
    Icon: Briefcase,
    color: "text-amber-400",
    bg: "bg-amber-500/12 border-amber-500/25",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Brand Identity",
      "Social Media Design",
    ],
  },
  {
    title: "Graphic Designer & Video Editor",
    company: "Travelpedia UK",
    description:
      "Designed promotional campaigns and edited professional travel videos for digital platforms, improving engagement and brand reach.",
    Icon: Film,
    color: "text-violet-400",
    bg: "bg-violet-500/12 border-violet-500/25",
    skills: [
      "Adobe Premiere Pro",
      "After Effects",
      "Adobe Photoshop",
      "Motion Graphics",
      "Video Production",
    ],
  },
  {
    title: "Web Developer",
    company: "Personal & Academic Projects",
    description:
      "Developed responsive web applications and full-stack systems using modern frameworks and backend technologies.",
    Icon: Globe,
    color: "text-sky-400",
    bg: "bg-sky-500/12 border-sky-500/25",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Git",
    ],
  },
  {
    title: "Backend Development",
    company: "Software Projects",
    description:
      "Built backend logic, authentication systems, and REST APIs for academic and personal software projects.",
    Icon: Server,
    color: "text-emerald-400",
    bg: "bg-emerald-500/12 border-emerald-500/25",
    skills: ["PHP", "Java", "Express.js", "REST API", "System Design"],
  },
  {
    title: "Computer & Laptop Technician",
    company: "Technical Expertise",
    description:
      "Diagnosed and repaired hardware/software issues, installed operating systems, optimized performance, and configured systems.",
    Icon: Wrench,
    color: "text-orange-400",
    bg: "bg-orange-500/12 border-orange-500/25",
    skills: [
      "Windows OS",
      "Hardware Repair",
      "Troubleshooting",
      "System Optimization",
    ],
  },
  {
    title: "BSc (Hons) Computing Student",
    company: "NIBM",
    description:
      "Currently studying software engineering, OOP, and full-stack development while building real-world applications.",
    Icon: GraduationCap,
    color: "text-amber-400",
    bg: "bg-amber-500/12 border-amber-500/25",
    skills: [
      "Object-Oriented Programming",
      "Multithreading",
      "GUI Development",
      "Software Engineering",
    ],
  },
];

interface Post {
  id: number;
  title: string;
  client: string;
  image: StaticImageData;
  tags: string[];
}

const POSTS: Post[] = [
  {
    id: 1,
    title: "Advertisement Flyer",
    client: "Sena Excellent Service",
    image: sen3,
    tags: ["Photoshop", "Ad Design"],
  },
  {
    id: 2,
    title: "Ultimate Car Care Flyer",
    client: "Sena Excellent Service",
    image: sen2,
    tags: ["Illustrator", "Photoshop"],
  },
  {
    id: 3,
    title: "Sinhala New Year Flyer",
    client: "Sena Excellent Service",
    image: sen1,
    tags: ["Photoshop", "Seasonal"],
  },
  {
    id: 4,
    title: "Vehicle Rental Flyer",
    client: "JT Car Rentals",
    image: axel1,
    tags: ["Brand Identity", "Ad Design"],
  },
  {
    id: 5,
    title: "New Year Wishes Post",
    client: "JT Car Rentals",
    image: newyear,
    tags: ["Social Media", "Photoshop"],
  },
  {
    id: 6,
    title: "Multiple Auto Part Flyers",
    client: "JS Auto Parts",
    image: js2,
    tags: ["Layout Design", "Photoshop"],
  },
  {
    id: 7,
    title: "Promotional Flyer",
    client: "JS Auto Parts",
    image: js1,
    tags: ["Brand Identity", "Photoshop"],
  },
  {
    id: 8,
    title: "Laptop Promo Flyer I",
    client: "Laptronics Lanka",
    image: lp1,
    tags: ["Ad Design", "Photoshop"],
  },
  {
    id: 9,
    title: "Laptop Promo Flyer II",
    client: "Laptronics Lanka",
    image: lp2,
    tags: ["Ad Design", "Photoshop"],
  },
  {
    id: 10,
    title: "Service Card Design",
    client: "RevTech PVT LTD",
    image: rvt1,
    tags: ["Service Design", "Brand Identity"],
  },
  {
    id: 11,
    title: "Maintenance Diagram Board",
    client: "RevTech PVT LTD",
    image: rvt2,
    tags: ["Photoshop", "Brand Identity"],
  },
  {
    id: 12,
    title: "Unwind in Sri Lanka — Travel",
    client: "Travelpedia UK",
    image: tpsl,
    tags: ["Travel Design", "Photoshop"],
  },
  {
    id: 13,
    title: "Prague Travel Flyer",
    client: "Travelpedia UK",
    image: tppg,
    tags: ["Travel Design", "Photoshop"],
  },
  {
    id: 14,
    title: "Brake Service Post",
    client: "Sena Excellent Service",
    image: brakePost,
    tags: ["Social Media", "Ad Design"],
  },
  {
    id: 15,
    title: "Workshop Board Design",
    client: "Sena Excellent Service",
    image: boardImg,
    tags: ["Brand Identity", "Print"],
  },
  {
    id: 16,
    title: "T-Shirt Design",
    client: "Personal",
    image: teeImg,
    tags: ["Apparel", "Illustrator"],
  },
];

interface VideoItem {
  id: number;
  title: string;
  client: string;
  description: string;
  thumbnail: StaticImageData;
  tags: string[];
  duration: string;
  videoUrl: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 1,
    title: "Amsterdam Light Festival Reel",
    client: "Travelpedia UK",
    description:
      "A captivating reel of the Amsterdam Light Festival — vibrant light installations across the city's iconic canals.",
    thumbnail: amsLight,
    tags: ["Travel", "Reel"],
    duration: "0:50",
    videoUrl: "https://streamable.com/e/x8x7sx?autoplay=1",
  },
  {
    id: 2,
    title: "Rome Travel Reel",
    client: "Travelpedia UK",
    description:
      "A cinematic travel reel showcasing the timeless beauty of Rome — from the Colosseum to the Trevi Fountain.",
    thumbnail: rome,
    tags: ["After Effects", "Travel"],
    duration: "0:35",
    videoUrl: "https://streamable.com/e/xs3f4l?autoplay=1",
  },
  {
    id: 3,
    title: "Logo Reveal Animation",
    client: "Sena Excellent Service",
    description:
      "A sleek motion graphics logo reveal — clean design, smooth transitions, and subtle particle effects.",
    thumbnail: sena,
    tags: ["After Effects", "Logo"],
    duration: "0:10",
    videoUrl: "https://streamable.com/e/q5wnix?autoplay=1",
  },
  {
    id: 4,
    title: "Speed Ramp Vehicle Edit",
    client: "Jayan Gamage",
    description:
      "A dynamic speed-ramp edit for a personal vehicle shoot — tight cuts, synced audio, and cinematic grading.",
    thumbnail: voxyImage,
    tags: ["Speed Ramp", "Colour Grading"],
    duration: "0:25",
    videoUrl: "https://streamable.com/e/5bi6r1?autoplay=1",
  },
  {
    id: 5,
    title: "Black Friday Travel Promo",
    client: "Travelpedia UK",
    description:
      "A high-energy promo video highlighting exclusive Black Friday deals with animated subtitles.",
    thumbnail: bfb,
    tags: ["Promo", "Travel"],
    duration: "1:00",
    videoUrl: "https://streamable.com/e/ikn1oe?autoplay=1",
  },
  {
    id: 6,
    title: "Martinique Travel Teaser",
    client: "Travelpedia UK",
    description:
      "A teaser reel capturing the essence of Martinique — pristine beaches and Caribbean charm.",
    thumbnail: mtnq,
    tags: ["Travel", "Teaser"],
    duration: "0:30",
    videoUrl: "https://streamable.com/e/kzi5e6?autoplay=1",
  },
];

// ─────────────────────────────── VIDEO MODAL ───────────────────────────────

function VideoModal({
  video,
  onClose,
}: {
  video: VideoItem | null;
  onClose: () => void;
}) {
  if (!video) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        style={{ background: "#09090b" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video w-full bg-black">
          <iframe
            src={video.videoUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="flex items-start justify-between gap-4 p-5 border-t border-white/8">
          <div>
            <h2 className="text-lg font-bold text-white leading-tight">
              {video.title}
            </h2>
            <p className="text-neutral-500 text-xs mt-1">
              Client: {video.client}
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-2 rounded-xl bg-white/8 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────── PAGE ───────────────────────────────

export default function About() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes ringPulse {
          0%,100% { box-shadow: 0 0 0 0px rgba(251,191,36,.30), 0 0 32px rgba(251,191,36,.12); }
          50%      { box-shadow: 0 0 0 6px rgba(251,191,36,.10), 0 0 56px rgba(251,191,36,.22); }
        }
        @keyframes gradShiftPost {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        .a-f1 { animation: fadeUp .65s ease-out .05s both; }
        .a-f2 { animation: fadeUp .65s ease-out .15s both; }
        .a-f3 { animation: fadeUp .65s ease-out .25s both; }
        .a-f4 { animation: fadeUp .65s ease-out .35s both; }
        .a-f5 { animation: fadeUp .65s ease-out .45s both; }
        .a-float { animation: floatY 5s ease-in-out infinite; }
        .a-ring  { animation: ringPulse 3s ease-in-out infinite; }

        .gold-text {
          background: linear-gradient(120deg,#f59e0b,#fcd34d,#d97706);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }

        .glass {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .glass-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 16px;
          transition: background .25s, border-color .25s, transform .25s;
        }
        .glass-card:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.20);
          transform: translateY(-2px);
        }

        .pfp-ring {
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg,#f59e0b,#fcd34d 40%,#92400e 70%,#f59e0b);
        }

        .section-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 600;
          letter-spacing: .22em; text-transform: uppercase;
          color: rgba(212,212,212,.55);
        }
        .section-label .ln { display: block; width: 26px; height: 1px; background: rgba(255,255,255,.22); }

        .skill-pill {
          display: inline-block; padding: 5px 13px; border-radius: 999px;
          font-size: 12px; font-weight: 500; color: rgba(200,200,200,.85);
          background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.11);
          transition: all .2s ease;
        }
        .skill-pill:hover { background: rgba(255,255,255,.11); color: #fff; }

        .exp-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 18px;
          transition: background .25s, border-color .25s, transform .25s, box-shadow .25s;
        }
        .exp-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.18);
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(0,0,0,.4);
        }

        .badge-pill {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 500;
          color: rgba(200,200,200,.8); background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.10);
        }

        .post-card {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 14px; overflow: hidden;
          transition: border-color .25s, transform .25s, box-shadow .25s;
        }
        .post-card:hover {
          border-color: rgba(255,255,255,.22);
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(0,0,0,.4);
        }
        .post-img-wrap { position: relative; overflow: hidden; }
        .post-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top,rgba(0,0,0,.7) 0%,transparent 55%);
          opacity: 0; transition: opacity .3s ease;
        }
        .post-card:hover .post-overlay { opacity: 1; }
        .post-card:hover .post-img { transform: scale(1.05); }
        .post-img { transition: transform .5s cubic-bezier(.4,0,.2,1); }

        .vid-card {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 16px; overflow: hidden;
          transition: border-color .25s, transform .25s, box-shadow .25s;
        }
        .vid-card:hover {
          border-color: rgba(255,255,255,.20);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,.45);
        }
        .play-btn {
          width: 52px; height: 52px; border-radius: 50%;
          background: rgba(251,191,36,.85); backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 26px rgba(251,191,36,.5);
          transition: background .2s, transform .2s, box-shadow .2s;
        }
        .vid-card:hover .play-btn {
          background: rgba(251,191,36,1);
          transform: scale(1.1);
          box-shadow: 0 0 40px rgba(251,191,36,.7);
        }
      `}</style>

      <div className="relative z-10 flex flex-col">
        {/* ══════════════ 1. PROFILE ══════════════ */}
        <section
          id="about"
          className="min-h-dvh flex items-center pt-28 pb-16 sm:py-28 px-5 md:px-10 lg:px-16"
        >
          <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-14 items-center">
            {/* Left: Text */}
            <div className="flex flex-col gap-5 sm:gap-6 order-2 lg:order-1">
              <div className="a-f1">
                <span className="section-label">
                  <span className="ln" /> The Person Behind the Work
                </span>
              </div>
              <div className="a-f2 flex flex-col gap-2">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight text-white">
                  Timesh <span className="gold-text">Dillon</span>
                </h1>
                <p className="text-neutral-400 text-sm tracking-[0.06em] sm:tracking-[0.18em] uppercase mt-1">
                  Designer · Video Editor · Developer
                </p>
              </div>
              <div className="a-f2 flex items-center gap-2 text-neutral-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-500/80" />
                Rajagiriya, Colombo, Sri Lanka
              </div>
              <div className="a-f3 flex flex-col gap-3 max-w-lg">
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  I&apos;m a self-driven creative who lives at the intersection
                  of{" "}
                  <span className="text-amber-400 font-medium">
                    design, motion, and code
                  </span>
                  . I believe every pixel has a purpose — from the logo that
                  defines a brand to the line of code that powers an experience.
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  What began with logo designs and social media creatives grew
                  into video production, UI/UX design, and eventually full-stack
                  web development. Outside of work, I&apos;m passionate about
                  automotive culture.
                </p>
              </div>
              <div className="a-f4 flex justify-around sm:justify-start flex-nowrap sm:flex-wrap w-full sm:w-auto gap-2 sm:gap-8 pt-4 sm:pt-2 border-t border-white/8 sm:border-t-0">
                {[
                  { v: "4+", l: "Years" },
                  { v: "40+", l: "Projects" },
                  { v: "20+", l: "Clients" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="flex flex-col items-center sm:items-start"
                  >
                    <span className="text-2xl font-bold gold-text">{s.v}</span>
                    <span className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest">
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
              <div className="a-f5 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black font-semibold gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Link href="/services">
                    View Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto glass text-neutral-200 hover:text-white hover:bg-white/10 border-white/15 gap-2"
                >
                  <Link href="/contact">
                    <Mail className="w-4 h-4" /> Get in Touch
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="a-float relative">
                <div className="pfp-ring a-ring">
                  <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden relative bg-black">
                    <Image
                      src={pfpImage}
                      alt="Timesh Dillon"
                      fill
                      priority
                      sizes="(max-width:640px) 208px,(max-width:768px) 256px,(max-width:1024px) 320px,340px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="hidden sm:flex absolute -top-3 -right-8 md:-right-10 glass rounded-xl px-3 py-2 text-xs font-semibold text-white shadow-lg items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" /> BSc
                  Computing — NIBM
                </div>
                <div className="hidden sm:flex absolute -bottom-3 -left-8 md:-left-10 glass rounded-xl px-3 py-2 text-xs font-semibold text-white shadow-lg items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-sky-400" /> Open to
                  Freelance
                </div>
                <div className="absolute inset-0 -z-10 rounded-full bg-amber-600/18 blur-3xl scale-125 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-white/8" />

        {/* ══════════════ 2. SKILLS ══════════════ */}
        <section id="skills" className="py-14 sm:py-20 px-5 md:px-10">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-2 text-center">
              <div className="flex justify-center">
                <span className="section-label">
                  <span className="ln" /> Toolkit <span className="ln" />
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Skills &amp; Tools
              </h2>
              <p className="text-neutral-500 text-sm max-w-xs mx-auto">
                Tools and technologies I use daily.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {skillCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="glass-card p-6 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/8 border border-white/8">
                      {cat.icon}
                    </div>
                    <h3 className="text-white font-semibold text-base">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((t) => (
                      <span key={t} className="skill-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="bg-white/8" />

        {/* ══════════════ 3. EXPERIENCE ══════════════ */}
        <section id="experience" className="py-14 sm:py-20 px-5 md:px-10">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-2 text-center">
              <div className="flex justify-center">
                <span className="section-label">
                  <span className="ln" /> Journey <span className="ln" />
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Experience
              </h2>
              <p className="text-neutral-500 text-sm max-w-sm mx-auto">
                From creative design to full-stack software development.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {EXPERIENCE.map((exp) => (
                <div
                  key={exp.title}
                  className="exp-card p-6 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl border ${exp.bg} shrink-0`}>
                      <exp.Icon className={`w-5 h-5 ${exp.color}`} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base leading-snug">
                        {exp.title}
                      </h3>
                      <p className="text-neutral-500 text-xs mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span key={s} className="badge-pill">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="bg-white/8" />

        {/* ══════════════ 4. WORK ══════════════ */}
        <section id="work" className="py-14 sm:py-20 px-5 md:px-10">
          <div className="max-w-6xl mx-auto flex flex-col gap-16">
            {/* Work section heading */}
            <div className="flex flex-col gap-2 text-center">
              <div className="flex justify-center">
                <span className="section-label">
                  <span className="ln" /> Portfolio <span className="ln" />
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                My Work
              </h2>
              <p className="text-neutral-500 text-sm max-w-sm mx-auto">
                A curated collection of design, motion, and development
                projects.
              </p>
            </div>

            {/* ── Post Designs ── */}
            <div id="designs" className="flex flex-col gap-8">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/12 border border-amber-500/25">
                    <Palette className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl">
                      Post Designs
                    </h3>
                    <p className="text-neutral-500 text-xs">
                      Social media graphics &amp; brand creatives
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="bg-amber-500 hover:bg-amber-400 text-black font-semibold gap-2 shrink-0"
                >
                  <Link href="/projects/posts">
                    Social Media Posts <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {POSTS.map((post) => (
                  <div key={post.id} className="post-card group">
                    <div className="post-img-wrap aspect-square bg-neutral-950">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw"
                        className="post-img object-contain p-1"
                      />
                      <div className="post-overlay" />
                    </div>
                    <div className="p-3 flex flex-col gap-1.5">
                      <h4 className="text-white text-xs font-semibold leading-snug group-hover:text-amber-400 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-neutral-500 text-[11px]">
                        {post.client}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((t) => (
                          <span key={t} className="badge-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* divider between sub-sections */}
            <div className="border-t border-white/6" />

            {/* ── Video Edits ── */}
            <div id="videos" className="flex flex-col gap-8">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-violet-500/12 border border-violet-500/25">
                    <Film className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl">
                      Video Edits
                    </h3>
                    <p className="text-neutral-500 text-xs">
                      Reels, promos &amp; cinematic edits
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="bg-violet-500 hover:bg-violet-400 text-black font-semibold gap-2 shrink-0"
                >
                  <Link href="/projects/videos">
                    Video Edits <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {VIDEOS.map((video) => (
                  <div
                    key={video.id}
                    className="vid-card group cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative aspect-video overflow-hidden bg-black">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        sizes="(max-width:768px) 100vw,50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="play-btn">
                          <Play className="w-5 h-5 fill-black text-black ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                        <Clock className="w-3 h-3 opacity-70" />
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                      <div>
                        <h4 className="text-white font-semibold text-sm leading-snug group-hover:text-amber-400 transition-colors">
                          {video.title}
                        </h4>
                        <p className="text-neutral-500 text-xs mt-0.5">
                          {video.client}
                        </p>
                      </div>
                      <p className="text-neutral-400 text-xs leading-relaxed line-clamp-2">
                        {video.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {video.tags.map((t) => (
                          <span key={t} className="badge-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-white/8" />

        {/* ══════════════ 5. CTA ══════════════ */}
        <section className="py-14 sm:py-20 px-5">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5 sm:gap-6 glass rounded-3xl p-6 sm:p-10">
            <p className="text-xs tracking-[0.28em] uppercase text-neutral-500 font-semibold">
              Ready to Create?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Let&apos;s build something{" "}
              <span className="gold-text">great</span>
            </h2>
            <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
              Whether it&apos;s branding, video content, or a full website —
              I&apos;m here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black font-semibold gap-2 shadow-lg shadow-amber-500/20"
              >
                <Link href="/contact">
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto glass text-neutral-200 hover:text-white hover:bg-white/10 border-white/15 gap-2"
              >
                <Link href="/services">
                  View Services <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Video modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}
