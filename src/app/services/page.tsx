"use client";

import {
  Palette,
  Film,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Music2,
  Mail,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Social Media Posts",
    price: "Rs. 1,500",
    unit: "Starting price per design",
    description:
      "High-impact social media creatives, posters, carousels, and product mockups tailored to your brand identity.",
    icon: Palette,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15 border-amber-500/25",
    popular: false,
    features: [
      "Custom high-res graphics",
      "Brand color & typography matching",
      "2 rounds of revisions",
      "Source files included",
    ],
  },
  {
    title: "Video Editing",
    price: "Rs. 2,000",
    unit: "Starting price per video",
    description:
      "High-retention video edits for Reels, TikToks, and YouTube — with smooth transitions, captions, and effects.",
    icon: Film,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15 border-violet-500/25",
    popular: false,
    features: [
      "Dynamic motion graphics",
      "Color grading & correction",
      "Subtitles & captions",
      "Audio mixing & sound design",
    ],
  },
  {
    title: "Audio Mixing",
    price: "Rs. 1,200",
    unit: "Starting price per track",
    description:
      "Professional audio post-production for podcasts, reels, and ads — clean, balanced, and broadcast-ready.",
    icon: Music2,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/15 border-sky-500/25",
    popular: false,
    features: [
      "Multi-track audio mixing",
      "Noise removal & cleanup",
      "Beat & sync cutting",
      "Voiceover leveling & EQ",
    ],
  },
  {
    title: "Monthly Retainer",
    price: "Rs. 100,000",
    unit: "Per month — all-inclusive",
    description:
      "The complete package for brands needing consistent, high-quality content every month with priority support.",
    icon: CalendarDays,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15 border-amber-500/25",
    popular: true,
    features: [
      "15 Social Media Posts",
      "8 Short-form Videos (Reels/TikTok)",
      "Priority 24/7 Support",
      "Monthly Strategy Consultation",
    ],
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .s-f1 { animation: fadeUp 0.6s ease-out 0.05s both; }
        .s-f2 { animation: fadeUp 0.6s ease-out 0.1s  both; }
        .s-f3 { animation: fadeUp 0.6s ease-out 0.2s  both; }
        .s-card { animation: fadeUp 0.6s ease-out both; }
        .s-card:nth-child(1) { animation-delay: 0.1s; }
        .s-card:nth-child(2) { animation-delay: 0.18s; }
        .s-card:nth-child(3) { animation-delay: 0.26s; }
        .s-card:nth-child(4) { animation-delay: 0.34s; }

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
          color: rgba(212,212,212,0.55);
        }
        .section-label .ln {
          display: block; width: 26px; height: 1px;
          background: rgba(255,255,255,0.22);
        }
        .svc-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 20px;
          overflow: hidden;
          transition: background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .svc-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.20);
          transform: translateY(-5px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.45);
        }
        .svc-card.popular {
          border-color: rgba(251,191,36,0.40);
          background: rgba(251,191,36,0.04);
        }
        .svc-card.popular:hover {
          border-color: rgba(251,191,36,0.65);
          background: rgba(251,191,36,0.08);
          box-shadow: 0 24px 48px rgba(251,191,36,0.12);
        }
        .glass {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.11);
        }
      `}</style>

      <div className="relative z-10 min-h-screen py-28 px-5 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {/* ── Page Header ── */}
          <div className="s-f1 flex flex-col gap-4 text-center">
            <div className="flex justify-center">
              <span className="section-label">
                <span className="ln" /> What I Offer <span className="ln" />
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Services &amp; <span className="gold-text">Pricing</span>
            </h1>
            <p className="text-neutral-400 text-base max-w-xl mx-auto leading-relaxed">
              Professional design, video, and development services tailored to
              your brand. All prices are starting rates —{" "}
              <Link
                href="/contact"
                className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
              >
                contact me
              </Link>{" "}
              for a custom quote.
            </p>
          </div>

          {/* ── Pricing Cards ── */}
          <div className="s-f2 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className={`s-card svc-card${svc.popular ? " popular" : ""} relative`}
                >
                  {/* Popular top accent bar */}
                  {svc.popular && (
                    <div className="h-[3px] w-full bg-linear-to-r from-amber-500 via-yellow-400 to-amber-600" />
                  )}

                  {/* Popular pill badge */}
                  {svc.popular && (
                    <div className="absolute top-5 right-4 flex items-center gap-1 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                      <Sparkles className="w-3 h-3" /> Popular
                    </div>
                  )}

                  <div className="p-6 flex flex-col gap-5 grow">
                    {/* Icon + Title */}
                    <div className="flex flex-col gap-3">
                      <div
                        className={`w-fit p-3 rounded-xl border ${svc.iconBg}`}
                      >
                        <Icon className={`w-5 h-5 ${svc.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-base leading-tight">
                          {svc.title}
                        </h3>
                        <p className="text-neutral-500 text-xs mt-0.5">
                          {svc.unit}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="border-t border-white/6 pt-4">
                      <span className="text-3xl font-extrabold text-white tracking-tight">
                        {svc.price}
                      </span>
                      <p className="text-neutral-600 text-[11px] mt-1 italic">
                        Price may vary based on requirements
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {svc.description}
                    </p>

                    {/* Features */}
                    <ul className="flex flex-col gap-2.5 grow">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              svc.popular
                                ? "text-amber-400"
                                : "text-neutral-500"
                            }`}
                          />
                          <span className="text-sm text-neutral-300">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA button */}
                    <Link
                      href="/contact"
                      className={`mt-4 w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-200 ${
                        svc.popular
                          ? "bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20"
                          : "bg-white/8 hover:bg-white/15 text-white border border-white/10 hover:border-white/25"
                      }`}
                    >
                      Get Started <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Custom Quote CTA ── */}
          <div className="s-f3 glass rounded-3xl p-10 md:p-14 text-center flex flex-col items-center gap-6 relative overflow-hidden">
            {/* top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/60 to-transparent" />

            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Need something <span className="gold-text">custom?</span>
              </h2>
              <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                Every brand is unique. Let&apos;s discuss your project and build
                exactly what you need — no cookie-cutter packages.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20 text-sm"
              >
                <Mail className="w-4 h-4" /> Get a Custom Quote
              </Link>
              <Link
                href="/projects/posts"
                className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/14 text-white border border-white/12 hover:border-white/25 font-medium px-6 py-3 rounded-xl transition-all duration-200 text-sm"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
