import { education, languages } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function EducationLanguages() {
  return (
    <section id="learning" className="relative py-20 lg:py-28 border-t border-[var(--color-line)]/60">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          number="05"
          kicker="Background"
          title="Education & languages."
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-ink-2)] p-6 lg:p-8">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-mute)] mb-5 font-mono">
              Education
            </div>
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.school} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-5 border-b border-[var(--color-line)] last:border-0 last:pb-0">
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-[16px] font-semibold text-[var(--color-bone)]">
                      {e.degree}
                    </div>
                    <div className="text-[13px] text-[var(--color-fog)]">
                      {e.school}
                    </div>
                    {e.note && (
                      <div className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-[var(--color-acid)] font-mono">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-acid)] animate-pulse-acid" />
                        {e.note}
                      </div>
                    )}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-mute)] sm:text-right">
                    {e.period}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-ink-2)] p-6 lg:p-8">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-mute)] mb-5 font-mono">
              Languages
            </div>
            <ul className="space-y-5">
              {languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-3 pb-5 border-b border-[var(--color-line)] last:border-0 last:pb-0">
                  <div className="font-[family-name:var(--font-display)] text-[16px] font-semibold text-[var(--color-bone)]">
                    {l.name}
                  </div>
                  <div className="text-[12px] text-[var(--color-fog)] text-right">
                    {l.level}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-[var(--color-line)]">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-mute)] mb-3 font-mono">
                Working style
              </div>
              <div className="flex flex-wrap gap-2">
                {["Remote", "Hybrid", "On-site", "Async-friendly", "Agile / Scrum"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-2.5 py-1 text-[11.5px] text-[var(--color-fog)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
