"use client";

import React, { useState } from "react";
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
import { Star, Heart, Share2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Interactive Star Rating Component
const StarRating = ({ id, userRating, onRate }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          key={star}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => onRate(id, star)}
          className="focus:outline-none"
        >
          <Star
            className={`w-5 h-5 transition-colors duration-300 ${
              star <= (hoverRating || userRating)
                ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]"
                : "text-neutral-600 hover:text-yellow-200"
            }`}
          />
        </motion.button>
      ))}
    </div>
  );
};

export default function SocialMediaWork() {
  // State holds the simulated database of ratings
  const [ratingStats, setRatingStats] = useState({
    1: { average: 4.8, count: 124, userRating: 0 },
    2: { average: 4.2, count: 89, userRating: 0 },
    3: { average: 4.9, count: 210, userRating: 0 },
    4: { average: 4.5, count: 156, userRating: 0 },
  });

  // Calculate new average and total when a user votes
  const handleRate = (id, newRating) => {
    setRatingStats((prev) => {
      const current = prev[id];
      const isUpdate = current.userRating > 0;

      // If updating a vote, count stays the same. If new vote, count + 1.
      const newCount = isUpdate ? current.count : current.count + 1;

      // Remove their old rating from the total score, add the new one
      const oldTotalScore = current.average * current.count;
      const newTotalScore = isUpdate
        ? oldTotalScore - current.userRating + newRating
        : oldTotalScore + newRating;

      const newAverage = newTotalScore / newCount;

      return {
        ...prev,
        [id]: {
          average: newAverage,
          count: newCount,
          userRating: newRating,
        },
      };
    });
  };

  const socialPosts = [
    {
      id: 1,
      title: "Neon Cyberpunk Promo",
      client: "TechNova Gaming",
      description:
        "Designed a high-conversion Instagram ad campaign featuring vibrant neon aesthetics and 3D typography to boost game pre-orders.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      tags: ["Photoshop", "Ad Design", "Gaming"],
      likes: "2.4k",
    },
    {
      id: 2,
      title: "Summer Getaway Carousel",
      client: "Travelpedia UK",
      description:
        "A seamless multi-slide carousel post tailored for Instagram and LinkedIn, highlighting top summer destinations with clean typography.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
      tags: ["Illustrator", "Social Media", "Travel"],
      likes: "1.8k",
    },
    {
      id: 3,
      title: "Artisan Coffee Branding",
      client: "Brew Haven",
      description:
        "Created a cozy, warm-toned mood board and social media launch assets for a local artisanal coffee shop.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
      tags: ["Brand Identity", "Photography", "Food & Beverage"],
      likes: "3.1k",
    },
    {
      id: 4,
      title: "Minimalist Fashion Story",
      client: "Aura Boutique",
      description:
        "Sleek and minimalist animated Instagram stories focusing on the new autumn collection, emphasizing elegant whitespace.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop",
      tags: ["After Effects", "Motion Graphics", "Fashion"],
      likes: "4.5k",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <LiveBackground />
      <div className="relative z-10 min-h-screen px-6 py-32 max-w-7xl mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
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
            A curated gallery of my graphic design work. Click the stars to rate the visuals!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {socialPosts.map((post) => {
            const stats = ratingStats[post.id];

            return (
            <motion.div
              key={post.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full rounded-2xl shadow-2xl transition-all duration-300 backdrop-blur-xl bg-black/40 border-white/10 hover:border-white/30 overflow-hidden relative group flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
                    <button className="p-2 rounded-full bg-black/50 text-white hover:bg-pink-500 backdrop-blur-md transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
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

                <CardFooter className="relative z-10 border-t border-white/10 pt-4 pb-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-black/20">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                      {stats.userRating > 0 ? "Thanks for rating!" : "Rate this design"}
                    </span>
                    <StarRating
                      id={post.id}
                      userRating={stats.userRating}
                      onRate={handleRate}
                    />
                    <span className="text-xs text-neutral-400 mt-1.5 font-medium">
                      <span className="text-yellow-400">{stats.average.toFixed(1)} ★</span> ({stats.count} votes)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                    <span>{post.likes} Engagements</span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          )})}
        </div>
      </div>
    </>
  );
}