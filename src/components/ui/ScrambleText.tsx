"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  revealDelay?: number;
  characterSet?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  onComplete?: () => void;
}

const DEFAULT_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function ScrambleText({
  text,
  className,
  scrambleSpeed = 30,
  revealDelay = 50,
  characterSet = DEFAULT_CHARS,
  as: Component = "span",
  onComplete,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const getRandomChar = useCallback(() => {
    return characterSet[Math.floor(Math.random() * characterSet.length)];
  }, [characterSet]);

  useEffect(() => {
    let currentIndex = 0;
    let scrambleInterval: NodeJS.Timeout;
    let revealTimeout: NodeJS.Timeout;

    const scramble = () => {
      setDisplayText((prev) => {
        const revealed = text.slice(0, currentIndex);
        const scrambled = text
          .slice(currentIndex)
          .split("")
          .map((char) => (char === " " ? " " : getRandomChar()))
          .join("");
        return revealed + scrambled;
      });
    };

    const reveal = () => {
      if (currentIndex <= text.length) {
        currentIndex++;
        scramble();
        revealTimeout = setTimeout(reveal, revealDelay);
      } else {
        clearInterval(scrambleInterval);
        setIsComplete(true);
        onComplete?.();
      }
    };

    // Initial scramble
    scrambleInterval = setInterval(scramble, scrambleSpeed);

    // Start revealing after a short delay
    revealTimeout = setTimeout(reveal, 200);

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(revealTimeout);
    };
  }, [text, scrambleSpeed, revealDelay, getRandomChar, onComplete]);

  return (
    <Component
      className={cn(
        "font-mono",
        isComplete && "transition-colors duration-300",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {displayText}
      </motion.span>
      {!isComplete && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-terminal-green ml-1 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </Component>
  );
}

// Simpler version that just types out the text character by character
export function TypewriterText({
  text,
  className,
  speed = 50,
  delay = 0,
  as: Component = "span",
  showCursor = true,
  onComplete,
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  showCursor?: boolean;
  onComplete?: () => void;
}) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      const type = () => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
          timeout = setTimeout(type, speed);
        } else {
          setIsComplete(true);
          onComplete?.();
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, onComplete]);

  return (
    <Component className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-terminal-green ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </Component>
  );
}
