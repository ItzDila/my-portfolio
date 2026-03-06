"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";
import LiveBackground from "@/components/LiveBackground";

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <style>{`
        /* UI Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Component Classes */
        .hero-content { animation: fadeInUp 0.8s ease-out; }
        .badge-animate { animation: fadeInUp 0.8s ease-out 0.1s both; }
        .title-animate { animation: fadeInUp 0.8s ease-out 0.2s both; }
        .description-animate { animation: fadeInUp 0.8s ease-out 0.3s both; }
        .buttons-animate { animation: fadeInUp 0.8s ease-out 0.4s both; }
        .stats-animate { animation: fadeInUp 0.8s ease-out 0.5s both; }
        .section-animate { animation: fadeInUp 0.8s ease-out; }

        .card-animate { animation: fadeInUp 0.6s ease-out; }
        .card-animate:nth-child(1) { animation-delay: 0.1s; }
        .card-animate:nth-child(2) { animation-delay: 0.2s; }
        .card-animate:nth-child(3) { animation-delay: 0.3s; }

        /* Enhanced Glassmorphism */
        .glassmorphic {
          background: rgba(255, 255, 255, 0.08) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glassmorphic:hover {
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5) !important;
          transform: translateY(-2px);
        }
      `}</style>

      <LiveBackground />

      <div className="flex flex-col gap-0 relative z-10">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-32 gap-8 overflow-hidden min-h-screen flex-center">
          <div className="hero-content flex flex-col items-center gap-8 px-4 relative z-10">
            {/* Added a subtle dark gradient behind the hero text to ensure it's always readable */}
            <div className="absolute inset-0 bg-radial-gradient from-black/20 to-transparent -z-10 blur-3xl rounded-full" />

            <Badge className="badge-animate glassmorphic text-neutral-100 px-4 py-1.5 rounded-full">
              ✦ The Person Behind the Work
            </Badge>

            <div className="flex flex-col gap-4 max-w-4xl">
              <h1 className="title-animate text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl">
                <span className="text-white">About </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-300 to-red-500 animate-pulse">
                  Me
                </span>
              </h1>
              <p className="description-animate text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                I'm{" "}
                <span className="text-white font-semibold">
                  Graphic Designer, Video Editor & Web Developer
                </span>{" "}
                I am creative professional who lives at the intersection of
                design, motion, and code. I believe every pixel has a purpose.
              </p>
            </div>

            <div className="buttons-animate flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="glassmorphic text-white gap-2 border-white/20 hover:bg-white/20"
              >
                <Link href="/services">
                  View Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="glassmorphic text-neutral-200 hover:text-white hover:bg-white/10 border-white/10"
              >
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" /> Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* My Story Section */}
        <section
          className={`flex flex-col gap-10 py-24 px-4 transition-all duration-300 ${isScrolled ? "bg-black/20 backdrop-blur-sm" : ""}`}
          id="story"
        >
          <div className="section-animate flex flex-col gap-2 text-center">
            <Badge
              className={`mx-auto glassmorphic text-neutral-200 px-3 py-1 rounded-full`}
            >
              Background
            </Badge>
            <h2 className="text-4xl font-bold text-white drop-shadow-md">
              My Story
            </h2>
            <p className="text-neutral-300 max-w-xl mx-auto text-sm drop-shadow-sm">
              A little bit about who I am, where I started, and what drives me
              every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
            {[
              {
                title: "Who I Am",
                desc: "I'm a self-driven creative based in Sri Lanka. I started as a graphic designer fascinated by the power of visuals to communicate, and that curiosity never left me. Outside of design and development, I'm also passionate about cars & I love automotive culture, performance machines, and the design engineering behind them.",
                icon: <Star className="w-5 h-5 text-white" />,
              },
              {
                title: "How I Got Here",
                desc: "What began with logo designs and social media creatives grew into video production, UI/UX design, and eventually full-stack web development — each skill building on the last.",
                icon: <Layers className="w-5 h-5 text-white" />,
              },
              {
                title: "What Drives Me",
                desc: "I care deeply about craft. Whether it's a brand identity or a website interaction, I obsess over the details that make an experience feel polished and intentional.",
                icon: <Code className="w-5 h-5 text-white" />,
              },
            ].map((item) => (
              <div key={item.title} className="card-animate">
                <Card className="glassmorphic group h-full">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors border border-white/5">
                      {item.icon}
                    </div>
                    <CardTitle className="text-white text-lg">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-300 text-sm leading-relaxed">
                    {item.desc}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* Skills Section */}
        <section
          className={`w-full transition-all duration-300 ${isScrolled ? "bg-black/20 backdrop-blur-sm" : ""}`}
          id="skills"
        >
          <div className="flex flex-col gap-10 py-24 px-4 max-w-6xl mx-auto w-full">
            <div className="section-animate flex flex-col gap-2 text-center">
              <Badge
                className={`mx-auto glassmorphic text-neutral-200 px-3 py-1 rounded-full`}
              >
                Toolkit
              </Badge>
              <h2 className="text-4xl font-bold text-white drop-shadow-md">
                What I Do Best
              </h2>
              <p className="text-neutral-300 max-w-xl mx-auto text-sm drop-shadow-sm">
                A blend of creative and technical skills that I've honed over 7+
                years of real client work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Visual Design",
                  desc: "From brand identities to social content, I create visuals that are strategic, clean, and built to resonate with the right audience.",
                  tag: "Graphic & Brand Design",
                  icon: <Palette className="w-5 h-5 text-white" />,
                },
                {
                  title: "Motion & Video",
                  desc: "I cut, colour-grade, and produce video content that tells compelling stories — from YouTube edits to branded commercial reels.",
                  tag: "Video Production",
                  icon: <Video className="w-5 h-5 text-white" />,
                },
                {
                  title: "Web & Development",
                  desc: "I build modern, responsive websites and web apps using React and Next.js, focusing on performance, accessibility, and beautiful UI.",
                  tag: "Frontend & Full-Stack",
                  icon: <Code className="w-5 h-5 text-white" />,
                },
              ].map((item) => (
                <div key={item.title} className="card-animate h-full">
                  <Card className="glassmorphic group h-full">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors border border-white/5">
                        {item.icon}
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-neutral-400 text-xs">
                          {item.tag}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-neutral-300 text-sm leading-relaxed">
                      {item.desc}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* Vision Section */}
        <section
          className={`relative flex flex-col items-center justify-center text-center py-28 gap-6 overflow-hidden transition-all duration-300 ${
            isScrolled ? "bg-black/20 backdrop-blur-sm" : ""
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 via-black/30 to-black/60 pointer-events-none" />

          <div className="section-animate flex flex-col items-center gap-6 z-10 glassmorphic p-12 rounded-3xl mx-4 max-w-3xl">
            <Badge className="glassmorphic text-neutral-200 px-4 py-1.5 rounded-full">
              🚀 My Vision
            </Badge>

            <h2 className="text-4xl font-bold text-white drop-shadow-md">
              Building the Future Through{" "}
              <span className="text-orange-500">Code & Creativity</span>
            </h2>

            <p className="text-neutral-200 max-w-md text-sm leading-relaxed">
              My goal is to become a highly skilled software engineer who
              creates scalable, impactful digital systems. I’m constantly
              learning, building, and refining my craft — combining design
              thinking with technical excellence.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <Badge variant="secondary" className="rounded-full">
                Full-Stack Engineering
              </Badge>
              <Badge variant="secondary" className="rounded-full">
                Scalable Systems
              </Badge>
              <Badge variant="secondary" className="rounded-full">
                Clean Architecture
              </Badge>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-6 bg-white text-black hover:bg-neutral-200 gap-2 shadow-xl"
            >
              <Link href="/projects">
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
