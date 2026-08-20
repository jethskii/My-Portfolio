"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, ChevronDown } from "lucide-react";
import { site, heroTechBadges } from "@/lib/data";
import { GlowBackground } from "./GlowBackground";

const codeLines = [
  { key: "name", value: '"Jethro"' },
  { key: "role", value: '"Web Developer"' },
  { key: "major", value: '"Business Analytics"' },
  { key: "stack", value: '["Laravel", "React", "MySQL"]' },
  { key: "loading", value: "true" },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <GlowBackground variant="hero" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-primary-light">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Work
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Jethro</span>
            <br />
            I Build Modern
            <br />
            Digital Solutions
          </h1>

          <p className="mt-5 text-sm font-semibold tracking-wide text-accent sm:text-base">
            {site.title}
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("#projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-6px_rgba(124,77,255,0.8)] transition-transform hover:scale-105"
            >
              View My Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:bg-white/10"
            >
              Contact Me
              <Download size={16} />
            </button>
          </div>

          <div className="mt-14">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-text-faint">
              TECHNOLOGIES I WORK WITH
            </p>
            <div className="flex flex-wrap gap-2.5">
              {heroTechBadges.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border bg-surface/60 px-3.5 py-2 text-xs font-medium text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-primary/10 to-accent/30 blur-2xl" />
            <div className="glow-ring relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border-strong">
              <Image
                src={site.avatar}
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 384px, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            </div>

            <motion.div
              className="absolute -left-6 top-8 w-52 rounded-2xl glass-strong p-4 shadow-2xl sm:-left-12"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                <span className="ml-auto text-[10px] text-text-faint">dev.json</span>
              </div>
              <div className="mt-3 space-y-1 font-mono text-[11px] leading-relaxed">
                <p className="text-text-faint">{"{"}</p>
                {codeLines.map((line) => (
                  <p key={line.key} className="pl-3">
                    <span className="text-accent">{line.key}</span>
                    <span className="text-text-faint">: </span>
                    <span className="text-primary-light">{line.value}</span>
                    <span className="text-text-faint">,</span>
                  </p>
                ))}
                <p className="text-text-faint">{"}"}</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-4 flex items-center gap-2.5 rounded-2xl glass-strong px-4 py-3 shadow-2xl sm:-right-10"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-white">
                <Sparkles size={16} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Business Analytics</p>
                <p className="text-[11px] text-text-faint">Data-driven decisions</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-faint sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-[0.2em]">SCROLL</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
}
