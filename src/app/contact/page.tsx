"use client";

import Image from "next/image";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  MapPin,
  ArrowUpRight,
  Clock,
  Sparkles,
  Palette,
  Code,
  Film,
} from "lucide-react";
import pfpImage from "@/assets/pfp.jpg";

const EMAIL = "ktimeshdilan007@gmail.com";

const SOCIAL = [
  {
    name: "LinkedIn",
    handle: "Timesh Dillon",
    url: "https://www.linkedin.com/in/timesh-dillon",
    Icon: Linkedin,
    cls: "sc-linkedin",
  },
  {
    name: "GitHub",
    handle: "ItzDila",
    url: "https://github.com/ItzDila",
    Icon: Github,
    cls: "sc-github",
  },
  {
    name: "Instagram",
    handle: "___dila.z____",
    url: "https://www.instagram.com/___dila.z____/",
    Icon: Instagram,
    cls: "sc-instagram",
  },
  {
    name: "Facebook",
    handle: "Timesh Dillon",
    url: "https://web.facebook.com/timesh.dillon",
    Icon: Facebook,
    cls: "sc-facebook",
  },
];

const SERVICES = [
  { Icon: Palette, label: "Graphic Design", color: "text-amber-400" },
  { Icon: Film, label: "Video Editing", color: "text-violet-400" },
  { Icon: Code, label: "Web Dev", color: "text-sky-400" },
];

