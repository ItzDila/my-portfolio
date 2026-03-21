import React, { useState } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

interface LikeButtonProps {
  id: number;
  initialLikes: number;
  onLikeChange?: (count: number) => void;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  id,
  initialLikes,
  onLikeChange,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiking, setIsLiking] = useState(false);

  const handleLike = async () => {
    setIsLiking(true);
    try {
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: String(id),
          action: "like",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const newCount = data.newCount || likes + 1;
        setLikes(newCount);
        onLikeChange?.(newCount);
      } else {
        console.error("Failed to like:", await response.text());
      }
    } catch (error) {
      console.error("Failed to like:", error);
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <motion.button
      onClick={handleLike}
      disabled={isLiking}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-3 py-2 rounded-full text-white hover:text-pink-400 transition-all disabled:opacity-50"
    >
      <motion.div
        animate={isLiking ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 0.4 }}
      >
        <Heart className="w-5 h-5 fill-pink-500 text-pink-500" />
      </motion.div>
      {likes > 0 && <span className="text-sm font-semibold">{likes}</span>}
    </motion.button>
  );
};
