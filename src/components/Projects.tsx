"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { TrendingUp, GraduationCap, LineChart, Maximize2 } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { ProjectModal } from "./ProjectModal";
import { TiltCard } from "./TiltCard";

const projectIcons = [TrendingUp, GraduationCap, LineChart];

export function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-primary-light">
            FEATURED PROJECTS
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Some of My Recent Work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-text-muted">
            Selected systems and applications where I combined development skills with
            analytical thinking to solve real business problems. Click a project to inspect it in
            detail.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {projects.map((project, i) => {
            const Icon = projectIcons[i % projectIcons.length];
            return (
              <RevealItem key={project.id} className="h-full">
                <TiltCard className="h-full">
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-haspopup="dialog"
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl glass text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_28px_56px_-20px_rgba(124,77,255,0.5)]"
                >
                  <div
                    className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-grid opacity-30" />
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <Icon size={28} />
                        </span>
                      </>
                    )}
                    <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs font-semibold text-text-muted">
                      {project.number}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex items-center gap-2 rounded-full glass-strong px-3.5 py-1.5 text-xs font-semibold text-white">
                        <Maximize2 size={14} />
                        Click to Inspect
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-white/5 px-3 py-1 text-[11px] font-medium text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
                </TiltCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            hasPrev={activeIndex! > 0}
            hasNext={activeIndex! < projects.length - 1}
            onClose={() => setActiveIndex(null)}
            onPrev={() => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
            onNext={() =>
              setActiveIndex((i) => (i !== null && i < projects.length - 1 ? i + 1 : i))
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
}
