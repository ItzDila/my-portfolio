"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Play, X, Clock, Film } from "lucide-react";
import voxyImage from "@/assets/voxy.png";
import amsLight from "@/assets/ams_light.png";
import sena from "@/assets/sena.png";
import rome from "@/assets/rome.png";
import bfb from "@/assets/bfb.png";
import mtnq from "@/assets/mtnq.png";

interface Video {
  id: number;
  title: string;
  client: string;
  description: string;
  thumbnail: StaticImageData;
  tags: string[];
  duration: string;
  videoUrl: string;
}

const VIDEOS: Video[] = [
  {
    id: 1,
    title: "Amsterdam Light Festival Reel",
    client: "Travelpedia UK",
    description:
      "A captivating reel of the Amsterdam Light Festival — vibrant light installations across the city's iconic canals, edited for maximum visual impact.",
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
      "A cinematic travel reel showcasing the timeless beauty of Rome — from the iconic Colosseum to the romantic Trevi Fountain.",
    thumbnail: rome,
    tags: ["After Effects", "Motion Graphics", "Travel"],
    duration: "0:35",
    videoUrl: "https://streamable.com/e/xs3f4l?autoplay=1",
  },
  {
    id: 3,
    title: "Logo Reveal Animation",
    client: "Sena Excellent Service",
    description:
      "A sleek motion graphics logo reveal — clean design, smooth transitions, and subtle particle effects for a memorable brand introduction.",
    thumbnail: sena,
    tags: ["After Effects", "Logo Animation"],
    duration: "0:10",
    videoUrl: "https://streamable.com/e/q5wnix?autoplay=1",
  },
  {
    id: 4,
    title: "Speed Ramp Vehicle Edit",
    client: "Jayan Gamage",
    description:
      "A dynamic speed-ramp edit for a personal vehicle shoot — tight cuts, synced audio, and cinematic colour grading.",
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
      "A high-energy promotional video highlighting exclusive Black Friday deals, complete with animated subtitles and branded motion graphics.",
    thumbnail: bfb,
    tags: ["Promo", "Subtitles", "Travel"],
    duration: "1:00",
    videoUrl: "https://streamable.com/e/ikn1oe?autoplay=1",
  },
  {
    id: 6,
    title: "Martinique Travel Teaser",
    client: "Travelpedia UK",
    description:
      "A teaser reel capturing the essence of Martinique — pristine beaches, vibrant culture, and Caribbean charm in under 30 seconds.",
    thumbnail: mtnq,
    tags: ["Travel", "Teaser"],
    duration: "0:30",
    videoUrl: "https://streamable.com/e/kzi5e6?autoplay=1",
  },
];

/* ─── Modal ─────────────────────────────────────────────── */
function VideoModal({
  video,
  onClose,
}: {
  video: Video | null;
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

/* ─── Page ───────────────────────────────────────────────── */
export default function VideoWork() {
  const [selected, setSelected] = useState<Video | null>(null);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        .vp-title  { animation: fadeUp 0.65s ease-out 0.05s both; }
        .vp-grid   { animation: fadeUp 0.65s ease-out 0.18s both; }

        .gold-text {
          background: linear-gradient(120deg,#f59e0b,#fcd34d,#d97706);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }

        .vid-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 18px;
          overflow: hidden;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .vid-card:hover {
          border-color: rgba(255,255,255,0.20);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.45);
        }

        .play-btn {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: rgba(251,191,36,0.85);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 28px rgba(251,191,36,0.5);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .vid-card:hover .play-btn {
          background: rgba(251,191,36,1);
          transform: scale(1.1);
          box-shadow: 0 0 40px rgba(251,191,36,0.7);
        }

        .tag-pill {
          display: inline-block;
          padding: 3px 11px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 500;
          color: rgba(200,200,200,0.8);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.11);
        }

        .section-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(212,212,212,0.55);
        }
        .section-label .ln {
          display: block; width: 26px; height: 1px;
          background: rgba(255,255,255,0.22);
        }
      `}</style>

      <div className="relative z-10 min-h-screen py-28 px-5 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-14">
          {/* ── Header ── */}
          <div className="vp-title flex flex-col gap-4 text-center">
            <div className="flex justify-center">
              <span className="section-label">
                <span className="ln" />
                <Film className="w-3.5 h-3.5 text-amber-400" />
                Cinematic Cuts
                <span className="ln" />
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Video <span className="gold-text">Production</span>
            </h1>
            <p className="text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">
              From seamless transitions to complex motion graphics — a
              collection of reels, promos, and cinematic edits.
            </p>
          </div>

          {/* ── Grid ── */}
          <div className="vp-grid grid gap-6 md:grid-cols-2">
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                className="vid-card group cursor-pointer"
                onClick={() => setSelected(video)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* dark overlay */}
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="play-btn">
                      <Play className="w-6 h-6 fill-black text-black ml-0.5" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                    <Clock className="w-3 h-3 opacity-70" />
                    {video.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-3">
                  <div>
                    <h3 className="text-white font-semibold text-base leading-snug group-hover:text-amber-400 transition-colors duration-200">
                      {video.title}
                    </h3>
                    <p className="text-neutral-500 text-xs mt-1">
                      {video.client}
                    </p>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                  {video.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {video.tags.map((t) => (
                        <span key={t} className="tag-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Video Modal ── */}
      <VideoModal video={selected} onClose={() => setSelected(null)} />
    </>
  );
}
