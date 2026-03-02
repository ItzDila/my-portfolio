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
import { ArrowRight, Palette, Code, Layers, Star, Mail, Video, } from "lucide-react";

export default function Home() {
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
        /* Live Background Animations */
        @keyframes moveBlob1 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30vw, 20vh) scale(1.3); }
          66% { transform: translate(-10vw, 40vh) scale(0.8); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes moveBlob2 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-25vw, -30vh) scale(1.2); }
          66% { transform: translate(20vw, -20vh) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes moveBlob3 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(25vw, -20vh) scale(0.9); }
          66% { transform: translate(-30vw, 15vh) scale(1.3); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes moveBlob4 {
          0% { transform: translate(0px, 0px) scale(0.8); }
          33% { transform: translate(-30vw, 30vh) scale(1.2); }
          66% { transform: translate(30vw, -10vh) scale(1); }
          100% { transform: translate(0px, 0px) scale(0.8); }
        }

        @keyframes moveBlob5 {
          0% { transform: translate(0px, 0px) scale(1.1); }
          33% { transform: translate(20vw, 35vh) scale(0.8); }
          66% { transform: translate(-25vw, -25vh) scale(1.3); }
          100% { transform: translate(0px, 0px) scale(1.1); }
        }

        /* UI Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        body {
          overflow-x: hidden;
        }

        .live-bg-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            rgba(15, 15, 20, 1) 0%,
            rgba(25, 25, 35, 1) 25%,
            rgba(35, 20, 30, 1) 50%,
            rgba(20, 25, 40, 1) 75%,
            rgba(10, 15, 30, 1) 100%
          );
        }

        .live-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          -webkit-filter: blur(60px);
          opacity: 0.95;
          will-change: transform;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        .blob-1 {
          top: -15%;
          left: -15%;
          width: max(50vw, 300px);
          height: max(50vw, 300px);
          background: radial-gradient(circle, rgba(190, 81, 3, 0.8), transparent 70%);
          animation: moveBlob1 12s infinite ease-in-out;
        }

        .blob-2 {
          bottom: -15%;
          right: -15%;
          width: max(45vw, 280px);
          height: max(45vw, 280px);
          background: radial-gradient(circle, rgba(255, 206, 27, 0.75), transparent 70%);
          animation: moveBlob2 11s infinite ease-in-out;
        }

        .blob-3 {
          top: 30%;
          left: 20%;
          width: max(55vw, 320px);
          height: max(55vw, 320px);
          background: radial-gradient(circle, rgba(193, 74, 17, 0.7), transparent 70%);
          animation: moveBlob3 14s infinite ease-in-out;
        }

        .blob-4 {
          top: 40%;
          right: 10%;
          width: max(40vw, 260px);
          height: max(40vw, 260px);
          background: radial-gradient(circle, rgba(6, 148, 148, 0.6), transparent 70%);
          animation: moveBlob4 11s infinite ease-in-out;
        }

        .blob-5 {
          top: 60%;
          left: 40%;
          width: max(48vw, 290px);
          height: max(48vw, 290px);
          background: radial-gradient(circle, rgba(13, 219, 137, 0.6), transparent 70%);
          animation: moveBlob5 13s infinite ease-in-out;
        }

        @media (max-width: 768px) {
          .live-blob {
            filter: blur(40px);
            -webkit-filter: blur(40px);
            opacity: 1;
          }
          .blob-1 { width: 85vw; height: 85vw; }
          .blob-2 { width: 80vw; height: 80vw; }
          .blob-3 { width: 90vw; height: 90vw; }
          .blob-4 { width: 75vw; height: 75vw; }
          .blob-5 { width: 82vw; height: 82vw; }
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

      {/* Live Blob Background */}
      <div className="live-bg-container">
        <div className="live-blob blob-1"></div>
        <div className="live-blob blob-2"></div>
        <div className="live-blob blob-3"></div>
        <div className="live-blob blob-4"></div>
        <div className="live-blob blob-5"></div>
      </div>

      <div className="flex flex-col gap-0 relative z-10">

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-32 gap-8 overflow-hidden min-h-screen flex-center">
          <div className="hero-content flex flex-col items-center gap-8 px-4 relative z-10">
            {/* Added a subtle dark gradient behind the hero text to ensure it's always readable */}
            <div className="absolute inset-0 bg-radial-gradient from-black/20 to-transparent -z-10 blur-3xl rounded-full" />

            <Badge className="badge-animate glassmorphic text-neutral-100 px-4 py-1.5 rounded-full">
              ✦ Turning Ideas into Visual Reality
            </Badge>

            <div className="flex flex-col gap-4 max-w-4xl">
              <h1 className="title-animate text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl">
                <span className="text-white">Hi, I'm </span><br></br>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-300 to-red-500 animate-pulse">
                  Timesh Dillon
                </span>
              </h1>
              <p className="description-animate text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                A passionate <span className="text-white font-semibold">Designer, Video Editor & Developer</span> crafting
                beautiful digital experiences that leave a lasting impression.
              </p>
            </div>

            <div className="buttons-animate flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="glassmorphic text-white gap-2 border-white/20 hover:bg-white/20">
                <Link href="/services">
                  View Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glassmorphic text-neutral-200 hover:text-white hover:bg-white/10 border-white/10">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" /> Contact Me
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className={`stats-animate flex flex-wrap gap-8 justify-center mt-8 glassmorphic px-10 py-6 rounded-2xl ${isScrolled ? 'bg-black/20 backdrop-blur-sm' : ''}`}>
              {[
                { value: "7+", label: "Years Experience" },
                { value: "40+", label: "Projects Done" },
                { value: "30+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white drop-shadow-md">{stat.value}</span>
                  <span className="text-sm text-neutral-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* About Section */}
        <section className={`flex flex-col gap-10 py-24 px-4 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-sm' : ''}`} id="about">
          <div className="section-animate flex flex-col gap-2 text-center">
            <Badge className={`mx-auto glassmorphic text-neutral-200 px-3 py-1 rounded-full`}>Background</Badge>
            <h2 className="text-4xl font-bold text-white drop-shadow-md">About Me</h2>
            <p className="text-neutral-300 max-w-xl mx-auto text-sm drop-shadow-sm">
              Where creativity meets purpose — explore the story behind my work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
            {[
              {
                title: "Who I Am",
                desc: "A visual storyteller specializing in graphic design and video editing, with a growing expertise in building smart digital solutions.",
                icon: <Star className="w-5 h-5 text-white" />,
              },
              {
                title: "My Story",
                desc: "I began my journey in graphic design and video editing, working with brands to create impactful visuals, and later expanded into web development to bring my ideas to life through code.",
                icon: <Layers className="w-5 h-5 text-white" />,
              },
              {
                title: "Experience",
                desc: "7+ years delivering branding, digital content, video production, and modern UI experiences for clients across industries.",
                icon: <Code className="w-5 h-5 text-white" />,
              },
            ].map((item) => (
              <div key={item.title} className="card-animate">
                <Card className="glassmorphic group h-full">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors border border-white/5">
                      {item.icon}
                    </div>
                    <CardTitle className="text-white text-lg">{item.title}</CardTitle>
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

        {/* Graphics Section */}
        <section className={`w-full transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-sm' : ''}`} id="graphics">
        <div className="flex flex-col gap-10 py-24 px-4 max-w-6xl mx-auto w-full">
          <div className="section-animate flex flex-col gap-2 text-center">
            <Badge className={`mx-auto glassmorphic text-neutral-200 px-3 py-1 rounded-full`}>Graphics</Badge>
            <h2 className="text-4xl font-bold text-white drop-shadow-md">Creative Works</h2>
            <p className="text-neutral-300 max-w-xl mx-auto text-sm drop-shadow-sm">
              A curated collection of my creative work in branding, visual design, and user interface projects that crafted with strategy and precision...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Portfolio",
                desc: "Explore a curated selection of my latest graphic design, video editing, and digital creative projects crafted for real brands and clients.",
                tag: "Featured Projects",
                icon: <Star className="w-5 h-5 text-white" />,
                href: "/graphics",
              },
              {
                title: "Branding",
                desc: "Strategic logo design, brand identity systems, and cohesive visual languages built to help businesses stand out and stay memorable.",
                tag: "Brand Identity",
                icon: <Palette className="w-5 h-5 text-white" />,
                href: "/graphics/branding",
              },
              {
                title: "UI Design",
                desc: "Modern interface design that balances aesthetics, usability, and seamless user experience across digital platforms.",
                tag: "Interface & UX",
                icon: <Layers className="w-5 h-5 text-white" />,
                href: "/graphics/ui-design",
              },
            ].map((item) => (
              <Link href={item.href} key={item.title}>
                <div className="card-animate h-full">
                  <Card className="glassmorphic group cursor-pointer h-full">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors border border-white/5">
                        {item.icon}
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                        <CardDescription className="text-neutral-400 text-xs">{item.tag}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-neutral-300 text-sm leading-relaxed">
                      {item.desc}
                    </CardContent>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </section>

        <Separator className="bg-white/10" />

        {/* Services Section */}
        <section className={`w-full transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-sm' : ''}`} id="services">
        <div className="flex flex-col gap-10 py-24 px-4 max-w-6xl mx-auto w-full">
          <div className="section-animate flex flex-col gap-2 text-center">
            <Badge className={`mx-auto glassmorphic text-neutral-200 px-3 py-1 rounded-full`}>Creative & Digital Services</Badge>
            <h2 className="text-4xl font-bold text-white drop-shadow-md">What I Offer</h2>
            <p className="text-neutral-300 max-w-xl mx-auto text-sm drop-shadow-sm">
             Blending creativity and technology to deliver impactful digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Graphic Design",
                desc: "Crafting compelling brand identities, marketing creatives, and digital visuals that capture attention and communicate with clarity.",
                icon: <Palette className="w-5 h-5 text-white" />,
                href: "/services",
              },
              {
                title: "Web Development",
                desc: "Developing scalable, high-performance websites that combine seamless functionality with refined user experience.",
                icon: <Code className="w-5 h-5 text-white" />,
                href: "/services/web",
              },
              {
                title: "Video Editing",
                desc: "Transforming raw footage into engaging, high-impact video content that connects with audiences and strengthens brand identity.",
                icon: <Video className="w-5 h-5 text-white" />,
                href: "/services/video",
              },
            ].map((item) => (
              <Link href={item.href} key={item.title}>
                <div className="card-animate h-full">
                  <Card className="glassmorphic group cursor-pointer h-full">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors border border-white/5">
                        {item.icon}
                      </div>
                      <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-neutral-300 text-sm leading-relaxed">
                      {item.desc}
                    </CardContent>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </section>

        <Separator className="bg-white/10" />

        {/* CTA Section */}
        <section className={`relative flex flex-col items-center justify-center text-center py-28 gap-6 overflow-hidden transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-sm' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 via-black/20 to-black/50 pointer-events-none" />
          <div className="section-animate flex flex-col items-center gap-6 z-10 glassmorphic p-12 rounded-3xl mx-4 max-w-3xl">
            <h2 className="text-4xl font-bold text-white drop-shadow-md">
              Ready to work <span className="text-orange-600">together?</span>
            </h2>
            <p className="text-neutral-200 max-w-md text-sm">
              Let's build something amazing. Reach out and let's discuss your project.
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-200 gap-2 shadow-xl mt-4">
              <Link href="/contact">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}