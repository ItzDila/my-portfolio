"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminGatePage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("Wrong password");
        return;
      }

      router.push("/admin/panel");
    } catch {
      setError("Could not verify password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black px-4 py-24 text-white">
      <div className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h1 className="text-2xl font-semibold">Admin Panel Access</h1>
        <p className="mt-1 text-sm text-neutral-300">Enter password to continue.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2 text-white outline-none transition-colors focus:border-cyan-400"
            placeholder="Password"
            required
          />

          {error ? <p className="text-sm text-red-300">{error}</p> : null}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl border border-cyan-400/50 bg-cyan-500/15 px-4 py-2 text-cyan-200 transition-colors hover:bg-cyan-500/25 disabled:opacity-50"
          >
            {isLoading ? "Checking..." : "Enter Admin"}
          </button>
        </form>
      </div>
    </div>
  );
}
