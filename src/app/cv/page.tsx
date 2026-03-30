"use client";

import LiveBackground from "@/components/LiveBackground";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Globe, Github } from "lucide-react";
import profilePhoto from "@/assets/pfp.jpg";

const skills = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Brand Identity",
  "Social Media Design",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "JavaScript",
  "HTML",
  "CSS",
  "PHP",
  "Java",
  "REST API",
  "Git",
];

const experience = [
  {
    role: "Freelance Graphic Designer",
    org: "Self-Employed",
    detail:
      "Created branding, social media creatives, posters, and marketing visuals for multiple clients.",
  },
  {
    role: "Graphic Designer & Video Editor",
    org: "Travelpedia UK",
    detail:
      "Designed promotional campaigns and edited professional travel videos for digital platforms.",
  },
  {
    role: "Web Developer",
    org: "Personal & Academic Projects",
    detail:
      "Developed responsive web applications and full-stack systems using modern frameworks.",
  },
  {
    role: "Backend Developer",
    org: "Software Projects",
    detail:
      "Built backend logic, authentication systems, and API-driven applications.",
  },
];

const services = [
  "Social Media Post Design",
  "Video Editing",
  "Audio Mixing & Cutting",
  "Monthly Content Retainer",
];

export default function CVPage() {
  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <>
      <LiveBackground />
      <style>{`
        @media print {
          html, body {
            background: white !important;
          }

          .print-hide {
            display: none !important;
          }
        }
      `}</style>
      <div className="relative z-10 min-h-screen px-6 py-32 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border border-white/20 bg-black/40 p-1">
            <img
              src={profilePhoto.src}
              alt="Timesh Dillon"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <Badge className="mb-4 bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full">
            Resume / CV
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Timesh Dillon
          </h1>
          <p className="text-neutral-300 text-lg mt-3">
            Graphic Designer • Video Editor • Web Developer
          </p>
          <button
            type="button"
            onClick={handleDownloadPdf}
            className="print-hide mt-5 inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
          >
            Download PDF
          </button>
        </div>

        <Card className="mb-6 rounded-2xl backdrop-blur-xl bg-black/40 border-white/10">
          <CardContent className="pt-6 grid gap-3 sm:grid-cols-2 text-sm text-neutral-200">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>ktimeshdilan007@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+94 71 773 5051</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Rajagiriya, Colombo, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <a href="https://www.linkedin.com/in/timesh-dillon" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                linkedin.com/in/timesh-dillon
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a href="https://github.com/ItzDila" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                github.com/ItzDila
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2 rounded-2xl backdrop-blur-xl bg-black/40 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-300 text-sm leading-relaxed">
              Self-driven creative professional with experience across visual design, motion content, and modern web development.
              I build polished, purposeful digital experiences — from brand visuals and social creatives to responsive full-stack web applications.
            </CardContent>
          </Card>

          <Card className="rounded-2xl backdrop-blur-xl bg-black/40 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-neutral-300">
              {services.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 rounded-2xl backdrop-blur-xl bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {experience.map((item) => (
              <div key={`${item.role}-${item.org}`}>
                <p className="text-white font-semibold">{item.role}</p>
                <p className="text-neutral-400 text-sm">{item.org}</p>
                <p className="text-neutral-300 text-sm mt-1">{item.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="mt-6 rounded-2xl backdrop-blur-xl bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="bg-white/5 border-white/10 text-neutral-200 rounded-full">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
