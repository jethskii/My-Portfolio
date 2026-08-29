"use client";

import {
  FileCode,
  Palette,
  Braces,
  LayoutGrid,
  Wind,
  Flame,
  Hexagon,
  Server,
  Database,
  Smartphone,
  Waves,
  Video,
  Radio,
  KeyRound,
  GitBranch,
  Code2,
  Terminal,
  Cloud,
  TrendingUp,
  BarChart3,
  LineChart,
  PieChart,
} from "lucide-react";
import { techStackGroups, type TechStackItem } from "@/lib/data";
import { GithubIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";

const techIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "file-code": FileCode,
  palette: Palette,
  braces: Braces,
  "layout-grid": LayoutGrid,
  wind: Wind,
  flame: Flame,
  hexagon: Hexagon,
  server: Server,
  database: Database,
  smartphone: Smartphone,
  waves: Waves,
  video: Video,
  radio: Radio,
  "key-round": KeyRound,
  "git-branch": GitBranch,
  github: GithubIcon,
  "code-2": Code2,
  terminal: Terminal,
  cloud: Cloud,
  "trending-up": TrendingUp,
  "bar-chart-3": BarChart3,
  "line-chart": LineChart,
  "pie-chart": PieChart,
};

function TechCard({ item }: { item: TechStackItem }) {
  const Icon = techIcons[item.icon];
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-white/[0.03] px-4 py-3 transition-colors duration-300 hover:border-primary/40 hover:bg-white/[0.06]">
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ${item.colorClass}`}>
        <Icon size={18} />
      </span>
      <div className="leading-tight whitespace-nowrap">
        <p className="text-sm font-semibold text-white">{item.name}</p>
        <p className="text-[10px] font-medium uppercase tracking-wider text-text-faint">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({
  label,
  items,
  reverse,
  duration,
}: {
  label: string;
  items: TechStackItem[];
  reverse: boolean;
  duration: number;
}) {
  return (
    <div>
      <p className="mb-3 pl-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-text-faint">
        {label}
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div
          className={`marquee-track flex w-max gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} hover:[animation-play-state:paused]`}
          style={{ animationDuration: `${duration}s` }}
        >
          {[...items, ...items].map((item, i) => (
            <TechCard key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

let offset = 0;
const groupRowOffsets = techStackGroups.map((group) => {
  const start = offset;
  offset += group.rows.length;
  return start;
});

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

        <div className="mt-16 space-y-12">
          {techStackGroups.map((group, gi) => (
            <Reveal key={group.title} className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary-light">
                {group.title}
              </p>
              <div className="space-y-7">
                {group.rows.map((row, ri) => {
                  const i = groupRowOffsets[gi] + ri;
                  return (
                    <MarqueeRow
                      key={row.label}
                      label={row.label}
                      items={row.items}
                      reverse={i % 2 === 1}
                      duration={26 + i * 6}
                    />
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
