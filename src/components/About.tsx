"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award, Users, Trophy, MapPin, ArrowUpRight } from "lucide-react";
import { aboutText, aboutStats, site } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { GlowBackground } from "./GlowBackground";

const icons = {
  "graduation-cap": GraduationCap,
  award: Award,
  users: Users,
  trophy: Trophy,
};

const bioLines = [
  { key: "degree", value: '"BS Information Systems"' },
  { key: "major", value: '"Business Analytics"' },
  { key: "location", value: `"${site.location.split(",")[0]}"` },
  { key: "leadership", value: '"IS Club Vice President"' },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      <GlowBackground variant="hero" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-primary-light">
            ABOUT ME
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Bridging Technology &amp; <span className="text-gradient">Business Insight</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Photo + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-primary/10 to-accent/30 blur-2xl" />
              <div className="glow-ring relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border-strong">
                <Image
                  src={site.avatar}
                  alt={`Portrait of ${site.name}`}
                  fill
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
                  <span className="ml-auto text-[10px] text-text-faint">about.json</span>
                </div>
                <div className="mt-3 space-y-1 font-mono text-[11px] leading-relaxed">
                  <p className="text-text-faint">{"{"}</p>
                  {bioLines.map((line) => (
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
                  <GraduationCap size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">BSIS Graduate</p>
                  <p className="text-[11px] text-text-faint">Class of the IS Club</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-text-muted">
              <MapPin size={14} className="text-primary-light" />
              {site.location}
            </div>

            <p className="mt-6 text-lg leading-relaxed text-text-muted">{aboutText}</p>

            <RevealGroup className="mt-8 grid grid-cols-2 gap-4" stagger={0.1}>
              {aboutStats.map((stat) => {
                const Icon = icons[stat.icon as keyof typeof icons];
                return (
                  <RevealItem key={stat.title}>
                    <div className="group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_40px_-16px_rgba(124,77,255,0.4)]">
                      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-[0_0_20px_-6px_rgba(124,77,255,0.8)]">
                        <Icon size={20} />
                      </span>
                      <p className="mt-4 font-display text-base font-bold text-white">
                        {stat.title}
                      </p>
                      <p className="mt-1 text-xs leading-snug text-text-muted">{stat.subtitle}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-white/10"
            >
              Let&apos;s Connect
              <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
