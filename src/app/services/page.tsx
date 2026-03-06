"use client";

import { useEffect, useState } from "react";
import LiveBackground from "@/components/LiveBackground";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Palette,
  Film,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const services = [
    {
      title: "Post & UI Design",
      price: "$20",
      type: "Starting per design",
      description:
        "High-conversion, modern social media creatives, posters, carousels, and UI/UX mockups tailored to your brand identity.",
      icon: <Palette className="w-6 h-6" />,
      popular: false,
      features: [
        "Custom high-res graphics",
        "Brand color & typography matching",
        "2 Rounds of revisions",
        "Source files included",
      ],
    },
    {
      title: "Video Editing",
      price: "$40",
      type: "Starting per video",
      description:
        "Engaging, high-retention video edits for Reels, TikToks, and YouTube, complete with smooth transitions and effects.",
      icon: <Film className="w-6 h-6" />,
      popular: false,
      features: [
        "Dynamic motion graphics",
        "Color grading & correction",
        "Engaging subtitles & captions",
        "Audio mixing & sound design",
      ],
    },
    {
      title: "Monthly Retainer",
      price: "$450",
      type: "Per month",
      description:
        "The ultimate all-in-one package for creators and brands needing consistent, high-quality monthly content.",
      icon: <CalendarDays className="w-6 h-6" />,
      popular: true,
      features: [
        "15 Social Media Posts",
        "8 Short-form Videos (Reels/TikTok)",
        "Priority 24/7 Support",
        "Monthly Strategy Consultation",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <LiveBackground />

      <div className="relative z-10 min-h-screen px-6 py-32 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
            ✦ Let's Work Together
          </Badge>
          <h1 className="flex flex-col gap-y-0 title-animate text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl mb-6">
            <span className="text-white">
              Services <span className="text-6xl text-white/50">&</span>
              <br />
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-300 to-red-500 animate-pulse text-5xl sm:text-6xl md:text-7xl lg:text-8xl pb-2">
              Pricing
            </span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto drop-shadow-sm">
            Professional design, editing, and development services to elevate
            your digital presence. Choose a package that fits your needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="h-full"
            >
              <Card
                className={`flex flex-col h-full rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-xl bg-black/40 overflow-hidden relative group ${
                  service.popular
                    ? "border-amber-500/50 hover:border-amber-400/80"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                {/* Subtle gradient hover effect inside the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-600 to-yellow-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-20 flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <CardHeader className="relative z-10 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl shadow-inner transition-colors ${
                        service.popular
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30 group-hover:bg-amber-500/30"
                          : "bg-white/10 text-white border border-white/10 group-hover:bg-white/20"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white drop-shadow-sm">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white">
                        {service.price}
                      </span>
                    </div>
                    <CardDescription className="text-neutral-400 mt-1 font-medium">
                      {service.type}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 flex flex-col flex-grow pt-6">
                  <p className="text-sm text-neutral-300 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-5 h-5 shrink-0 ${
                            service.popular
                              ? "text-amber-400"
                              : "text-neutral-400"
                          }`}
                        />
                        <span className="text-sm text-neutral-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`mt-auto w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 ${
                      service.popular
                        ? "bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-black shadow-lg shadow-amber-500/20"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}