"use client";

import React, { useState, useEffect } from "react";
import LiveBackground from "@/components/LiveBackground";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { isLowEndAndroidDevice } from "@/lib/device-performance";

interface Post {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
}

const POSTS_DATA: Post[] = [
  {
    id: 1,
    title: "Sena Excellent Service Advertisment Flyer",
    client: "Sena Excellent Service",
    description: "Designed a high-conversion Instagram ad campaign featuring ",
    image: "/uploads/posts/1774085333441-cut-and-polish-2.png",
    tags: ["Photoshop", "Ad Design"],
  },
  {
    id: 2,
    title: "Ultimate Car Care Flyer",
    client: "Sena Excellent Service",
    description: "Designed a vibrant and attention-grabbing flyer for Ultimate Car Care, focusing on clarity, brand identity, and visual appeal. The layout highlights key services, promotions,  combining modern typography with dynamic imagery to attract car owners and enhance customer engagement.",
    image: "/uploads/posts/1774085602351-ultimate-car-care.png",
    tags: ["Illustrator", "Social Media", "Photoshop"],
  },
  {
    id: 3,
    title: "Artisan Coffee Branding",
    client: "Brew Haven",
    description: "Created a cozy, warm-toned mood board and social media launch assets for a local artisanal coffee shop.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
    tags: ["Brand Identity", "Photography", "Food & Beverage"],
  },
  {
    id: 4,
    title: "Minimalist Fashion Story",
    client: "Aura Boutique",
    description: "Sleek and minimalist animated Instagram stories focusing on the new autumn collection, emphasizing elegant whitespace.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop",
    tags: ["After Effects", "Motion Graphics", "Fashion"],
  },
];

const LIKES_DATA: Record<string, number> = {
  "1": 14,
  "2": 49,
  "3": 6,
  "4": 4,
};

export default function SocialMediaWork() {
  const [socialPosts] = useState<Post[]>(POSTS_DATA);
  const [isLowEndAndroid, setIsLowEndAndroid] = useState(false);

  useEffect(() => {
    setIsLowEndAndroid(isLowEndAndroidDevice());
  }, []);

  const headerVariants = {
    hidden: isLowEndAndroid ? { opacity: 0 } : { opacity: 0, y: -50 },
    visible: isLowEndAndroid
      ? { opacity: 1, transition: { duration: 0.25, ease: "linear" as const } }
      : { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const cardVariants = {
    hidden: isLowEndAndroid ? { opacity: 0 } : { opacity: 0, y: 50, scale: 0.95 },
    visible: isLowEndAndroid
      ? { opacity: 1, transition: { duration: 0.2, ease: "linear" as const } }
      : { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <>
      {!isLowEndAndroid && <LiveBackground />}
      <div className="relative z-10 min-h-screen px-6 py-32 max-w-7xl mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isLowEndAndroid ? 0.1 : 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-4 bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md px-5 py-2 rounded-full shadow-lg text-sm">
            <Sparkles className="w-4 h-4 mr-2 inline-block text-yellow-300" />
            Visual Storytelling
          </Badge>
          <h1 className="flex flex-col gap-y-2 title-animate text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl">
            <span className="text-white">Social Media</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-400 to-indigo-500 animate-pulse pb-2">
              Masterpieces
            </span>
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm mt-4">
            A curated gallery of my graphic design work. Show some love with the heart!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {socialPosts.map((post) => {
            return (
            <motion.div
              key={post.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: isLowEndAndroid ? 0.05 : 0.2 }}
              whileHover={isLowEndAndroid ? undefined : { y: -10 }}
              className="h-full"
            >
              <Card className="h-full rounded-2xl shadow-2xl transition-all duration-300 backdrop-blur-xl bg-black/40 border-white/10 hover:border-white/30 overflow-hidden relative group flex flex-col">
                <div className="relative overflow-hidden aspect-square bg-black/20">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full h-full object-contain p-2 transform transition-transform duration-700 ease-in-out ${
                      isLowEndAndroid ? "" : "group-hover:scale-110"
                    }`}
                  />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2.5 group-hover:translate-y-0">
                    <button className="p-2 rounded-full bg-black/50 text-white hover:bg-blue-500 backdrop-blur-md transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <CardHeader className="relative z-10 pt-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl text-white drop-shadow-sm group-hover:text-purple-300 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-neutral-400 font-medium mt-1">
                        Client: <span className="text-neutral-200">{post.client}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 grow">
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="rounded-full bg-white/5 border-white/10 text-neutral-200 hover:bg-purple-500/20 hover:text-purple-200 hover:border-purple-500/50 transition-all"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>


              </Card>
            </motion.div>
          )})}
        </div>
      </div>
    </>
  );
}