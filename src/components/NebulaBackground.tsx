"use client";

import { useEffect, useRef } from "react";
import { withBasePath } from "@/lib/basePath";

export function NebulaBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <video
        ref={videoRef}
        className="h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster={withBasePath("/images/bg-fallback.jpg")}
      >
        <source src={withBasePath("/videos/nebula-mesh.mp4")} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/70 to-bg" />
      <div className="absolute inset-0 bg-bg/40" />
    </div>
  );
}
