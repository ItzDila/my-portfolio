import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const videosFile = path.join(process.cwd(), "data", "videos.json");

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Initialize videos file if it doesn't exist
function initializeVideos() {
  ensureDataDir();
  if (!fs.existsSync(videosFile)) {
    const defaultVideos = [
      {
        id: 1,
        title: "European Summer Campaign",
        client: "Travelpedia UK",
        description:
          "A fast-paced, cinematic promotional video showcasing top European destinations. Edited with seamless transitions, color grading, and dynamic sound design.",
        thumbnail:
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
        tags: ["Premiere Pro", "Color Grading", "Travel"],
        duration: "01:45",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 2,
        title: "Tech Conference Opener",
        client: "Innovate Summit 2025",
        description:
          "An adrenaline-pumping intro video for a major tech conference. Built heavy motion graphics, 3D text tracking, and kinetic typography to set the mood.",
        thumbnail:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
        tags: ["After Effects", "Motion Graphics", "Event"],
        duration: "00:50",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 3,
        title: "Automotive Showcase",
        client: "JT Car Rental",
        description:
          "A sleek, high-end showcase of luxury rental vehicles. Focused on speed-ramping techniques, aggressive cuts to the beat, and cinematic aspect ratios.",
        thumbnail:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
        tags: ["Premiere Pro", "Speed Ramping", "Automotive"],
        duration: "02:15",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 4,
        title: "Apparel Brand Documentary",
        client: "Urban Drift",
        description:
          "A mini-documentary style ad detailing the behind-the-scenes creation of a streetwear line. Utilized intimate b-roll, audio mixing, and subtle visual effects.",
        thumbnail:
          "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
        tags: ["Video Production", "Audio Mixing", "Fashion"],
        duration: "03:30",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ];
    fs.writeFileSync(videosFile, JSON.stringify(defaultVideos, null, 2));
  }
}

// Get all videos
function getVideos() {
  initializeVideos();
  try {
    const data = fs.readFileSync(videosFile, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Save videos to file
function saveVideos(videos: any[]) {
  ensureDataDir();
  fs.writeFileSync(videosFile, JSON.stringify(videos, null, 2));
}

export async function GET() {
  try {
    const videos = getVideos();
    return NextResponse.json(videos);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, video, id } = body;

    const videos = getVideos();

    if (action === "add") {
      // Add new video
      const newId =
        videos.length > 0 ? Math.max(...videos.map((v: any) => v.id)) + 1 : 1;
      const newVideo = {
        id: newId,
        ...video,
      };
      videos.push(newVideo);
      saveVideos(videos);
      return NextResponse.json({ success: true, video: newVideo });
    } else if (action === "update") {
      // Update existing video
      const index = videos.findIndex((v: any) => v.id === id);
      if (index !== -1) {
        videos[index] = { id, ...video };
        saveVideos(videos);
        return NextResponse.json({ success: true, video: videos[index] });
      }
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    } else if (action === "delete") {
      // Delete video
      const filteredVideos = videos.filter((v: any) => v.id !== id);
      saveVideos(filteredVideos);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Videos API error:", error);
    return NextResponse.json(
      { error: "Failed to process video" },
      { status: 500 }
    );
  }
}
