"use client";

import React, { useState, useEffect } from "react";
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
    title: "Multiple Auto Part brand Order flyers",
    client: "JS Auto Parts",
    description: "Created two distinct order flyers for JS Auto Parts, each tailored to a specific product line. The first flyer features a sleek design with bold typography and high-quality images to promote the latest car accessories, while the second flyer adopts a more technical layout with detailed product specifications and clear calls-to-action, effectively targeting both casual buyers and automotive enthusiasts.",
    image: js2.src,
    tags: ["Brand Identity", "Layout Design", "Photoshop"],
  },
  {
    id: 4,
    title: "1D Auto Parts Promotional Flyer",
    client: "JS Auto Parts",
    description: "Created a promotional flyer for 1D Auto Parts, highlighting their latest products and special offers.",
    image: js1.src,
    tags: ["Brand Identity", "Layout Design", "Photoshop"],
  },
    {
    id: 5,
    title: "Vehicle Rental Service Flyer",
    client: "JT Car Rentals",
    description: "Designed a compelling flyer for JT Car Rentals, showcasing their diverse fleet and competitive pricing. The flyer features a clean layout with vibrant imagery of the vehicles, clear pricing information, and strong calls-to-action to encourage bookings.",
    image: axel1.src,
    tags: ["Brand Identity", "Photoshop", "Ad Design"],
  },
    {
    id: 6,
    title: "New Year Wishes Post",
    client: "JT Car Rentals",
    description: "Created a festive New Year Wishes social media post for JT Car Rentals, incorporating celebratory graphics and a warm message to engage their audience and promote brand goodwill during the holiday season.",
    image: newyear.src,
    tags: ["Social Media", "Photoshop", "Ad Design"],
  },
    {
    id: 7,
    title: "Laptop Promotional Flyer",
    client: "Laptronics Lanka",
    description: "Designed a sleek promotional flyer for Laptronics Lanka, featuring their latest laptop models. The flyer emphasizes key features, competitive pricing, and includes high-quality images to attract tech-savvy customers and drive sales.",
    image: lp1.src,
    tags: ["Brand Identity", "Photoshop", "Ad Design"],
  },
  {
    id: 8,
    title: "Laptop Promotional Flyer-II",
    client: "Laptronics Lanka",
    description: "Created a second promotional flyer for Laptronics Lanka, highlighting different laptop models and special offers.",
    image: lp2.src,
    tags: ["Brand Identity", "Photoshop", "Ad Design"],
  },
    {
    id: 9,
    title: "Service Card Design for Vehicle Maintenance",
    client: "RevTech PVT LTD",
    description: "Designed a service card for RevTech PVT LTD, featuring a clean and professional layout that includes essential information about vehicle maintenance services, contact details, and branding elements to enhance customer engagement and promote the company's offerings effectively.",
    image: rvt1.src,
    tags: ["Photoshop", "Service Design", "Brand Identity"],
  },
    {
    id: 10,
    title: "Vehicle Maintenance Diagram Board",
    client: "RevTech PVT LTD",
    description: "Created an informative diagram board for RevTech PVT LTD, illustrating the vehicle maintenance process with clear visuals and step-by-step instructions.",
    image: rvt2.src,
    tags: ["Photoshop", "Service Design", "Brand Identity"],
  },
    {
    id: 11,
    title: " Unwind in Sri lanka travel flyer",
    client: "Travelpedia UK",
    description: "Designed a captivating travel flyer for Travelpedia UK, showcasing the serene beauty of Sri Lanka. The flyer features stunning visuals of iconic destinations, vibrant colors, and compelling copy to entice travelers to explore the rich culture and natural wonders of Sri Lanka.",
    image: tpsl.src,
    tags: ["Photoshop", "Travel Design", "Brand Identity"],
  },

    {
    id: 12,
    title: "Prague Travel Flyer",
    client: "Travelpedia UK",
    description: "Designed a vibrant travel flyer for Travelpedia UK, highlighting the charm and attractions of Prague. The flyer features captivating imagery, detailed information about accommodations and activities, and persuasive copy to inspire travelers to visit this enchanting city.",
    image: tppg.src,
    tags: ["Photoshop", "Travel Design", "Brand Identity"],
  },
      {
    id: 13,
    title: "Sinhala New Year Flyer",
    client: "Sena Excellent Service",
    description: "Designed a festive Sinhala New Year flyer for Sena Excellent Service, incorporating traditional elements and vibrant colors to celebrate the occasion and promote the company's services during the holiday season.",
    image: sen1.src,
    tags: ["Photoshop", "New Year", "Ad Design"],
  },
  {
    id: 14,
    title: "Toyota Oil Change Service Flyer",
    client: "Sena Excellent Service",
    description: "Designed a promotional flyer for Toyota Oil Change Service, highlighting the benefits of regular oil changes and the quality of service provided.",
    image: sen2.src,
    tags: ["Photoshop", "Service Design", "Brand Identity"],
  },
  {
    id: 15,
    title: "Full Service Car Wash Board",
    client: "Sena Excellent Service",
    description: "Designed a promotional board design for Full Service Car Wash, highlighting the range of services offered and the quality of cleaning provided.",
    image: sen3.src,
    tags: ["Photoshop", "Service Design", "Brand Identity"],
  },
];


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
      <div className="relative z-10 min-h-screen px-6 py-32 max-w-7xl mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isLowEndAndroid ? 0.1 : 0.8 }}
          className="text-center mb-20"
        >
          <div className="mb-4">
            <div className="mx-auto inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-200/65">
              <span className="h-px w-8 bg-white/25" />
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Visual Storytelling</span>
              <span className="h-px w-8 bg-white/25" />
            </div>
          </div>
          <h1 className="flex flex-col gap-y-2 title-animate text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl">
            <span className="text-white">Social Media</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-400 to-indigo-500 animate-pulse pb-2">
              Posts & Designes
            </span>
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm mt-4">
            A curated gallery of my graphic design work. Show some love with the heart!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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