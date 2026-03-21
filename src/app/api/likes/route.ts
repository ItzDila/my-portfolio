import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const likesFile = path.join(process.cwd(), "data", "likes.json");

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Get all likes
function getLikes(): Record<string, number> {
  ensureDataDir();
  if (!fs.existsSync(likesFile)) {
    return {};
  }
  try {
    const data = fs.readFileSync(likesFile, "utf-8");
    return JSON.parse(data);
  } catch {
    return {};
  }
}

// Save likes to file
function saveLikes(likes: Record<string, number>) {
  ensureDataDir();
  fs.writeFileSync(likesFile, JSON.stringify(likes, null, 2));
}

export async function GET() {
  try {
    const likes = getLikes();
    return NextResponse.json(likes);
  } catch {
    return NextResponse.json({}, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, action } = body; // action: "like" or "unlike"

    if (!id || !action) {
      return NextResponse.json(
        { error: "Missing id or action" },
        { status: 400 }
      );
    }

    const likes = getLikes();
    const key = String(id);

    if (action === "like") {
      likes[key] = (likes[key] || 0) + 1;
      saveLikes(likes);
      return NextResponse.json({ success: true, newCount: likes[key] });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Like API error:", error);
    return NextResponse.json({ error: "Failed to update likes" }, { status: 500 });
  }
}
