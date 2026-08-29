"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  ExternalLink,
  FileText,
  Mail,
  CheckCircle2,
  User,
  LayoutGrid,
  Film,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Project, ProjectStatus } from "@/lib/data";

type Tab = "overview" | "video" | "screenshots";

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "In Progress": "border-amber-400/30 bg-amber-400/10 text-amber-300",
  Production: "border-accent/30 bg-accent/10 text-accent",
};

type ProjectModalProps = {
  project: Project;
  hasPrev: boolean;
  hasNext: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function ProjectModal({ project, hasPrev, hasNext, onClose, onPrev, onNext }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [videoStarted, setVideoStarted] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const tabs: { id: Tab; label: string; icon: LucideIcon }[] = [
    { id: "overview", label: "Overview", icon: Sparkles },
    ...(project.video ? [{ id: "video" as const, label: "Video", icon: Film }] : []),
    ...(project.screenshots?.length
      ? [{ id: "screenshots" as const, label: "Screenshots", icon: LayoutGrid }]
      : []),
  ];

  useEffect(() => {
    setActiveTab("overview");
    setVideoStarted(false);
  }, [project.id]);

  useEffect(() => {
    closeBtnRef.current?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hasPrev, hasNext, onClose, onPrev, onNext]);

  const hasLinks = project.liveDemo || project.githubRepo || project.caseStudy;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/85 p-3 backdrop-blur-md sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous project"
          className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full glass-strong text-white transition-colors hover:bg-white/20 sm:left-6 sm:flex"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next project"
          className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full glass-strong text-white transition-colors hover:bg-white/20 sm:right-6 sm:flex"
        >
          <ChevronRight size={20} />
        </button>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-7 sm:pb-5">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full glass px-2.5 py-0.5 text-[11px] font-semibold text-text-muted">
                {project.number}
              </span>
              {project.status && (
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              )}
            </div>
            <h3
              id="project-modal-title"
              className="mt-2.5 font-display text-xl font-bold leading-snug text-white sm:text-2xl"
            >
              {project.title}
            </h3>
            {project.myRole && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-text-muted">
                <User size={13} className="text-primary-light" />
                {project.myRole}
              </p>
            )}
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full glass-strong text-white transition-colors hover:bg-white/20"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tabs */}
        {tabs.length > 1 && (
          <div className="flex gap-1 border-b border-border px-5 pt-3 sm:px-7">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-1.5 px-3 pb-3 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-text-muted hover:text-text"
                  }`}
                >
                  <Icon size={14} />
                  {tab.label}
                  {isActive && (
                    <motion.span
                      layoutId="project-tab-indicator"
                      className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-primary to-accent"
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeTab === "overview" && (
              <div className="space-y-6">
                <p className="text-sm leading-relaxed text-text-muted">{project.description}</p>

                {project.problemSolved && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-light">
                      Problem Solved
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {project.problemSolved}
                    </p>
                  </div>
                )}

                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-light">
                      Key Features
                    </h4>
                    <ul className="mt-2.5 space-y-2">
                      {project.keyFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.challenges && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-light">
                      Development Challenges
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.challenges}</p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-light">
                    Technologies Used
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-2">
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
              </div>
            )}

            {activeTab === "video" && project.video && (
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                {!videoStarted && (
                  <button
                    type="button"
                    onClick={() => setVideoStarted(true)}
                    aria-label={`Play demo video for ${project.title}`}
                    className="group absolute inset-0 flex items-center justify-center"
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="768px"
                        loading="lazy"
                        className="object-cover opacity-50 transition-opacity duration-300 group-hover:opacity-40"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
                    )}
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                      <Play size={26} fill="currentColor" className="ml-1" />
                    </span>
                  </button>
                )}
                {videoStarted && project.video.type === "drive" && (
                  <iframe
                    src={`https://drive.google.com/file/d/${project.video.fileId}/preview`}
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={`${project.title} demo video`}
                  />
                )}
                {videoStarted && project.video.type === "file" && (
                  <video
                    src={project.video.src}
                    poster={project.video.poster}
                    controls
                    autoPlay
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </div>
            )}

            {activeTab === "screenshots" && project.screenshots && (
              <div className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((src, i) => (
                  <div
                    key={src + i}
                    className="relative aspect-video overflow-hidden rounded-xl border border-border"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      sizes="(min-width: 640px) 384px, 90vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center gap-2.5 border-t border-border p-5 sm:p-7 sm:pt-5">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_24px_-8px_rgba(124,77,255,0.6)] transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/5 px-4 py-2 text-xs font-semibold text-text transition-colors hover:border-primary/50 hover:text-white"
            >
              <GithubIcon size={14} />
              GitHub Repository
            </a>
          )}
          {project.caseStudy && (
            <a
              href={project.caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/5 px-4 py-2 text-xs font-semibold text-text transition-colors hover:border-primary/50 hover:text-white"
            >
              <FileText size={14} />
              View Case Study
            </a>
          )}
          <a
            href="#contact"
            onClick={onClose}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              hasLinks
                ? "border border-border bg-white/5 text-text hover:border-accent/50 hover:text-white"
                : "bg-gradient-to-r from-primary to-accent text-white shadow-[0_10px_24px_-8px_rgba(124,77,255,0.6)] hover:-translate-y-0.5"
            }`}
          >
            <Mail size={14} />
            Contact Me
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
