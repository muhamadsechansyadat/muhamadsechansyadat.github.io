"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { ArrowUpRight } from "./Icon";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close drawer on hash change (anchor click) or when growing past md breakpoint.
  useEffect(() => {
    const onHash = () => setOpen(false);
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("hashchange", onHash);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-[var(--color-line)]/60 backdrop-blur-md bg-[var(--color-ink)]/75">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8 h-14 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2 group shrink-0" onClick={() => setOpen(false)}>
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-line-2)] bg-[var(--color-surface)] text-[11px] font-bold text-[var(--color-acid)] tracking-tighter">
            {profile.initials}
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[var(--color-acid)] animate-pulse-acid" />
          </span>
          <span className="hidden xs:flex sm:flex items-baseline gap-1 text-xs text-[var(--color-fog)] group-hover:text-[var(--color-bone)] transition">
            <span className="text-[var(--color-bone)] font-medium">syadat</span>
            <span className="text-[var(--color-mute)]">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1 text-[13px]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-md text-[var(--color-fog)] hover:text-[var(--color-bone)] hover:bg-[var(--color-surface)] transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-1.5 rounded-md border border-[var(--color-acid)]/40 bg-[var(--color-acid-soft)] px-3 py-1.5 text-[12px] font-medium text-[var(--color-acid)] hover:bg-[var(--color-acid)] hover:text-[var(--color-ink)] transition"
          >
            Hire me
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line-2)] bg-[var(--color-surface)] text-[var(--color-fog)] hover:text-[var(--color-acid)] hover:border-[var(--color-acid)]/40 transition"
          >
            <span className="relative block w-4 h-3">
              <span
                className={`absolute left-0 right-0 h-px bg-current transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1.5 h-px bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-px bg-current transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-ink-2)]/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 py-2 flex flex-col">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between gap-3 px-2 py-3 border-b border-[var(--color-line)]/60 last:border-0 text-[14px] text-[var(--color-bone)]"
            >
              <span className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[var(--color-acid)]/70 w-5">
                  0{i + 1}
                </span>
                <span className="group-hover:text-[var(--color-acid)] transition">{l.label}</span>
              </span>
              <ArrowUpRight size={14} className="text-[var(--color-mute)] group-hover:text-[var(--color-acid)] transition" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
