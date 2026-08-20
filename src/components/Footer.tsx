import { Code2 } from "lucide-react";
import { site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <a href="#home" className="flex items-center gap-2 font-display text-sm font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
            <Code2 size={14} />
          </span>
          Jethro<span className="text-gradient">.dev</span>
        </a>
        <p className="text-xs text-text-faint">
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
