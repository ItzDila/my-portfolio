import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const postsFile = path.join(process.cwd(), "data", "posts.json");

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Initialize posts file if it doesn't exist
function initializePosts() {
  ensureDataDir();
  if (!fs.existsSync(postsFile)) {
    const defaultPosts = [
      {
        id: 1,
        title: "Neon Cyberpunk Promo",
        client: "TechNova Gaming",
        description:
          "Designed a high-conversion Instagram ad campaign featuring vibrant neon aesthetics and 3D typography to boost game pre-orders.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
        tags: ["Photoshop", "Ad Design", "Gaming"],
      },
      {
        id: 2,
        title: "Summer Getaway Carousel",
        client: "Travelpedia UK",
        description:
          "A seamless multi-slide carousel post tailored for Instagram and LinkedIn, highlighting top summer destinations with clean typography.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
        tags: ["Illustrator", "Social Media", "Travel"],
      },
      {
        id: 3,
        title: "Artisan Coffee Branding",
        client: "Brew Haven",
        description:
          "Created a cozy, warm-toned mood board and social media launch assets for a local artisanal coffee shop.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
        tags: ["Brand Identity", "Photography", "Food & Beverage"],
      },
      {
        id: 4,
        title: "Minimalist Fashion Story",
        client: "Aura Boutique",
        description:
          "Sleek and minimalist animated Instagram stories focusing on the new autumn collection, emphasizing elegant whitespace.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop",
        tags: ["After Effects", "Motion Graphics", "Fashion"],
      },
    ];
    fs.writeFileSync(postsFile, JSON.stringify(defaultPosts, null, 2));
  }
}

// Get all posts
function getPosts() {
  initializePosts();
  try {
    const data = fs.readFileSync(postsFile, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Save posts to file
function savePosts(posts: any[]) {
  ensureDataDir();
  fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}

export async function GET() {
  try {
    const posts = getPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, post, id } = body;

    const posts = getPosts();

    if (action === "add") {
      // Add new post
      const newId =
        posts.length > 0 ? Math.max(...posts.map((p: any) => p.id)) + 1 : 1;
      const newPost = {
        id: newId,
        ...post,
      };
      posts.push(newPost);
      savePosts(posts);
      return NextResponse.json({ success: true, post: newPost });
    } else if (action === "update") {
      // Update existing post
      const index = posts.findIndex((p: any) => p.id === id);
      if (index !== -1) {
        posts[index] = { id, ...post };
        savePosts(posts);
        return NextResponse.json({ success: true, post: posts[index] });
      }
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    } else if (action === "delete") {
      // Delete post
      const filteredPosts = posts.filter((p: any) => p.id !== id);
      savePosts(filteredPosts);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Posts API error:", error);
    return NextResponse.json(
      { error: "Failed to process post" },
      { status: 500 }
    );
  }
}
