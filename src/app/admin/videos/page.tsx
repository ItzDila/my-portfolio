"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VideoAdmin() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-900 to-black flex items-center justify-center">
      <p className="text-white text-lg">Redirecting...</p>
    </div>
  );
}
