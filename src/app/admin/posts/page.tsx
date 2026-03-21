"use client";

import React, { useState, useEffect } from "react";
import { Edit, Trash2, Plus } from "lucide-react";
import { motion } from "framer-motion";
import PostAdminModal from "@/components/PostAdminModal";
import { useRouter } from "next/navigation";

interface Post {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
}

export default function PostAdmin() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  // Fetch posts on mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSavePost = async (post: any) => {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: editingPost ? "update" : "add",
          post,
          id: editingPost?.id,
        }),
      });

      if (response.ok) {
        await fetchPosts();
        setEditingPost(undefined);
      }
    } catch (error) {
      console.error("Failed to save post:", error);
    }
  };

  const handleDeletePost = async (id: number) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch("/api/posts", {
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
        await fetchPosts();
      }
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const openAddModal = () => {
    setEditingPost(undefined);
    setIsModalOpen(true);
  };

  const openEditModal = (post: Post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleLogout = async () => {
    await fetch("/api/admin-auth", { method: "DELETE" });
    router.push("/admin");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black flex items-center justify-center">
        <p className="text-white text-lg">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Post Management</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Post
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
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-lg">No posts yet. Add one to get started!</p>
            </div>
          ) : (
            posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 p-4 bg-neutral-800/50 border border-white/10 rounded-lg hover:border-white/20 transition-colors"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{post.title}</h3>
                  <p className="text-neutral-400 text-sm">{post.client}</p>
                  <p className="text-neutral-500 text-xs mt-1 line-clamp-1">
                    {post.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEditModal(post)}
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
            ))
          )}
        </div>
      </div>

      <PostAdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePost}
        initialPost={editingPost}
      />
    </div>
  );
}
