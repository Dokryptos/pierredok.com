"use client";

import { useEffect, useRef, useState } from "react";

type TextScrambleProps = {
  text: string;
  duration?: number;
  trigger?: "hover" | "auto";
  className?: string;
};

export default function ScrambleText({
  text,
  duration = 1000,
  trigger = "hover",
  className = "",
}: TextScrambleProps) {
  const LETTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.<>/?";
  const [displayedText, setDisplayedText] = useState(text);
  const isRunning = useRef(false);
  const hasPlayed = useRef(false);

  const runScramble = () => {
    if (isRunning.current) return;
    isRunning.current = true;
    let iteration = 0;
    const step = duration / text.length;

    const interval = setInterval(() => {
      setDisplayedText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return char;
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );

      iteration += 1;

      if (iteration > text.length) {
        clearInterval(interval);
        setDisplayedText(text);
        isRunning.current = false;
      }
    }, step);
  };

  useEffect(() => {
    if (trigger === "auto" && !hasPlayed.current) {
      hasPlayed.current = true;
      runScramble();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return (
    <span
      onMouseEnter={trigger === "hover" ? runScramble : undefined}
      className={`inline-block select-none tracking-widest ${className}`}
    >
      {displayedText}
    </span>
  );
}
