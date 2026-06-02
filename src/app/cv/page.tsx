"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Globe, Github } from "lucide-react";
import profilePhoto from "../../assets/pfp.png";

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
  "Branding & Visual Identity",
];

export default function CVPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPdf = async () => {
    try {
      setIsDownloading(true);

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 9;
      const contentWidth = pageWidth - margin * 2;

      const colors = {
        bg: [4, 8, 20] as [number, number, number],
        panel: [11, 16, 30] as [number, number, number],
        panelSoft: [18, 23, 42] as [number, number, number],
        stroke: [42, 50, 78] as [number, number, number],
        accent: [198, 166, 100] as [number, number, number],
        accentSoft: [164, 133, 71] as [number, number, number],
        white: [245, 245, 245] as [number, number, number],
        text: [210, 214, 226] as [number, number, number],
        muted: [154, 161, 180] as [number, number, number],
      };

      const education = [
        { title: "Undergrad in Software Engineering", sub: "Sri Lanka" },
        { title: "Pass in G.C.E. O/L", sub: "Sri Lanka" },
      ];

      const languages = [
        { name: "Sinhala", level: "Native" },
        { name: "English", level: "Upper-Intermediate" },
            ];

      const competencies = [
        { name: "Visual Design & Branding", value: 92 },
        { name: "Video Production & Editing", value: 88 },
        { name: "Frontend Development", value: 82 },
        { name: "Backend & API Development", value: 74 },
        { name: "Creative Strategy", value: 86 },
      ];

      // ─── helpers ────────────────────────────────────────────────────────────

      const setFont = (
        size: number,
        color: [number, number, number],
        style: "normal" | "bold" = "normal"
      ) => {
        pdf.setFont("helvetica", style);
        pdf.setFontSize(size);
        pdf.setTextColor(...color);
      };

      const drawLabel = (
        text: string,
        x: number,
        y: number,
        fontSize = 9,
        color: [number, number, number] = colors.text,
        style: "normal" | "bold" = "normal"
      ) => {
        setFont(fontSize, color, style);
        pdf.text(text, x, y);
      };

      /** Returns total height consumed (lines × lineHeight). */
      const drawWrappedText = (
        text: string,
        x: number,
        y: number,
        maxWidth: number,
        fontSize = 8.2,
        color: [number, number, number] = colors.text,
        style: "normal" | "bold" = "normal",
        lineHeight = 4.4
      ): number => {
        setFont(fontSize, color, style);
        const lines = pdf.splitTextToSize(text, maxWidth) as string[];
        lines.forEach((line, i) => pdf.text(line, x, y + i * lineHeight));
        return lines.length * lineHeight;
      };

      /**
       * Draws a gold section heading + extending rule.
       * Returns the Y position where content should start (below the heading).
       */
      const drawSectionTitle = (
        title: string,
        x: number,
        y: number,
        width: number
      ): number => {
        drawLabel(title, x, y, 8.8, colors.accent, "bold");
        const titleW = pdf.getTextWidth(title);
        pdf.setDrawColor(...colors.accentSoft);
        pdf.setLineWidth(0.35);
        pdf.line(x + titleW + 3, y - 1.5, x + width, y - 1.5);
        return y + 5; // generous gap before first item
      };

      const drawRoundedOutline = (
        x: number,
        y: number,
        w: number,
        h: number
      ) => {
        pdf.setDrawColor(...colors.stroke);
        pdf.setLineWidth(0.28);
        pdf.roundedRect(x, y, w, h, 2.5, 2.5, "S");
      };

      // ─── page background + border ────────────────────────────────────────────
      pdf.setFillColor(...colors.bg);
      pdf.rect(0, 0, pageWidth, pageHeight, "F");
      pdf.setDrawColor(...colors.accentSoft);
      pdf.setLineWidth(0.28);
      pdf.rect(3.5, 3.5, pageWidth - 7, pageHeight - 7, "S");

      // ─── header card ─────────────────────────────────────────────────────────
      const headerY = 9;
      const headerH = 48;
      pdf.setFillColor(...colors.panel);
      pdf.roundedRect(margin, headerY, contentWidth, headerH, 3, 3, "F");

      const imageX = margin + 6;
      const imageY = headerY + 9;
      const imageSize = 29;

      try {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = profilePhoto.src;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
        pdf.setDrawColor(...colors.accent);
        pdf.setLineWidth(0.9);
        pdf.rect(imageX - 1.4, imageY - 1.4, imageSize + 2.8, imageSize + 2.8, "S");
        pdf.addImage(img, "JPEG", imageX, imageY, imageSize, imageSize);
      } catch {
        pdf.setFillColor(...colors.panelSoft);
        pdf.rect(imageX, imageY, imageSize, imageSize, "F");
        drawLabel("TD", imageX + 9.5, imageY + 17, 11.5, colors.accent, "bold");
      }

      const textX = imageX + imageSize + 9;
      drawLabel("Timesh Dillon", textX, headerY + 13, 20, colors.white, "bold");
      drawLabel(
        "Graphic Designer  ·  Video Editor  ·  Web Developer",
        textX,
        headerY + 20,
        9,
        colors.accent,
        "bold"
      );
      drawLabel("ktimeshdilan007@gmail.com", textX, headerY + 29, 7.8, colors.text);
      drawLabel("+94 71 773 5051", textX + 52, headerY + 29, 7.8, colors.text);
      drawLabel("Rajagiriya, Colombo, SL", textX + 88, headerY + 29, 7.8, colors.text);
      drawLabel(
        "linkedin.com/in/timesh-dillon",
        textX,
        headerY + 35.5,
        7.8,
        colors.accentSoft,
        "bold"
      );
      drawLabel(
        "github.com/ItzDila",
        textX + 61,
        headerY + 35.5,
        7.8,
        colors.accentSoft,
        "bold"
      );

      // ─── two-column body ─────────────────────────────────────────────────────
      const bodyY = headerY + headerH + 7;
      const leftW = 57;
      const leftX = margin;
      const colGap = 5;
      const rightX = leftX + leftW + colGap;
      const rightW = contentWidth - leftW - colGap;

      // vertical divider
      pdf.setDrawColor(...colors.accentSoft);
      pdf.setLineWidth(0.3);
      pdf.line(rightX - 2.5, bodyY, rightX - 2.5, pageHeight - margin - 2);

      let leftY = bodyY;
      let rightY = bodyY;
      const sectionGap = 6; // space between sections
      const innerPad = 4;   // padding inside outline boxes

      // ── LEFT: SERVICES ───────────────────────────────────────────────────────
      const servicesTop = leftY;
      leftY = drawSectionTitle("SERVICES", leftX + innerPad, leftY + 5, leftW - innerPad * 2);

      services.forEach((item) => {
        pdf.setFillColor(...colors.accent);
        pdf.circle(leftX + innerPad + 1.2, leftY - 1.1, 0.85, "F");
        drawLabel(item, leftX + innerPad + 4, leftY, 8, colors.white, "bold");
        leftY += 5.4;
      });
      leftY += innerPad;
      drawRoundedOutline(leftX, servicesTop, leftW, leftY - servicesTop);
      leftY += sectionGap;

      // ── LEFT: TECHNICAL SKILLS ───────────────────────────────────────────────
      const skillsTop = leftY;
      leftY = drawSectionTitle("TECHNICAL SKILLS", leftX + innerPad, leftY + 5, leftW - innerPad * 2);

      const groupedSkills = [
        { group: "Design", items: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Branding"] },
        { group: "Frontend", items: ["React", "Next.js", "Tailwind", "JavaScript", "HTML/CSS"] },
        { group: "Backend", items: ["Node.js", "PHP", "Java", "Git"] },
      ];

      groupedSkills.forEach((entry) => {
        drawLabel(entry.group, leftX + innerPad, leftY, 7.8, colors.accent, "bold");
        leftY += 4.5;

        let chipX = leftX + innerPad;
        const chipLineStartY = leftY;
        entry.items.forEach((item) => {
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(6.6);
          const chipW = pdf.getTextWidth(item) + 6;
          if (chipX + chipW > leftX + leftW - innerPad) {
            chipX = leftX + innerPad;
            leftY += 5.6;
          }
          pdf.setFillColor(...colors.panelSoft);
          pdf.setDrawColor(42, 48, 74);
          pdf.roundedRect(chipX, leftY - 3.4, chipW, 4.2, 2, 2, "FD");
          drawLabel(item, chipX + 3, leftY - 0.5, 6.6, colors.text, "bold");
          chipX += chipW + 2;
        });
        leftY += 6.5; // space after last chip row
      });
      leftY += innerPad;
      drawRoundedOutline(leftX, skillsTop, leftW, leftY - skillsTop);
      leftY += sectionGap;

      // ── LEFT: EDUCATION ──────────────────────────────────────────────────────
      const educationTop = leftY;
      leftY = drawSectionTitle("EDUCATION", leftX + innerPad, leftY + 5, leftW - innerPad * 2);

      education.forEach((item) => {
        pdf.setFillColor(...colors.accent);
        pdf.circle(leftX + innerPad + 1.2, leftY - 1.2, 0.85, "F");
        drawWrappedText(item.title, leftX + innerPad + 4, leftY, leftW - innerPad * 2 - 4, 8, colors.white, "bold", 4.2);
        leftY += 4.8;
        drawLabel(item.sub, leftX + innerPad + 4, leftY, 7.2, colors.muted);
        leftY += 5.2;
      });
      leftY += innerPad;
      drawRoundedOutline(leftX, educationTop, leftW, leftY - educationTop);
      leftY += sectionGap;

      // ── LEFT: LANGUAGES ──────────────────────────────────────────────────────
      const languageTop = leftY;
      leftY = drawSectionTitle("LANGUAGES", leftX + innerPad, leftY + 5, leftW - innerPad * 2);

      languages.forEach((item) => {
        drawLabel(item.name, leftX + innerPad, leftY, 8, colors.white, "bold");
        drawLabel("• " + item.level, leftX + innerPad + 20, leftY, 7.5, colors.accentSoft, "bold");
        leftY += 5.2;
      });
      leftY += innerPad;
      drawRoundedOutline(leftX, languageTop, leftW, leftY - languageTop);

      // ── RIGHT: PROFESSIONAL SUMMARY ──────────────────────────────────────────
      const summaryTop = rightY;
      rightY = drawSectionTitle("PROFESSIONAL SUMMARY", rightX + innerPad, rightY + 5, rightW - innerPad * 2);

      const summaryText =
        "Self-driven creative professional with experience across visual design, motion content, and modern web development. I build polished, purposeful digital experiences — from brand visuals and social creatives to responsive full-stack web applications.";

      // measure height first so we can draw background
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8.2);
      const summaryLines = pdf.splitTextToSize(summaryText, rightW - innerPad * 2 - 4) as string[];
      const summaryLineH = 4.4;
      const summaryCardH = innerPad + summaryLines.length * summaryLineH + innerPad;

      pdf.setFillColor(...colors.panelSoft);
      pdf.roundedRect(rightX + 0.5, rightY - 2, rightW - 1, summaryCardH, 3, 3, "F");
      drawRoundedOutline(rightX + 0.5, rightY - 2, rightW - 1, summaryCardH);
      drawWrappedText(summaryText, rightX + innerPad, rightY + innerPad - 2, rightW - innerPad * 2 - 4, 8.2, colors.text, "normal", summaryLineH);
      rightY += summaryCardH + 2;

      drawRoundedOutline(rightX, summaryTop, rightW, rightY - summaryTop);
      rightY += sectionGap;

      // ── RIGHT: EXPERIENCE ────────────────────────────────────────────────────
      const experienceTop = rightY;
      rightY = drawSectionTitle("EXPERIENCE", rightX + innerPad, rightY + 5, rightW - innerPad * 2);

      experience.forEach((item) => {
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(8.1);
        const detailLines = pdf.splitTextToSize(item.detail, rightW - innerPad * 2 - 6) as string[];
        const detailH = detailLines.length * 4.2;
        const cardH = 6 + 5 + detailH + innerPad; // role + org + detail + bottom pad

        pdf.setFillColor(...colors.panelSoft);
        pdf.roundedRect(rightX + 0.5, rightY - 1, rightW - 1, cardH, 3, 3, "F");
        drawRoundedOutline(rightX + 0.5, rightY - 1, rightW - 1, cardH);

        // gold left accent bar
        pdf.setFillColor(...colors.accent);
        pdf.roundedRect(rightX + 0.5, rightY - 1, 2, cardH, 1, 1, "F");

        drawLabel(item.role, rightX + innerPad, rightY + 4, 9, colors.white, "bold");
        drawLabel(item.org, rightX + innerPad, rightY + 9, 7.8, colors.accent, "bold");
        drawWrappedText(item.detail, rightX + innerPad, rightY + 14.5, rightW - innerPad * 2 - 4, 8.1, colors.text, "normal", 4.2);
        rightY += cardH + 3;
      });
      rightY += 1;
      drawRoundedOutline(rightX, experienceTop, rightW, rightY - experienceTop);
      rightY += sectionGap;

      // ── RIGHT: CORE COMPETENCIES ─────────────────────────────────────────────
      const competenciesTop = rightY;
      rightY = drawSectionTitle("CORE COMPETENCIES", rightX + innerPad, rightY + 5, rightW - innerPad * 2);

      competencies.forEach((item) => {
        drawLabel(item.name, rightX + innerPad, rightY, 8, colors.white, "bold");
        drawLabel(`${item.value}%`, rightX + rightW - innerPad - 2, rightY, 7.2, colors.accentSoft, "bold");
        rightY += 2.2;
        // track background
        pdf.setFillColor(28, 35, 58);
        pdf.roundedRect(rightX + innerPad, rightY, rightW - innerPad * 2, 2.4, 1.2, 1.2, "F");
        // filled portion
        pdf.setFillColor(...colors.accent);
        pdf.roundedRect(
          rightX + innerPad,
          rightY,
          ((rightW - innerPad * 2) * item.value) / 100,
          2.4,
          1.2,
          1.2,
          "F"
        );
        rightY += 6.2;
      });
      rightY += innerPad;
      drawRoundedOutline(rightX, competenciesTop, rightW, rightY - competenciesTop);

      // ── footer ───────────────────────────────────────────────────────────────
      drawLabel(
        "Portfolio: github.com/ItzDila",
        margin + 1,
        pageHeight - 5,
        7.6,
        colors.muted
      );

      pdf.save("Timesh-Dillon-CV.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <style>{`
        @media print {
          html, body { background: white !important; }
          .print-hide { display: none !important; }
        }
      `}</style>
      <div className="relative z-10 min-h-screen px-6 py-32 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-amber-300/35 bg-black/35 p-4 shadow-[0_0_0_1px_rgba(255,215,128,0.1),0_18px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-6">
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
            {isDownloading ? "Generating PDF..." : "Download PDF"}
          </button>
          </div>

          <Card className="relative mb-6 overflow-hidden rounded-2xl border border-amber-300/40 bg-black/70 shadow-[0_0_0_1px_rgba(255,215,128,0.22),0_18px_55px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-3xl">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-amber-400/12 via-transparent to-amber-500/10" />
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
              <a
                href="https://www.linkedin.com/in/timesh-dillon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                linkedin.com/in/timesh-dillon
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a
                href="https://github.com/ItzDila"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
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
              Self-driven creative professional with experience across visual design, motion content,
              and modern web development. I build polished, purposeful digital experiences — from brand
              visuals and social creatives to responsive full-stack web applications.
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
                <Badge
                  key={skill}
                  variant="outline"
                  className="bg-white/5 border-white/10 text-neutral-200 rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}