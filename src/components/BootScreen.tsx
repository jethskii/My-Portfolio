"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { site } from "@/lib/data";

const BOOT_LINES = [
  "Initializing environment",
  "Loading component modules",
  "Compiling design system",
  "Applying system theme",
];

const STEP_MS = 260;
const HOLD_MS = 500;
const EXIT_MS = 550;

export function BootScreen() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(0);
  const [exiting, setExiting] = useState(false);

  const totalSteps = BOOT_LINES.length + 1; // + "ready" line
  const ready = step > BOOT_LINES.length;
  const progress = Math.min(100, Math.round((step / totalSteps) * 100));

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setVisible(true);

    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), STEP_MS * (i + 1)));
    });
    const readyAt = STEP_MS * (BOOT_LINES.length + 1);
    timers.push(setTimeout(() => setStep(totalSteps), readyAt));
    timers.push(setTimeout(() => setExiting(true), readyAt + HOLD_MS));
    timers.push(setTimeout(() => setVisible(false), readyAt + HOLD_MS + EXIT_MS));

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!visible) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [visible]);

  function skip() {
    setExiting(true);
    setTimeout(() => setVisible(false), 300);
  }

  useEffect(() => {
    if (!visible) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") skip();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1, filter: exiting ? "blur(6px)" : "blur(0px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
          onClick={skip}
          className="fixed inset-0 z-[200] flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-bg px-5"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border-strong bg-surface/90 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
                </div>
                <span className="font-mono text-[11px] tracking-[0.15em] text-text-faint">
                  JETHRO.DEV — BOOT
                </span>
              </div>
              <span className="font-mono text-[11px] text-text-faint">v1.0</span>
            </div>

            <div className="space-y-2.5 px-5 py-6 font-mono text-[13px]">
              {BOOT_LINES.map((line, i) => {
                const done = step > i;
                if (!done) return null;
                return (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-text-faint">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-semibold text-emerald-400">[OK]</span>
                    <span className="text-text-muted">{line}</span>
                  </motion.div>
                );
              })}
              {ready && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-text-faint">{String(totalSteps).padStart(2, "0")}</span>
                  <span className="font-semibold text-accent">[READY]</span>
                  <span className="text-white">Portfolio ready</span>
                </motion.div>
              )}

              <div className="mt-4 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border px-5 py-2.5 font-mono text-[11px]">
              <span className="flex items-center gap-1.5 text-text-faint">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${ready ? "bg-emerald-400" : "bg-amber-400"}`}
                />
                {ready ? "READY" : "BOOTING"}
              </span>
              <span className="text-text-faint">{progress}%</span>
            </div>
          </div>

          <AnimatePresence>
            {ready && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-10 flex flex-col items-center text-center"
              >
                <span className="font-mono text-[11px] tracking-[0.3em] text-text-faint">
                  PORTFOLIO · INITIALIZED
                </span>
                <div className="mt-3 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                    <Code2 size={18} />
                  </span>
                  <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
                    {site.shortName} Mandalones
                  </h1>
                </div>
                <p className="mt-3 max-w-md font-mono text-[11px] tracking-wide text-text-muted">
                  {site.title}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <span className="absolute bottom-6 font-mono text-[10px] tracking-[0.2em] text-text-faint">
            CLICK OR PRESS ANY KEY TO SKIP
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
