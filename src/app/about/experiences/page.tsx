"use client";

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
  Briefcase,
  Laptop,
  Wrench,
  GraduationCap,
  Code,
  Globe,
  Server,
  Database,
  Palette,
  PenTool,
  Fingerprint,
  Share2,
  Clapperboard,
  Sparkles,
  Film,
  Video,
  FileCode,
  Paintbrush,
  Braces,
  Atom,
  Rocket,
  Wind,
  GitBranch,
  Coffee,
  Cable,
  Workflow,
  Monitor,
  Cpu,
  Bug,
  Gauge,
  Boxes,
  GitFork,
  AppWindow,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Experiences() {
  const experiences = [
    {
      title: "Freelance Graphic Designer",
      company: "Self-Employed",
      description:
        "Created branding, social media creatives, posters, and marketing visuals for multiple clients while maintaining modern UI/UX design principles.",
      icon: <Briefcase className="w-5 h-5" />,
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
      icon: <Laptop className="w-5 h-5" />,
      skills: [
        "Adobe Premiere Pro",
        "Adobe After Effects",
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
      icon: <Globe className="w-5 h-5" />,
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
      title: "Backend & Database Development",
      company: "Software Projects",
      description:
        "Built backend logic, handled database management, authentication systems, and REST APIs for academic and personal software projects.",
      icon: <Database className="w-5 h-5" />,
      skills: ["PHP", "Java", "MySQL", "JDBC", "REST API", "System Design"],
    },
    {
      title: "Computer & Laptop Repair Technician",
      company: "Technical Expertise",
      description:
        "Diagnosed and repaired hardware/software issues, installed operating systems, optimized performance, and configured systems.",
      icon: <Wrench className="w-5 h-5" />,
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
        "Currently studying software engineering, OOP, database systems, and full-stack development while building real-world applications.",
      icon: <GraduationCap className="w-5 h-5" />,
      skills: [
        "Object-Oriented Programming",
        "Multithreading",
        "GUI Development",
        "Software Engineering Principles",
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

  const skillIconMap: Record<
    string,
    React.ComponentType<{ className?: string }>
  > = {
    "Adobe Photoshop": Palette,
    "Adobe Illustrator": PenTool,
    "Brand Identity": Fingerprint,
    "Social Media Design": Share2,
    "Adobe Premiere Pro": Clapperboard,
    "Adobe After Effects": Sparkles,
    "Motion Graphics": Film,
    "Video Production": Video,

    HTML: FileCode,
    CSS: Paintbrush,
    JavaScript: Braces,
    React: Atom,
    "Next.js": Rocket,
    "Tailwind CSS": Wind,
    "Node.js": Server,
    Git: GitBranch,

    PHP: FileCode,
    Java: Coffee,
    MySQL: Database,
    JDBC: Cable,
    "REST API": Workflow,
    "System Design": Boxes,

    "Windows OS": Monitor,
    "Hardware Repair": Wrench,
    Troubleshooting: Bug,
    "System Optimization": Gauge,

    "Object-Oriented Programming": Boxes,
    Multithreading: GitFork,
    "GUI Development": AppWindow,
    "Software Engineering Principles": BookOpen,
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
          <Badge className="mb-1 bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
            ✦ My Journey
          </Badge>
          <h1 className=" flex flex-col gap-y-0 title-animate text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl">
            <span className="text-white">
              Works<span className="  text-7xl text-white-3">&</span><br></br>
            </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 via-yellow-300 to-red-500 animate-pulse text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              Experiences
            </span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto drop-shadow-sm">
            From creative design to full-stack software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="h-full"
            >
              <Card className="h-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-xl bg-black/40 border-white/10 hover:border-white/30 hover:bg-black/50 overflow-hidden relative group">
                {/* Subtle gradient hover effect inside the card */}
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <CardHeader className="flex flex-row items-center gap-4 relative z-10">
                  <div className="p-3 rounded-xl bg-white/10 text-white border border-white/10 group-hover:bg-white/20 transition-colors shadow-inner">
                    {exp.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white drop-shadow-sm">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-neutral-400 font-medium">
                      {exp.company}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => {
                      const SkillIcon = skillIconMap[skill] ?? Code;
                      return (
                        <Badge
                          key={i}
                          variant="outline"
                          className="rounded-full bg-white/5 border-white/10 text-neutral-200 hover:bg-white/10 hover:text-white transition-colors inline-flex items-center gap-1.5"
                        >
                          <SkillIcon className="w-3.5 h-3.5" />
                          {skill}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
