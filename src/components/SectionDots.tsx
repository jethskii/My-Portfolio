"use client";

import { useActiveSection } from "@/lib/useActiveSection";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "qualifications", label: "Qualifications" },
  { id: "certifications", label: "Certifications" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function SectionDots() {
  const activeId = useActiveSection(sections.map((s) => s.id));

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 xl:flex"
    >
      {sections.map((s) => {
        const active = activeId === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-current={active ? "true" : undefined}
            className="group flex items-center gap-3"
          >
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.2em] transition-opacity duration-300 ${
                active ? "text-white opacity-100" : "text-text-faint opacity-0 group-hover:opacity-100"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full border transition-all duration-300 ${
                active
                  ? "scale-125 border-accent bg-accent shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]"
                  : "border-text-faint bg-transparent group-hover:border-white"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
