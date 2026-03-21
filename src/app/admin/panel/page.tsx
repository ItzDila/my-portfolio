"use client";

import React, { useEffect, useState } from "react";
import { Edit, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PostAdminModal from "@/components/PostAdminModal";
import VideoAdminModal from "@/components/VideoAdminModal";

interface Post {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
}

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

export default function AdminPanelPage() {
  const router = useRouter();

  const [posts, setPosts] = useState<Post[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | undefined>();

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | undefined>();

  const fetchAll = async () => {
    try {
      const [postsRes, videosRes] = await Promise.all([
        fetch("/api/posts"),
        fetch("/api/videos"),
      ]);

      if (postsRes.ok) {
        const postsData = await postsRes.json();
        setPosts(postsData);
      }

      if (videosRes.ok) {
        const videosData = await videosRes.json();
        setVideos(videosData);
      }
    } catch (error) {
      console.error("Failed to fetch admin data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin-auth", { method: "DELETE" });
    router.push("/admin");
  };

  const handleSavePost = async (post: Omit<Post, "id">) => {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: editingPost ? "update" : "add",
        post,
        id: editingPost?.id,
      }),
    });

    if (response.ok) {
      await fetchAll();
      setEditingPost(undefined);
    }
  };

  const handleDeletePost = async (id: number) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", id }),
    });

    if (response.ok) {
      await fetchAll();
    }
  };

  const handleSaveVideo = async (video: Omit<Video, "id">) => {
    const response = await fetch("/api/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: editingVideo ? "update" : "add",
        video,
        id: editingVideo?.id,
      }),
    });

    if (response.ok) {
      await fetchAll();
      setEditingVideo(undefined);
    }
  };

  const handleDeleteVideo = async (id: number) => {
    if (!confirm("Are you sure you want to delete this video?")) return;

    const response = await fetch("/api/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", id }),
    });

    if (response.ok) {
      await fetchAll();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-b from-neutral-900 to-black flex items-center justify-center">
        <p className="text-white text-lg">Loading admin panel...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-900 to-black p-6 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 hover:bg-red-500/30 transition-colors"
          >
            Logout
          </button>
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Posts</h2>
            <button
              onClick={() => {
                setEditingPost(undefined);
                setIsPostModalOpen(true);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Post
            </button>
          </div>

          <div className="grid gap-4">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 p-4 bg-neutral-800/50 border border-white/10 rounded-lg"
              >
                <img src={post.image} alt={post.title} className="w-24 h-24 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{post.title}</p>
                  <p className="text-sm text-neutral-400">{post.client}</p>
                  <p className="text-xs text-neutral-500 truncate">{post.description}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingPost(post);
                      setIsPostModalOpen(true);
                    }}
                    className="p-2 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="p-2 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Videos</h2>
            <button
              onClick={() => {
                setEditingVideo(undefined);
                setIsVideoModalOpen(true);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Video
            </button>
          </div>

          <div className="grid gap-4">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 p-4 bg-neutral-800/50 border border-white/10 rounded-lg"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{video.title}</p>
                  <p className="text-sm text-neutral-400">{video.client}</p>
                  <p className="text-xs text-neutral-500 truncate">{video.description}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingVideo(video);
                      setIsVideoModalOpen(true);
                    }}
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
            ))}
          </div>
        </section>
      </div>

      <PostAdminModal
        key={editingPost?.id ?? "new-post"}
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        onSave={handleSavePost}
        initialPost={editingPost}
      />

      <VideoAdminModal
        key={editingVideo?.id ?? "new-video"}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onSave={handleSaveVideo}
        initialVideo={editingVideo}
      />
    </div>
  );
}
