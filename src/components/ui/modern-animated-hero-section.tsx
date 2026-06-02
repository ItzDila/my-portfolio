"use client";

import type React from "react";
import { useState, useEffect, useCallback, useRef } from "react";

interface Character {
  char: string;
  x: number;
  y: number;
  speed: number;
}

class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: Array<{
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }>;
  frame: number;
  frameRequest: number;
  resolve: (value: void | PromiseLike<void>) => void;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}-=+*^?#";
    this.queue = [];
    this.frame = 0;
    this.frameRequest = 0;
    this.resolve = () => {};
    this.update = this.update.bind(this);
  }

  setText(newText: string) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => {
      this.resolve = resolve;
    });
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      const { from, to, start, end } = this.queue[i];
      let char = this.queue[i].char;
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.14) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

export const ModernAnimatedHeroTitle: React.FC<{
  phrases?: string[];
  className?: string;
}> = ({
  phrases = [
    "Timesh Dillon's",
    "Creative Workspace",
    "Design + Code",
    "Visual Storytelling",
  ],
  className = "",
}) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const scramblerRef = useRef<TextScramble | null>(null);
  const longestPhraseLength = phrases.reduce(
    (max, phrase) => Math.max(max, phrase.length),
    0,
  );

  useEffect(() => {
    if (!elementRef.current || scramblerRef.current) return;
    scramblerRef.current = new TextScramble(elementRef.current);
  }, []);

  useEffect(() => {
    if (!scramblerRef.current) return;

    let counter = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const next = () => {
      if (!scramblerRef.current) return;
      counter = (counter + 1) % phrases.length;
      scramblerRef.current.setText(phrases[counter]).then(() => {
        timeoutId = setTimeout(next, 2200);
      });
    };

    timeoutId = setTimeout(next, 2200);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [phrases]);

  return (
    <>
      <span
        ref={elementRef}
        className={`hero-scramble-title inline-block max-w-full text-center leading-tight align-middle ${className}`}
        style={{
          ["--title-min-width" as string]: `${longestPhraseLength + 1}ch`,
        }}
      >
        {phrases[0]}
      </span>
      <style jsx global>{`
        .dud {
          color: #fcd34d;
          opacity: 0.75;
        }

        .hero-scramble-title {
          min-height: 1.2em;
          word-break: break-word;
        }

        @media (min-width: 1024px) {
          .hero-scramble-title {
            min-width: var(--title-min-width, 0ch);
            white-space: nowrap;
          }
        }
      `}</style>
    </>
  );
};

const RainingLetters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  const createCharacters = useCallback(() => {
    const allChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    const charCount = 300;
    const newCharacters: Character[] = [];

    for (let i = 0; i < charCount; i++) {
      newCharacters.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.1 + Math.random() * 0.3,
      });
    }

    return newCharacters;
  }, []);

  useEffect(() => {
    setCharacters(createCharacters());
  }, [createCharacters]);

  useEffect(() => {
    const updateActiveIndices = () => {
      const newActiveIndices = new Set<number>();
      const numActive = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < numActive; i++) {
        newActiveIndices.add(Math.floor(Math.random() * characters.length));
      }
      setActiveIndices(newActiveIndices);
    };

    const flickerInterval = setInterval(updateActiveIndices, 50);
    return () => clearInterval(flickerInterval);
  }, [characters.length]);

  useEffect(() => {
    let animationFrameId: number;

    const updatePositions = () => {
      setCharacters((prevChars) =>
        prevChars.map((char) => ({
          ...char,
          y: char.y + char.speed,
          ...(char.y >= 100 && {
            y: -5,
            x: Math.random() * 100,
            char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"[
              Math.floor(
                Math.random() *
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?".length,
              )
            ],
          }),
        })),
      );
      animationFrameId = requestAnimationFrame(updatePositions);
    };

    animationFrameId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform">
        <ModernAnimatedHeroTitle
          phrases={[
            "Hello, 21st.dev,",
            "It's RAINING",
            "with letters",
            "and alphabets",
            "dont FORGET to bring",
            "your umbrella today",
          ]}
          className="text-6xl font-bold tracking-wider text-white"
        />
      </div>

      {characters.map((char, index) => (
        <span
          key={index}
          className={`absolute text-xs transition-colors duration-100 ${
            activeIndices.has(index)
              ? "z-10 scale-125 animate-pulse text-base font-bold text-[#00ff00]"
              : "font-light text-slate-600"
          }`}
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            transform: `translate(-50%, -50%) ${activeIndices.has(index) ? "scale(1.25)" : "scale(1)"}`,
            textShadow: activeIndices.has(index)
              ? "0 0 8px rgba(255,255,255,0.8), 0 0 12px rgba(255,255,255,0.4)"
              : "none",
            opacity: activeIndices.has(index) ? 1 : 0.4,
            transition: "color 0.1s, transform 0.1s, text-shadow 0.1s",
            willChange: "transform, top",
            fontSize: "1.8rem",
          }}
        >
          {char.char}
        </span>
      ))}
    </div>
  );
};

export default RainingLetters;
