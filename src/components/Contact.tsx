"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { site, socials } from "@/lib/data";
import { Reveal } from "./Reveal";
import { GlowBackground } from "./GlowBackground";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "./BrandIcons";

const socialIcons = { github: GithubIcon, linkedin: LinkedinIcon, facebook: FacebookIcon };

const contactPoints = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: site.location, href: undefined },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <GlowBackground variant="hero" className="opacity-60" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-primary-light">
            GET IN TOUCH
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-text-muted">
            I am currently open to new opportunities in Web Development, Business Analytics, IT
            Support, and related technology roles.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={0.1} className="space-y-4">
            {contactPoints.map((point) => {
              const Content = (
                <div className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-[0_0_20px_-6px_rgba(124,77,255,0.8)]">
                    <point.icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-text-faint">{point.label}</p>
                    <p className="truncate text-sm font-semibold text-white">{point.value}</p>
                  </div>
                </div>
              );
              return point.href ? (
                <a key={point.label} href={point.href}>
                  {Content}
                </a>
              ) : (
                <div key={point.label}>{Content}</div>
              );
            })}

            <div className="rounded-2xl glass p-5">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-text-faint">
                FOLLOW ME
              </p>
              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/5 text-text-muted transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-white"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl glass-strong p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-medium text-text-muted">
                    Your Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-text-faint focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium text-text-muted">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-text-faint focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-xs font-medium text-text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-text-faint focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-6px_rgba(124,77,255,0.8)] transition-transform hover:scale-[1.02] sm:w-auto"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} />
                    Opening your email app...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
