import { experiences } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-28 border-t border-[var(--color-line)]/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <SectionHeading
          number="03"
          kicker="Experience"
          title="Where I've shipped."
          description="A condensed timeline of full-time roles. Each was responsible for production systems used daily."
        />

        <ol className="relative space-y-10 lg:space-y-12 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-[var(--color-line-2)]">
          {experiences.map((exp, i) => (
            <li key={exp.company} className="relative pl-8 lg:pl-10">
              <span className="absolute left-0 top-1.5 inline-flex h-4 w-4 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-acid)] opacity-20" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-acid)]" />
              </span>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-bone)]">
                  {exp.role}
                </h3>
                <span className="text-[var(--color-mute)]">·</span>
                <span className="text-[14px] text-[var(--color-acid)]">{exp.company}</span>
              </div>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-mute)] mb-4">
                {exp.period}
                {i === 0 && (
                  <span className="ml-2 inline-flex items-center rounded-sm border border-[var(--color-line-2)] px-1.5 py-0.5 text-[10px] text-[var(--color-fog)]">
                    Most recent
                  </span>
                )}
              </div>

              <ul className="space-y-2 text-[14px] text-[var(--color-fog)] leading-relaxed max-w-3xl">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-[var(--color-acid)] mt-1.5 select-none">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {exp.projects && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-mute)]">
                    Key projects
                  </span>
                  {exp.projects.map((p) => (
                    <span
                      key={p}
                      className="rounded-md border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-2 py-1 text-[11px] text-[var(--color-fog)]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
