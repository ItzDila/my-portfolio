"use client";

import { useEffect, useState } from "react";
import LiveBackground from "@/components/LiveBackground";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle, // Using this for WhatsApp
  MapPin,
  ArrowUpRight,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/pfp.jpg";

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const socialLinks = [

    {
      name: "WhatsApp",
      username: "+94 71 773 5051",
      url: "https://wa.me/94717735051",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "group-hover:text-green-400",
      border: "hover:border-green-500/50",
    },
    {
      name: "LinkedIn",
      username: "Timesh Dillon",
      url: "www.linkedin.com/in/timesh-dillon",
      icon: <Linkedin className="w-6 h-6" />,
      color: "group-hover:text-blue-400",
      border: "hover:border-blue-500/50",
    },
    {
      name: "GitHub",
      username: "ItzDila",
      url: "https://github.com/ItzDila",
      icon: <Github className="w-6 h-6" />,
      color: "group-hover:text-white",
      border: "hover:border-white/50",
    },
    {
      name: "Instagram",
      username: "___dila.z____",
      url: "https://www.instagram.com/___dila.z____/",
      icon: <Instagram className="w-6 h-6" />,
      color: "group-hover:text-pink-400",
      border: "hover:border-pink-500/50",
    },
    {
      name: "Facebook",
      username: "Timesh Dillon",
      url: "https://web.facebook.com/timesh.dillon",
      icon: <Facebook className="w-6 h-6" />,
      color: "group-hover:text-blue-500",
      border: "hover:border-blue-600/50",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <LiveBackground />

      <div className="relative z-10 min-h-screen px-6 py-32 max-w-6xl mx-auto flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
            ✦ Get In Touch
          </Badge>
          <h1 className="flex flex-col gap-y-0 title-animate text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl mb-6">
            <span className="text-white">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-300 to-red-500 animate-pulse pb-2">Connect</span>
            </span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto drop-shadow-sm">
            Whether you have a project in mind, need a graphic designer, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Profile Card (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <Card className="rounded-3xl shadow-xl backdrop-blur-xl bg-black/40 border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                <div className="relative w-40 h-40 mb-6 rounded-full p-1 bg-gradient-to-r from-amber-500 to-red-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    {/* REPLACE src WITH YOUR ACTUAL IMAGE PATH */}
                    <img
                      src={profilePhoto.src}
                      alt="Profile Picture"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-md">
                  Timesh Dillon
                </h2>
                <p className="text-neutral-400 font-medium mb-6 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Designer & Developer
                </p>

                <div className="w-full h-px bg-white/10 mb-6" />

                <div className="flex flex-col gap-4 w-full">
                  <a href="mailto:hello@yourdomain.com" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5">
                    <div className="p-2 rounded-lg bg-white/10 text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-sm">ktimeshdilan007@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-neutral-300 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="p-2 rounded-lg bg-white/10 text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-sm">Rajagiriya, Colombo, Sri Lanka</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links Grid (Right Column) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.div key={index} variants={itemVariants}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className={`h-full rounded-2xl backdrop-blur-xl bg-black/40 border-white/10 transition-all duration-300 group ${link.border} hover:bg-black/60 hover:-translate-y-1`}>
                    <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-400 transition-colors ${link.color}`}>
                          {link.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg text-white font-semibold">
                            {link.name}
                          </CardTitle>
                          <p className="text-sm text-neutral-400 font-medium mt-1">
                            {link.username}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                    </CardHeader>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}