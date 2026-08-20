"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Server,
  Database,
  Wrench,
  BarChart3,
} from "lucide-react";
import { skillCategories } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const icons = {
  "layout-template": LayoutTemplate,
  server: Server,
  database: Database,
  wrench: Wrench,
  "bar-chart-3": BarChart3,
};

export function TechStack() {
  return (
    <section id="tech-stack" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-primary-light">
            MY SKILLS
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-text-muted">
            A blend of development frameworks and analytical tools I use to design, build, and
            optimize digital solutions.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {skillCategories.map((category) => {
            const Icon = icons[category.icon as keyof typeof icons];
            return (
              <RevealItem key={category.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_24px_48px_-20px_rgba(124,77,255,0.45)]">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-[0_0_20px_-6px_rgba(124,77,255,0.8)]">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-lg font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="relative mt-6 space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="font-medium text-text">{skill.name}</span>
                          <span className="text-xs text-text-faint">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
