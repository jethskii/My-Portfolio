"use client";

import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { site, socials } from "@/lib/data";
import { Reveal } from "./Reveal";
import { GlowBackground } from "./GlowBackground";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "./BrandIcons";

const socialIcons = { github: GithubIcon, linkedin: LinkedinIcon, facebook: FacebookIcon };

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location)}`;

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <GlowBackground variant="minimal" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="border-t border-border pt-10">
          <p className="mb-14 text-xs font-semibold tracking-[0.3em] text-primary-light">
            — CONTACT
          </p>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
            {/* Left: headline + actions */}
            <Reveal>
              <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build
                <br />
                something that
                <br />
                <span className="text-gradient">solves real problems.</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-relaxed text-text-muted">
                Whether it&apos;s a project, an opportunity, or just a technical question — I&apos;d
                love to hear from you.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-bg shadow-[0_0_30px_-8px_rgba(255,255,255,0.5)] transition-transform hover:scale-105"
                >
                  Send Email
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:bg-white/10"
                >
                  View Résumé
                  <Download size={16} />
                </a>
              </div>
            </Reveal>

            {/* Right: contact details */}
            <Reveal delay={0.15}>
              <p className="text-xs font-semibold tracking-[0.3em] text-text-faint">
                GET IN TOUCH
              </p>

              <div className="mt-6 border-t border-border pt-6">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-text-faint">
                  PRIMARY EMAIL
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="group mt-2 flex items-center justify-between gap-3 text-lg font-bold text-white transition-colors hover:text-accent sm:text-xl"
                >
                  <span className="break-all">{site.email}</span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-text-faint transition-colors group-hover:text-accent"
                  />
                </a>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-6 border-t border-border pt-6">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-text-faint">
                    PHONE
                  </p>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="mt-2 flex items-center gap-1.5 text-sm text-text transition-colors hover:text-accent"
                  >
                    <Phone size={14} className="shrink-0 text-text-faint" />
                    {site.phone}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-text-faint">
                    BASED IN
                  </p>
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-1.5 text-sm text-text transition-colors hover:text-accent"
                  >
                    <MapPin size={14} className="shrink-0 text-text-faint" />
                    {site.location}
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                <div>
                  <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-text-faint">
                    ELSEWHERE
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {socials.map((social) => {
                      const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-white"
                        >
                          <Icon size={16} />
                          {social.label}
                        </a>
                      );
                    })}
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-white"
                    >
                      <Mail size={16} />
                      Email
                    </a>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Available for opportunities
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
