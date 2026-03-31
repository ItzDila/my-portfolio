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
import { Play, Film, X } from "lucide-react";
import { motion } from "framer-motion";
import { isLowEndAndroidDevice } from "@/lib/device-performance";
import voxyImage from "@/assets/voxy.png";
import ams from "@/assets/ams.png";
import ams_light from "@/assets/ams_light.png";
import sena from "@/assets/sena.png";
import rome from "@/assets/rome.png";



interface Video {
  id: number;
  title: string;
  client: string;
  description: string;
  thumbnail: string;
  tags: string[];
  duration: string;
  videoUrl: string;
}

const VideoModal = ({
  video,
  isOpen,
  onClose,
}: {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !video) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl"
      >
        <div className="relative bg-black rounded-lg overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="aspect-video">
            <iframe
              src={video.videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-6 bg-neutral-900 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-2">{video.title}</h2>
            <p className="text-neutral-400 mb-4">{video.description}</p>
            <p className="text-neutral-500 text-sm">Client: {video.client}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const VIDEOS_DATA: Video[] = [
  {
    id: 1,
    title: "Amsterdam Light Festival Reel",
    client: "Travelpedia UK",
    description: "This is about an amsterdam lightfestival reel that is made for travel pedia uk",
    thumbnail: ams_light.src,
    tags: [],
    duration: "00:50",
    videoUrl: "https://streamable.com/e/x8x7sx?autoplay=1",
  },
  {
    id: 2,
    title: "Rome Travel Reel ",
    client: "Travelpedia UK",
    description: "A captivating travel reel showcasing the timeless beauty of Rome. From the iconic Colosseum to the romantic Trevi Fountain, this video captures the essence of the Eternal City in a visually stunning montage.",
    thumbnail: rome.src,
    tags: ["After Effects", "Motion Graphics", "Event"],
    duration: "00:50",
    videoUrl: "https://streamable.com/e/xs3f4l?autoplay=1",
  },
  {
    id: 3,
    title: "Simple Motion Graphics logo reveal",
    client: "Sena Excellent Service",
    description: "A sleek logo reveal animation for a local service company. Focused on clean design, smooth transitions, and subtle particle effects to create a memorable brand introduction.",
    thumbnail: sena.src,
    tags: ["After Effects", "Speed Ramping", "LOGO Animation"],
    duration: "02:15",
    videoUrl: "https://streamable.com/e/q5wnix?autoplay=1",
  },
  {
    id: 4,
    title: "Speed Ramp Edit for Vehicle",
    client: "Jayan Gamage",
    description: "did a speed ramp edit for a vehicle which is cure my boredom.",
    thumbnail: voxyImage.src,
    tags: ["Video Production", "Audio Mixing", "Fashion"],
    duration: "03:30",
    videoUrl: "https://streamable.com/e/5bi6r1?autoplay=1",
  },
];

const LIKES_DATA: Record<string, number> = {
  "1": 14,
  "2": 49,
  "3": 6,
  "4": 4,
};

export default function VideoWork() {
  const [videoProjects] = useState<Video[]>(VIDEOS_DATA);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLowEndAndroid, setIsLowEndAndroid] = useState(false);

  useEffect(() => {
    setIsLowEndAndroid(isLowEndAndroidDevice());
  }, []);

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

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
            From seamless transitions to complex motion graphics. Show some love with the heart!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {videoProjects.map((video) => {
            return (
            <motion.div
              key={video.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: isLowEndAndroid ? 0.05 : 0.2 }}
              whileHover={isLowEndAndroid ? undefined : { y: -10 }}
              className="h-full"
            >
              <Card className="h-full rounded-2xl shadow-2xl transition-all duration-300 backdrop-blur-xl bg-black/40 border-white/10 hover:border-white/30 overflow-hidden relative group flex flex-col">
                <div className="relative overflow-hidden aspect-video cursor-pointer" onClick={() => openVideo(video)}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className={`w-full h-full object-cover transform transition-transform duration-700 ease-in-out ${
                      isLowEndAndroid ? "" : "group-hover:scale-105"
                    }`}
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <motion.div
                      whileHover={isLowEndAndroid ? undefined : { scale: 1.1 }}
                      whileTap={isLowEndAndroid ? undefined : { scale: 0.95 }}
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


              </Card>
            </motion.div>
          )})}
        </div>
      </div>

      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}