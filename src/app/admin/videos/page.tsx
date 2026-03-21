"use client";

import React, { useState, useEffect } from "react";
import { Edit, Trash2, Plus } from "lucide-react";
import { motion } from "framer-motion";
import VideoAdminModal from "@/components/VideoAdminModal";
import { useRouter } from "next/navigation";

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

export default function VideoAdmin() {
  const router = useRouter();
  const [videos, setVideos] = useState<Video[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  // Fetch videos on mount
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch("/api/videos");
      if (response.ok) {
        const data = await response.json();
        setVideos(data);
      }
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveVideo = async (video: any) => {
    try {
      const response = await fetch("/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: editingVideo ? "update" : "add",
          video,
          id: editingVideo?.id,
        }),
      });

      if (response.ok) {
        await fetchVideos();
        setEditingVideo(undefined);
      }
    } catch (error) {
      console.error("Failed to save video:", error);
    }
  };

  const handleDeleteVideo = async (id: number) => {
    if (!confirm("Are you sure you want to delete this video?")) return;

    try {
      const response = await fetch("/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "delete",
          id,
        }),
      });

      if (response.ok) {
        await fetchVideos();
      }
    } catch (error) {
      console.error("Failed to delete video:", error);
    }
  };

  const openAddModal = () => {
    setEditingVideo(undefined);
    setIsModalOpen(true);
  };

  const openEditModal = (video: Video) => {
    setEditingVideo(video);
    setIsModalOpen(true);
  };

  const handleLogout = async () => {
    await fetch("/api/admin-auth", { method: "DELETE" });
    router.push("/admin");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black flex items-center justify-center">
        <p className="text-white text-lg">Loading videos...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Video Management</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Video
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 hover:bg-red-500/30 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          {videos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-lg">No videos yet. Add one to get started!</p>
            </div>
          ) : (
            videos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 p-4 bg-neutral-800/50 border border-white/10 rounded-lg hover:border-white/20 transition-colors"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{video.title}</h3>
                  <p className="text-neutral-400 text-sm">{video.client}</p>
                  <p className="text-neutral-500 text-xs mt-1 line-clamp-1">
                    {video.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEditModal(video)}
                    className="p-2 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteVideo(video.id)}
                    className="p-2 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      <VideoAdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveVideo}
        initialVideo={editingVideo}
      />
    </div>
  );
}
