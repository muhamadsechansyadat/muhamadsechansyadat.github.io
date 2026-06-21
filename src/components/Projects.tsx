"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { featuredProjects, otherProjects, type Project } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight, ChevronLeft, ChevronRight, Close } from "./Icon";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [shotIdx, setShotIdx] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setShotIdx((i) => (i + 1) % active.shots.length);
      if (e.key === "ArrowLeft") setShotIdx((i) => (i - 1 + active.shots.length) % active.shots.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const openProject = (p: Project) => {
    setActive(p);
    setShotIdx(0);
  };

  return (
    <section id="work" className="relative py-16 sm:py-20 lg:py-28 border-t border-[var(--color-line)]/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <SectionHeading
          number="04"
          kicker="Selected Work"
          title="Things I've built recently."
          description="Pick any card to scrub through the full shot reel. Built across freelance engagements and full-time roles."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featuredProjects.map((p) => (
            <button
              key={p.slug}
              onClick={() => openProject(p)}
              className="group text-left rounded-xl border border-[var(--color-line)] bg-[var(--color-ink-2)] overflow-hidden hover:border-[var(--color-acid)]/50 transition-all hover:-translate-y-0.5"
            >
              <div className="relative aspect-[16/10] bg-[var(--color-surface)] overflow-hidden">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-2)] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-[var(--color-ink)]/80 backdrop-blur-sm px-2 py-1 text-[10px] font-mono text-[var(--color-fog)] border border-[var(--color-line-2)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-acid)]" />
                  {String(featuredProjects.indexOf(p) + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
                </span>
                <span className="absolute top-3 right-3 inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-ink)]/80 backdrop-blur-sm border border-[var(--color-line-2)] text-[var(--color-acid)] opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight size={14} />
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-[family-name:var(--font-display)] text-[17px] font-semibold text-[var(--color-bone)] group-hover:text-[var(--color-acid)] transition">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-[var(--color-fog)] leading-snug line-clamp-2">
                  {p.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-2 py-0.5 text-[10.5px] text-[var(--color-fog)]"
                    >
                      {s}
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="rounded-md px-1 py-0.5 text-[10.5px] text-[var(--color-mute)]">
                      +{p.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-16">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-mute)] mb-5 font-mono">
            Also shipped
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-[var(--color-line)] rounded-xl overflow-hidden border border-[var(--color-line)]">
            {otherProjects.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group bg-[var(--color-ink-2)] p-5 lg:p-6 hover:bg-[var(--color-surface)] transition flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-[family-name:var(--font-display)] text-[15px] font-semibold text-[var(--color-bone)] group-hover:text-[var(--color-acid)] transition">
                    {p.title}
                  </h4>
                  <ArrowUpRight size={15} className="text-[var(--color-mute)] group-hover:text-[var(--color-acid)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </div>
                <p className="mt-2 text-[12.5px] text-[var(--color-fog)] leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-[var(--color-line)] bg-[var(--color-ink)]/60 px-2 py-0.5 text-[10.5px] text-[var(--color-fog)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Project modal */}
      {active && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div className="absolute inset-0 bg-[var(--color-ink)]/85 backdrop-blur-md" />
          <div className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl border border-[var(--color-line-2)] bg-[var(--color-ink-2)]">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-5 lg:px-7 py-4 border-b border-[var(--color-line)] bg-[var(--color-ink-2)]/95 backdrop-blur">
              <div className="flex items-center gap-3 min-w-0">
                <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-acid)] animate-pulse-acid shrink-0" />
                <h3 className="font-[family-name:var(--font-display)] text-[16px] lg:text-[18px] font-semibold text-[var(--color-bone)] truncate">
                  {active.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {active.url && (
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-[var(--color-line-2)] bg-[var(--color-surface)] px-3 py-1.5 text-[12px] text-[var(--color-bone)] hover:text-[var(--color-acid)] hover:border-[var(--color-acid)]/40 transition"
                  >
                    Visit
                    <ArrowUpRight size={13} />
                  </a>
                )}
                <button
                  onClick={() => setActive(null)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-line-2)] bg-[var(--color-surface)] text-[var(--color-fog)] hover:text-[var(--color-acid)] hover:border-[var(--color-acid)]/40 transition"
                  aria-label="Close"
                >
                  <Close size={15} />
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-0">
              <div className="relative bg-[var(--color-surface)] aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src={active.shots[shotIdx]}
                  alt={`${active.title} screenshot ${shotIdx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain object-top"
                />
                {active.shots.length > 1 && (
                  <>
                    <button
                      onClick={() => setShotIdx((i) => (i - 1 + active.shots.length) % active.shots.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-ink)]/80 backdrop-blur border border-[var(--color-line-2)] text-[var(--color-bone)] hover:text-[var(--color-acid)] transition"
                      aria-label="Previous shot"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setShotIdx((i) => (i + 1) % active.shots.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-ink)]/80 backdrop-blur border border-[var(--color-line-2)] text-[var(--color-bone)] hover:text-[var(--color-acid)] transition"
                      aria-label="Next shot"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-md bg-[var(--color-ink)]/80 backdrop-blur px-2.5 py-1 text-[10px] font-mono text-[var(--color-fog)] border border-[var(--color-line-2)]">
                      {String(shotIdx + 1).padStart(2, "0")} / {String(active.shots.length).padStart(2, "0")}
                    </div>
                  </>
                )}
              </div>

              <div className="p-5 lg:p-7 space-y-5">
                <p className="text-[14px] text-[var(--color-fog)] leading-relaxed">
                  {active.description}
                </p>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute)] mb-2 font-mono">
                    Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {active.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-[var(--color-line-2)] bg-[var(--color-surface)] px-2.5 py-1 text-[11.5px] text-[var(--color-bone)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {active.url ? (
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-md border border-[var(--color-acid)]/40 bg-[var(--color-acid-soft)] px-3 py-2 text-[12px] font-medium text-[var(--color-acid)] hover:bg-[var(--color-acid)] hover:text-[var(--color-ink)] transition"
                  >
                    Open live site
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-md border border-[var(--color-line-2)] px-3 py-2 text-[12px] text-[var(--color-mute)]">
                    Live URL retired
                  </span>
                )}

                {active.shots.length > 1 && (
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute)] mb-2 font-mono">
                      All shots
                    </div>
                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 gap-1.5">
                      {active.shots.map((s, i) => (
                        <button
                          key={s}
                          onClick={() => setShotIdx(i)}
                          className={`relative aspect-[4/3] overflow-hidden rounded-md border transition ${
                            i === shotIdx
                              ? "border-[var(--color-acid)]"
                              : "border-[var(--color-line)] opacity-60 hover:opacity-100"
                          }`}
                          aria-label={`Show shot ${i + 1}`}
                        >
                          <Image
                            src={s}
                            alt=""
                            fill
                            sizes="120px"
                            className="object-cover object-top"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
