"use client";

import React, { useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "../../lib/utils";

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  glowFrom?: string;
  glowTo?: string;
  mode?: "glow" | "orb";
}

export default function MagicCard({
  children,
  className,
  gradientSize = 300,
  gradientColor = "rgba(124, 58, 237, 0.15)", // Default to a subtle primary color glow
  gradientOpacity = 0.8,
  glowFrom,
  glowTo,
  mode = "glow",
  ...props
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex size-full overflow-hidden rounded-[2rem]",
        className
      )}
      {...props}
    >
      <div className="relative z-10 flex flex-col h-full w-full">{children}</div>
      <motion.div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          mode === "orb" && "blur-3xl"
        )}
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${glowFrom || gradientColor}, ${glowTo ? `${glowTo} 40%, transparent 80%` : "transparent 100%"})
          `,
          opacity: mode === "orb" ? 0.3 : gradientOpacity,
        }}
      />
    </div>
  );
}
