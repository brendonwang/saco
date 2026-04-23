"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function SmoothScrollButton({
  children,
  className,
  durationMs = 500,
  topGapPx = 0,
  targetId,
}: {children: ReactNode, className?: string, durationMs?: number, topGapPx?: number, targetId: string}) {
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationFrameIdRef.current !== null) {
        window.cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (!target) return;

    if (animationFrameIdRef.current !== null) {
      window.cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const header = document.querySelector("header");
    const headerHeight =
      header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;
    const scrollMarginTop = Number.parseFloat(
      window.getComputedStyle(target).scrollMarginTop || "0",
    );
    const startY = window.scrollY;
    const maxScrollY =
      document.documentElement.scrollHeight - window.innerHeight;
    const targetY = Math.min(
      Math.max(
        target.getBoundingClientRect().top +
          startY -
          headerHeight -
          scrollMarginTop -
          topGapPx,
        0,
      ),
      maxScrollY,
    );

    if (prefersReducedMotion || durationMs <= 0 || Math.abs(targetY - startY) < 1) {
      window.scrollTo({ top: targetY, behavior: "auto" });
      return;
    }

    const startTime = window.performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      window.scrollTo({
        top: startY + (targetY - startY) * easedProgress,
        behavior: "auto",
      });

      if (progress < 1) {
        animationFrameIdRef.current = window.requestAnimationFrame(step);
        return;
      }

      animationFrameIdRef.current = null;
    };

    animationFrameIdRef.current = window.requestAnimationFrame(step);
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
