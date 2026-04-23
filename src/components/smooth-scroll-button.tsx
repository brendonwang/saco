"use client";

import { useEffect, useRef, type ReactNode } from "react";

type SmoothScrollButtonProps = {
  children: ReactNode;
  className?: string;
  durationMs?: number;
  // Positive values land slightly farther down the page than the target top.
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
  landingOffsetPx = 56,
  targetId,
}: SmoothScrollButtonProps) {
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (!target) return;

    if (rafIdRef.current !== null) {
      window.cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const header = document.querySelector("header");
    const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
    const scrollMarginTop = Number.parseFloat(
      window.getComputedStyle(target).scrollMarginTop || "0",
    );
    const anchorOffset = Math.max(headerHeight, scrollMarginTop);
    const startY = window.scrollY;
    const rawTargetY =
      target.getBoundingClientRect().top +
      window.scrollY -
      anchorOffset +
      landingOffsetPx;
    const maxScrollY =
      document.documentElement.scrollHeight - window.innerHeight;
    const targetY = Math.max(0, Math.min(rawTargetY, maxScrollY));

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
        rafIdRef.current = window.requestAnimationFrame(step);
      } else {
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = window.requestAnimationFrame(step);
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
