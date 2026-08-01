"use client";

import React, { useState } from "react";
import type { MouseEvent } from "react";
import { cn } from "../../lib/utils";

interface RippleButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  rippleColor?: string;
}

export function RippleButton({
  className,
  children,
  rippleColor = "#ffffff",
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples((prev) => [...prev, { x, y, id: Date.now() }]);
    if (props.onClick) props.onClick(e);
  };

  const Component = props.href ? "a" : "button";

  return (
    <Component
      className={cn(
        "relative overflow-hidden inline-flex items-center justify-center rounded-2xl transition-all cursor-pointer",
        className
      )}
      onClick={handleClick as any}
      {...props as any}
    >
      <div className="relative z-10 flex items-center justify-center gap-2 pointer-events-none w-full h-full">{children}</div>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: "20px",
            height: "20px",
            transform: "translate(-50%, -50%)",
            backgroundColor: rippleColor,
            opacity: 0.5,
          }}
          onAnimationEnd={() => {
            setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
          }}
        />
      ))}
    </Component>
  );
}
