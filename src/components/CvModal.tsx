"use client";

import { useCallback, useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { ArrowUpRight, Close, Download } from "./Icon";

export default function CvModal() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash === "#cv") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    setOpen(false);
  }, []);

  // Sync open state with the URL hash so any `<a href="#cv">` opens this modal.
  useEffect(() => {
    const check = () => setOpen(window.location.hash === "#cv");
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  // Lock body scroll + Escape to close while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Curriculum Vitae preview"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="absolute inset-0 bg-[var(--color-ink)]/85 backdrop-blur-md" />

      <div
        className="relative z-10 w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl border border-[var(--color-line-2)] bg-[var(--color-ink-2)] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),0_0_60px_-20px_rgba(182,255,60,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-[var(--color-line)] bg-[var(--color-surface)]/60 backdrop-blur shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className="inline-flex items-center gap-1.5 shrink-0">
              <span className="h-2 w-2 rounded-full bg-[var(--color-acid)] animate-pulse-acid" />
              <span className="h-2 w-2 rounded-full bg-[var(--color-line-2)]" />
              <span className="h-2 w-2 rounded-full bg-[var(--color-line-2)]" />
            </span>
            <span className="font-mono text-[11.5px] text-[var(--color-fog)] truncate">
              <span className="text-[var(--color-mute)]">~/</span>
              <span className="text-[var(--color-bone)]">muhamad_sechan_syadat_cv.pdf</span>
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="group hidden sm:inline-flex items-center gap-1.5 rounded-md border border-[var(--color-line-2)] bg-[var(--color-ink)]/60 px-2.5 py-1.5 text-[11.5px] text-[var(--color-bone)] hover:text-[var(--color-acid)] hover:border-[var(--color-acid)]/40 transition"
            >
              New tab
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={profile.cv}
              download="Muhamad_Sechan_Syadat_CV.pdf"
              className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-acid)]/40 bg-[var(--color-acid-soft)] px-2.5 py-1.5 text-[11.5px] font-medium text-[var(--color-acid)] hover:bg-[var(--color-acid)] hover:text-[var(--color-ink)] transition"
            >
              <Download size={12} />
              Download
            </a>
            <button
              onClick={close}
              aria-label="Close CV preview"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-line-2)] bg-[var(--color-ink)]/60 text-[var(--color-fog)] hover:text-[var(--color-acid)] hover:border-[var(--color-acid)]/40 transition"
            >
              <Close size={14} />
            </button>
          </div>
        </div>

        {/* Viewer */}
        <div className="relative flex-1 min-h-0 bg-[#1b1f22]">
          <object
            data={`${profile.cv}#view=FitH&toolbar=1&navpanes=0&statusbar=0`}
            type="application/pdf"
            className="block w-full h-full"
            aria-label="Muhamad Sechan Syadat — Curriculum Vitae"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 p-8">
              <div className="font-[family-name:var(--font-display)] text-xl text-[var(--color-bone)]">
                Your browser can&apos;t preview PDFs inline.
              </div>
              <p className="max-w-md text-[13px] text-[var(--color-fog)]">
                Open the CV in a new tab to view it with your system PDF reader, or grab a downloadable copy.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--color-acid)] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-ink)] hover:bg-[var(--color-acid-2)] transition"
                >
                  Open CV
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={profile.cv}
                  download="Muhamad_Sechan_Syadat_CV.pdf"
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--color-line-2)] bg-[var(--color-surface)] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-bone)] hover:border-[var(--color-acid)]/60 hover:text-[var(--color-acid)] transition"
                >
                  <Download size={14} />
                  Download
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 border-t border-[var(--color-line)] bg-[var(--color-ink-2)] font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-mute)] shrink-0">
          <span>ATS — Standard format</span>
          <span className="hidden sm:inline">ESC to close</span>
          <span>Updated 2026</span>
        </div>
      </div>
    </div>
  );
}
