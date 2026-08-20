"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { certifications } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Certifications() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!track) return;
        const trackRect = track.getBoundingClientRect();
        let closest = 0;
        let minDist = Infinity;
        Array.from(track.children).forEach((child, i) => {
          const rect = (child as HTMLElement).getBoundingClientRect();
          const dist = Math.abs(rect.left - trackRect.left);
          if (dist < minDist) {
            minDist = dist;
            closest = i;
          }
        });
        setActiveIndex(closest);
      });
    }

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  function scrollToIndex(i: number) {
    const track = trackRef.current;
    const child = track?.children[i] as HTMLElement | undefined;
    if (!track || !child) return;
    const trackRect = track.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    track.scrollTo({
      left: track.scrollLeft + (childRect.left - trackRect.left),
      behavior: "smooth",
    });
  }

  return (
    <section id="certifications" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-10 right-1/3 h-[24rem] w-[24rem] translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-accent">
            CONTINUOUS LEARNING
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-accent via-cyan-300 to-primary-light bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-text-muted">
            Seminars, trainings, and hands-on credentials that back up what I bring to the
            table.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative mt-14">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="group relative flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl glass transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_24px_48px_-20px_rgba(34,211,238,0.4)] sm:w-[300px]"
              >
                {cert.image ? (
                  <button
                    type="button"
                    onClick={() => setLightbox({ src: cert.image!, title: cert.title })}
                    className="relative block h-44 w-full overflow-hidden"
                    aria-label={`View full certificate: ${cert.title}`}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="300px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex items-center gap-2 rounded-full glass-strong px-3.5 py-1.5 text-xs font-semibold text-white">
                        <Maximize2 size={14} />
                        View Certificate
                      </span>
                    </div>
                  </button>
                ) : (
                  <div className="flex h-44 w-full items-center justify-center bg-gradient-to-br from-accent/10 via-transparent to-primary/10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary text-white shadow-[0_0_20px_-6px_rgba(34,211,238,0.8)]">
                      <Award size={26} />
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-sm font-bold leading-snug text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-text-muted">
                    {cert.issuer}
                  </p>
                  {cert.date && (
                    <span className="mt-3 inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-accent">
                      {cert.date}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              aria-label="Previous certification"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent/50 hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {certifications.map((cert, i) => (
                <button
                  key={cert.title}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to certification ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-white/15"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(certifications.length - 1, activeIndex + 1))}
              aria-label="Next certification"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent/50 hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/85 p-6 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[75vh] w-[90vw] max-w-3xl overflow-hidden rounded-2xl border border-border-strong shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close certificate preview"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full glass-strong text-white transition-colors hover:bg-white/20"
              >
                <X size={18} />
              </button>
              <Image
                src={lightbox.src}
                alt={lightbox.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
