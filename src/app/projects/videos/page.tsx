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
import { Star, Play, Film, MonitorPlay } from "lucide-react";
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
                ? "fill-cyan-400 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                : "text-neutral-600 hover:text-cyan-200"
            }`}
          />
        </motion.button>
      ))}
    </div>
  );
};

export default function VideoWork() {
  // State holds the simulated database of ratings
  const [ratingStats, setRatingStats] = useState({
    1: { average: 4.9, count: 342, userRating: 0 },
    2: { average: 4.7, count: 218, userRating: 0 },
    3: { average: 4.6, count: 189, userRating: 0 },
    4: { average: 4.8, count: 405, userRating: 0 },
  });

  // Calculate new average and total when a user votes
  const handleRate = (id, newRating) => {
    setRatingStats((prev) => {
      const current = prev[id];
      const isUpdate = current.userRating > 0;

      const newCount = isUpdate ? current.count : current.count + 1;

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

  const videoProjects = [
    {
      id: 1,
      title: "European Summer Campaign",
      client: "Travelpedia UK",
      description:
        "A fast-paced, cinematic promotional video showcasing top European destinations. Edited with seamless transitions, color grading, and dynamic sound design.",
      thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
      tags: ["Premiere Pro", "Color Grading", "Travel"],
      duration: "01:45",
      views: "12.5k",
    },
    {
      id: 2,
      title: "Tech Conference Opener",
      client: "Innovate Summit 2025",
      description:
        "An adrenaline-pumping intro video for a major tech conference. Built heavy motion graphics, 3D text tracking, and kinetic typography to set the mood.",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
      tags: ["After Effects", "Motion Graphics", "Event"],
      duration: "00:50",
      views: "8.2k",
    },
    {
      id: 3,
      title: "Automotive Showcase",
      client: "JT Car Rental",
      description:
        "A sleek, high-end showcase of luxury rental vehicles. Focused on speed-ramping techniques, aggressive cuts to the beat, and cinematic aspect ratios.",
      thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
      tags: ["Premiere Pro", "Speed Ramping", "Automotive"],
      duration: "02:15",
      views: "5.4k",
    },
    {
      id: 4,
      title: "Apparel Brand Documentary",
      client: "Urban Drift",
      description:
        "A mini-documentary style ad detailing the behind-the-scenes creation of a streetwear line. Utilized intimate b-roll, audio mixing, and subtle visual effects.",
      thumbnail: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
      tags: ["Video Production", "Audio Mixing", "Fashion"],
      duration: "03:30",
      views: "15.1k",
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
            <Film className="w-4 h-4 mr-2 inline-block text-cyan-300" />
            Cinematic Cuts
          </Badge>
          <h1 className="flex flex-col gap-y-2 title-animate text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl">
            <span className="text-white">Video</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-emerald-400 animate-pulse pb-2">
              Production
            </span>
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm mt-4">
            From seamless transitions to complex motion graphics. Click the stars to rate the edits!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {videoProjects.map((video) => {
            const stats = ratingStats[video.id];

            return (
            <motion.div
              key={video.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full rounded-2xl shadow-2xl transition-all duration-300 backdrop-blur-xl bg-black/40 border-white/10 hover:border-white/30 overflow-hidden relative group flex flex-col">
                <div className="relative overflow-hidden aspect-video cursor-pointer">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-cyan-500/80 backdrop-blur-sm flex items-center justify-center text-white shadow-[0_0_30px_rgba(6,182,212,0.6)] group-hover:bg-cyan-400 transition-colors"
                    >
                      <Play className="w-8 h-8 ml-1 fill-white" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-3 right-3 z-20 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded-md backdrop-blur-md">
                    {video.duration}
                  </div>
                </div>

                <CardHeader className="relative z-10 pt-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl text-white drop-shadow-sm group-hover:text-cyan-300 transition-colors">
                        {video.title}
                      </CardTitle>
                      <CardDescription className="text-neutral-400 font-medium mt-1">
                        Client: <span className="text-neutral-200">{video.client}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 grow">
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {video.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="rounded-full bg-white/5 border-white/10 text-neutral-200 hover:bg-cyan-500/20 hover:text-cyan-200 hover:border-cyan-500/50 transition-all"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="relative z-10 border-t border-white/10 pt-4 pb-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-black/20">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                      {stats.userRating > 0 ? "Thanks for rating!" : "Rate this edit"}
                    </span>
                    <StarRating
                      id={video.id}
                      userRating={stats.userRating}
                      onRate={handleRate}
                    />
                    <span className="text-xs text-neutral-400 mt-1.5 font-medium">
                      <span className="text-cyan-400">{stats.average.toFixed(1)} ★</span> ({stats.count} votes)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <MonitorPlay className="w-4 h-4 text-cyan-400" />
                    <span>{video.views} Views</span>
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