"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  GraduationCap,
  BarChart3,
  Code,
  Users,
  Star,
  Award,
  Layers,
  FileCode,
  Braces,
  Database,
  GitBranch,
  Code2,
  Smartphone,
} from "lucide-react";
import {
  site,
  targetRoles,
  qualifications,
  academicCredential,
  technicalQualifications,
} from "@/lib/data";
import { GithubIcon } from "./BrandIcons";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const qualificationIcons = {
  "graduation-cap": GraduationCap,
  "bar-chart-3": BarChart3,
  code: Code,
  users: Users,
  star: Star,
  award: Award,
};

const techIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  layers: Layers,
  "file-code": FileCode,
  braces: Braces,
  database: Database,
  "git-branch": GitBranch,
  github: GithubIcon,
  "code-2": Code2,
  "bar-chart-3": BarChart3,
  smartphone: Smartphone,
};

// Slight vertical/horizontal offsets so the qualification cards read as an
// organic floating stack rather than a rigid list.
const cardOffsets = [
  "lg:translate-x-0",
  "lg:translate-x-6",
  "lg:-translate-x-2",
  "lg:translate-x-8",
  "lg:translate-x-1",
];

const techRowVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const techItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Qualifications() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <section id="qualifications" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-0 left-1/4 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-[22rem] w-[22rem] translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-accent">
            WHY HIRE ME
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-accent via-cyan-300 to-primary-light bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
          <p className="mx-auto mt-4 max-w-xl text-center text-text-muted">
            Education, leadership, and technical capabilities that define how I build,
            analyze, and solve problems.
          </p>
        </Reveal>

        {/* Target roles */}
        <Reveal delay={0.15} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {targetRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-border bg-transparent px-3.5 py-1.5 text-xs font-medium text-text-muted transition-all duration-300 hover:border-accent/50 hover:text-text hover:shadow-[0_0_16px_-4px_rgba(34,211,238,0.5)]"
              >
                {role}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Asymmetric 3-part composition */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.85fr_1fr] lg:gap-8">
          {/* Portrait — first in DOM for mobile stacking order */}
          <motion.div
            ref={portraitRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-first mx-auto w-full max-w-xs lg:order-2"
          >
            <motion.div
              style={{ y: parallaxY }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-accent/25 blur-[70px]" />
              <div className="glow-ring relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[3rem] border border-border-strong shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)]">
                <Image
                  src={site.avatar}
                  alt={`Portrait of ${site.name}`}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-accent/20" />
              </div>
            </motion.div>
          </motion.div>

          {/* Floating qualification cards */}
          <RevealGroup
            className="order-2 flex flex-col gap-4 lg:order-1"
            stagger={0.1}
          >
            {qualifications.map((item, i) => {
              const Icon = qualificationIcons[item.icon as keyof typeof qualificationIcons];
              return (
                <RevealItem key={item.title} className={cardOffsets[i % cardOffsets.length]}>
                  <div className="group relative overflow-hidden rounded-2xl glass p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_40px_-16px_rgba(34,211,238,0.4)]">
                    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-white shadow-[0_0_18px_-6px_rgba(34,211,238,0.8)]">
                        <Icon size={18} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-sm font-bold text-white">{item.title}</p>
                        <p className="mt-0.5 text-xs leading-snug text-text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          {/* Academic credential card */}
          <Reveal delay={0.2} className="order-3 lg:order-3">
            <div className="group relative overflow-hidden rounded-2xl glass-strong p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_24px_48px_-20px_rgba(34,211,238,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />

              <div className="relative flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-white shadow-[0_0_20px_-6px_rgba(34,211,238,0.8)]">
                  <GraduationCap size={22} />
                </span>
                <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-accent">
                  {academicCredential.status}
                </span>
              </div>

              <p className="relative mt-5 font-display text-lg font-bold leading-snug text-white">
                {academicCredential.institution}
              </p>
              <p className="relative mt-2 text-sm font-medium text-text">
                {academicCredential.degree}
              </p>
              <p className="relative text-sm text-text-muted">{academicCredential.major}</p>

              <div className="relative mt-5 space-y-2 border-t border-border pt-4">
                {academicCredential.secondary.map((entry) => {
                  const Icon =
                    qualificationIcons[entry.icon as keyof typeof qualificationIcons];
                  return (
                    <div key={entry.label} className="flex items-center gap-2 text-xs text-text-faint">
                      <Icon size={14} className="text-accent" />
                      {entry.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Technical qualifications */}
        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={techRowVariants}
        >
          <p className="mb-4 text-center text-xs font-semibold tracking-[0.2em] text-text-faint">
            TECHNICAL QUALIFICATIONS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {technicalQualifications.map((tech) => {
              const Icon = techIcons[tech.icon];
              return (
                <motion.div
                  key={tech.name}
                  variants={techItemVariants}
                  className="flex h-11 items-center gap-2 rounded-xl border border-border bg-surface/60 px-4 text-xs font-medium text-text-muted transition-all duration-300 hover:scale-105 hover:border-accent/50 hover:text-text hover:shadow-[0_0_20px_-6px_rgba(34,211,238,0.5)]"
                >
                  <Icon size={16} className="text-accent" />
                  {tech.name}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
