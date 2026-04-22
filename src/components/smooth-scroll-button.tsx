"use client";

import type { ReactNode } from "react";

type SmoothScrollButtonProps = {
  children: ReactNode;
  className?: string;
  durationMs?: number;
  landingOffsetPx?: number;
  targetId: string;
};

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export default function SmoothScrollButton({
  children,
  className,
  durationMs = 1500,
  landingOffsetPx = 96,
  targetId,
}: SmoothScrollButtonProps) {
  const handleClick = () => {
    if (typeof window === "undefined") return;

    const target = document.getElementById(targetId);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scrollMarginTop = Number.parseFloat(
      window.getComputedStyle(target).scrollMarginTop || "0",
    );
    const startY = window.scrollY;
    const targetY =
      target.getBoundingClientRect().top +
      window.scrollY -
      scrollMarginTop +
      landingOffsetPx;

    if (prefersReducedMotion || Math.abs(targetY - startY) < 1) {
      window.scrollTo({ top: targetY, behavior: "auto" });
      return;
    }

    const startTime = window.performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const animationProgress = easeOutCubic(progress);
      const nextY = startY + (targetY - startY) * animationProgress;

      window.scrollTo({ top: nextY, behavior: "auto" });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
