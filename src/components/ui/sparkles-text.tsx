"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SparklesTextProps {
  children: React.ReactNode;
  className?: string;
  sparklesCount?: number;
  colors?: { first: string; second: string };
}

const generateSparkle = (color: string) => {
  return {
    id: String(Math.random() + Date.now()),
    createdAt: Date.now(),
    color,
    size: Math.random() * 10 + 10,
    style: {
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      zIndex: 2,
    },
  };
};

const Sparkle = ({ id, size, color, style }: any) => {
  return (
    <motion.span
      key={id}
      className="absolute block pointer-events-none"
      style={style}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180],
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
          fill={color}
        />
      </svg>
    </motion.span>
  );
};

export const SparklesText = ({
  children,
  className,
  sparklesCount = 10,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
}: SparklesTextProps) => {
  const [sparkles, setSparkles] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: sparklesCount }).map(() =>
        generateSparkle(
          Math.random() > 0.5 ? colors.first : colors.second
        )
      );
      setSparkles(newSparkles);
    };
    generateSparkles();
    
    const interval = setInterval(() => {
      const sparkle = generateSparkle(
        Math.random() > 0.5 ? colors.first : colors.second
      );
      setSparkles((current) => {
        const next = [...current];
        if (next.length >= sparklesCount) {
          next.shift(); // Remove the oldest sparkle
        }
        next.push(sparkle);
        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [colors, sparklesCount]);

  if (!isClient) return <span className={cn("relative inline-block", className)}>{children}</span>;

  return (
    <span className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}
      <span className="relative z-10">{children}</span>
    </span>
  );
};