export default function Contact() {
  return (
    <>
      <style>{`
        /* ── Entrance animations ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes gradShift {
          0%,100% { background-position:0% 50%; }
          50%      { background-position:100% 50%; }
        }
        @keyframes ringGlow {
          0%,100% {
            box-shadow: 0 0 0 0px rgba(251,191,36,.30),
                        0 0 30px rgba(251,191,36,.10);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(251,191,36,.08),
                        0 0 55px rgba(251,191,36,.20);
          }
        }

        .c-f1 { animation: fadeUp .65s ease-out .04s both; }
        .c-f2 { animation: fadeUp .65s ease-out .14s both; }
        .c-f3 { animation: fadeUp .65s ease-out .24s both; }
        .c-f4 { animation: fadeUp .65s ease-out .34s both; }

        .gold-text {
          background: linear-gradient(120deg,#f59e0b,#fcd34d,#d97706);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 4s ease infinite;
        }

        /* ── Profile photo ring ── */
        .pfp-ring {
          display: inline-block;
          padding: 3px;
          border-radius: 50%;
          background: linear-gradient(135deg,#f59e0b,#fcd34d 40%,#92400e 70%,#f59e0b);
          animation: ringGlow 3s ease-in-out infinite;
        }

        /* ── Profile card ── */
        .profile-card {
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 26px;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          overflow: hidden;
          position: relative;
        }
        /* subtle top-left radial highlight */
        .profile-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 60%; height: 40%;
          background: radial-gradient(ellipse at top left,
            rgba(251,191,36,.07) 0%,
            transparent 70%);
          pointer-events: none;
        }

        /* ── Info rows inside profile card ── */
        .info-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 11px 13px;
          border-radius: 14px;
          transition: background .2s;
          cursor: default;
        }
        a.info-row { cursor: pointer; text-decoration: none; }
        .info-row:hover { background: rgba(255,255,255,.055); }
        .info-icon {
          flex-shrink: 0;
          width: 38px; height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.10);
          display: flex; align-items: center; justify-content: center;
        }

        /* ── Section label ── */
        .sec-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 600;
          letter-spacing: .22em; text-transform: uppercase;
          color: rgba(212,212,212,.55);
        }
        .sec-label .ln {
          display: block; width: 26px; height: 1px;
          background: rgba(255,255,255,.22);
        }

        /* ── Social cards (base) ── */
        .social-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 17px 20px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 18px;
          text-decoration: none;
          transition: background .22s, border-color .22s,
                      transform .22s, box-shadow .22s;
        }
        .social-card:hover { transform: translateY(-3px); }

        .sc-icon {
          flex-shrink: 0;
          width: 44px; height: 44px;
          border-radius: 12px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.10);
          display: flex; align-items: center; justify-content: center;
          color: rgba(175,175,175,.9);
          transition: background .22s, border-color .22s, color .22s;
        }
        .sc-name {
          font-size: 14px; font-weight: 600;
          color: #fff;
          transition: color .22s;
        }
        .sc-handle {
          font-size: 12px;
          color: rgba(155,155,155,.75);
          margin-top: 2px;
        }
        .sc-arr {
          margin-left: auto; flex-shrink: 0;
          color: rgba(120,120,120,.55);
          transition: color .2s, transform .2s;
        }
        .social-card:hover .sc-arr {
          color: rgba(200,200,200,.8);
          transform: translate(2px,-2px);
        }

        /* Platform colours */
        .sc-linkedin:hover {
          background: rgba(59,130,246,.09);
          border-color: rgba(59,130,246,.38);
          box-shadow: 0 12px 36px rgba(59,130,246,.10);
        }
        .sc-linkedin:hover .sc-icon  { color:#60a5fa; background:rgba(59,130,246,.13); border-color:rgba(59,130,246,.28); }
        .sc-linkedin:hover .sc-name  { color:#93c5fd; }

        .sc-github:hover {
          background: rgba(229,231,235,.07);
          border-color: rgba(229,231,235,.28);
          box-shadow: 0 12px 36px rgba(229,231,235,.05);
        }
        .sc-github:hover .sc-icon  { color:#fff; background:rgba(229,231,235,.10); border-color:rgba(229,231,235,.22); }
        .sc-github:hover .sc-name  { color:#fff; }

        .sc-instagram:hover {
          background: rgba(236,72,153,.09);
          border-color: rgba(236,72,153,.38);
          box-shadow: 0 12px 36px rgba(236,72,153,.10);
        }
        .sc-instagram:hover .sc-icon  { color:#f472b6; background:rgba(236,72,153,.14); border-color:rgba(236,72,153,.28); }
        .sc-instagram:hover .sc-name  { color:#f9a8d4; }

        .sc-facebook:hover {
          background: rgba(96,165,250,.09);
          border-color: rgba(96,165,250,.38);
          box-shadow: 0 12px 36px rgba(96,165,250,.10);
        }
        .sc-facebook:hover .sc-icon  { color:#60a5fa; background:rgba(96,165,250,.14); border-color:rgba(96,165,250,.28); }
        .sc-facebook:hover .sc-name  { color:#93c5fd; }

        /* ── Email CTA ── */
        .em-cta {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 22px;
          background: rgba(251,191,36,.055);
          border: 1px solid rgba(251,191,36,.20);
          border-radius: 18px;
          text-decoration: none;
          transition: background .22s, border-color .22s,
                      transform .22s, box-shadow .22s;
        }
        .em-cta:hover {
          background: rgba(251,191,36,.11);
          border-color: rgba(251,191,36,.44);
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(251,191,36,.11);
        }
        .em-cta:hover .cta-arr { color:rgba(251,191,36,.8); transform:translate(2px,-2px); }

        .cta-icon {
          flex-shrink: 0;
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
        }
        .cta-arr {
          margin-left: auto; flex-shrink: 0;
          transition: color .2s, transform .2s;
          color: rgba(130,130,130,.5);
        }

        /* ── Service pill ── */
        .svc-pill {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 6px 14px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.10);
          border-radius: 999px;
          font-size: 12px; font-weight: 500;
          color: rgba(200,200,200,.85);
        }

        /* ── Divider with text ── */
        .or-divider {
          display: flex; align-items: center; gap: 12px;
        }
        .or-divider .od-line { flex:1; height:1px; background:rgba(255,255,255,.07); }
        .or-divider .od-text {
          font-size: 11px; color: rgba(120,120,120,.75);
          font-weight: 500; white-space: nowrap;
        }
      `}</style>

      <div className="relative z-10 min-h-screen py-28 px-5 md:px-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {/* ════════ HERO ════════ */}
          <div className="c-f1 flex flex-col gap-5 text-center">
            <div className="flex justify-center">
              <span className="sec-label">
                <span className="ln" /> Get In Touch <span className="ln" />
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Let&apos;s Work <span className="gold-text">Together</span>
            </h1>

            <p className="text-neutral-400 text-base max-w-md mx-auto leading-relaxed">
              Open to new projects, creative collaborations, and freelance
              opportunities. Pick a channel below — I&apos;d love to hear from
              you.
            </p>

            {/* Service pills */}
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              {SERVICES.map(({ Icon, label, color }) => (
                <span key={label} className="svc-pill">
                  <Icon className={`w-3.5 h-3.5 ${color}`} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* ════════ MAIN GRID ════════ */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* ── Left: Profile card ── */}
            <div className="c-f2 lg:col-span-5">
              <div className="profile-card p-8 flex flex-col items-center text-center gap-6">
                {/* Photo with amber ring */}
                <div className="pfp-ring">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-black relative">
                    <Image
                      src={pfpImage}
                      alt="Timesh Dillon"
                      fill
                      priority
                      sizes="128px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    Timesh Dillon
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    Designer · Video Editor · Developer
                  </p>
                </div>

                {/* Availability badge */}
                <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/22 text-emerald-400 text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                      style={{
                        animation: "ping 1.5s cubic-bezier(0,0,.2,1) infinite",
                      }}
                    />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Available for Work
                </span>

                {/* Divider */}
                <div className="w-full h-px bg-white/8" />

                {/* Info rows */}
                <div className="w-full flex flex-col gap-0.5">
                  <a href={`mailto:${EMAIL}`} className="info-row group">
                    <div className="info-icon">
                      <Mail className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-[11px] text-neutral-500 font-medium">
                        Email
                      </p>
                      <p className="text-sm text-neutral-200 group-hover:text-white transition-colors truncate">
                        {EMAIL}
                      </p>
                    </div>
                  </a>

                  <div className="info-row">
                    <div className="info-icon">
                      <MapPin className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] text-neutral-500 font-medium">
                        Location
                      </p>
                      <p className="text-sm text-neutral-200">
                        Rajagiriya, Colombo, Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="info-row">
                    <div className="info-icon">
                      <Clock className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] text-neutral-500 font-medium">
                        Response Time
                      </p>
                      <p className="text-sm text-neutral-200">
                        Usually within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Social + CTAs ── */}
            <div className="c-f3 lg:col-span-7 flex flex-col gap-4">
              <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-semibold pl-0.5">
                Connect on Social
              </p>

              {/* 2 × 2 social grid */}
              <div className="grid sm:grid-cols-2 gap-3">
                {SOCIAL.map(({ name, handle, url, Icon, cls }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-card ${cls}`}
                  >
                    <div className="sc-icon">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="sc-name">{name}</p>
                      <p className="sc-handle truncate">{handle}</p>
                    </div>
                    <ArrowUpRight className="sc-arr w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* OR divider */}
              <div className="or-divider py-1">
                <div className="od-line" />
                <span className="od-text">or reach me directly</span>
                <div className="od-line" />
              </div>

              {/* Email CTA */}
              <a href={`mailto:${EMAIL}`} className="em-cta">
                <div
                  className="cta-icon"
                  style={{
                    background: "rgba(251,191,36,.10)",
                    border: "1px solid rgba(251,191,36,.20)",
                  }}
                >
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">
                    Send an Email
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5 truncate">
                    {EMAIL}
                  </p>
                </div>
                <ArrowUpRight className="cta-arr w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ════════ BOTTOM NOTE ════════ */}
          <div className="c-f4 flex justify-center">
            <div
              style={{
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "99px",
                padding: "10px 24px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500/60" />
              <span className="text-xs text-neutral-500">
                Based in Sri Lanka &nbsp;·&nbsp; Working with clients worldwide
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500/60" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
