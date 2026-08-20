"use client";

import { GraduationCap, Award, Users, Trophy, MapPin, ArrowUpRight } from "lucide-react";
import { aboutText, aboutStats, site } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const icons = {
  "graduation-cap": GraduationCap,
  award: Award,
  users: Users,
  trophy: Trophy,
};

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-primary-light">
            ABOUT ME
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Bridging Technology &amp; <span className="text-gradient">Business Insight</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-text-muted">
              <MapPin size={14} className="text-primary-light" />
              {site.location}
            </div>

            <p className="mt-6 text-lg leading-relaxed text-text-muted">{aboutText}</p>

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

          <RevealGroup className="grid grid-cols-2 gap-4" stagger={0.1}>
            {aboutStats.map((stat) => {
              const Icon = icons[stat.icon as keyof typeof icons];
              return (
                <RevealItem key={stat.title}>
                  <div className="group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_40px_-16px_rgba(124,77,255,0.4)]">
                    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-[0_0_20px_-6px_rgba(124,77,255,0.8)]">
                      <Icon size={20} />
                    </span>
                    <p className="mt-4 font-display text-base font-bold text-white">{stat.title}</p>
                    <p className="mt-1 text-xs leading-snug text-text-muted">{stat.subtitle}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
