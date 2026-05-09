"use client";

import Image, { StaticImageData } from "next/image";
import { Palette } from "lucide-react";
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
    title: "Unwind in Sri Lanka — Travel Flyer",
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

export default function SocialMediaWork() {
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

        .pp-title { animation: fadeUp 0.65s ease-out 0.05s both; }
        .pp-grid  { animation: fadeUp 0.65s ease-out 0.18s both; }

        .gold-text {
          background: linear-gradient(120deg,#f59e0b,#fcd34d,#d97706);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }

        /* Post card */
        .post-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .post-card:hover {
          border-color: rgba(255,255,255,0.22);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.45);
        }

        /* Image overlay */
        .post-img-wrap { position: relative; overflow: hidden; }
        .post-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .post-card:hover .post-overlay { opacity: 1; }
        .post-card:hover .post-img { transform: scale(1.05); }
        .post-img {
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
        }

        /* Tags */
        .tag-pill {
          display: inline-block;
          padding: 3px 10px;
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
          <div className="pp-title flex flex-col gap-4 text-center">
            <div className="flex justify-center">
              <span className="section-label">
                <span className="ln" />
                <Palette className="w-3.5 h-3.5 text-amber-400" />
                Visual Storytelling
                <span className="ln" />
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Post <span className="gold-text">Designs</span>
            </h1>
            <p className="text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">
              A curated gallery of social media posts, flyers, and brand
              creatives crafted for real clients.
            </p>
            <div className="flex justify-center gap-4 text-xs text-neutral-500 font-medium">
              <span>{POSTS.length} projects</span>
              <span>·</span>
              <span>Graphic Design</span>
              <span>·</span>
              <span>Branding</span>
            </div>
          </div>

          {/* ── Grid ── */}
          <div className="pp-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <div key={post.id} className="post-card group">
                {/* Image */}
                <div className="post-img-wrap aspect-square bg-neutral-950">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="post-img object-contain p-1"
                  />
                  {/* hover gradient overlay */}
                  <div className="post-overlay" />
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col gap-2.5">
                  <div>
                    <h3 className="text-white text-sm font-semibold leading-snug group-hover:text-amber-400 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-neutral-500 text-xs mt-0.5">
                      {post.client}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((t) => (
                      <span key={t} className="tag-pill">
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
    </>
  );
}
