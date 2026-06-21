import { skillGroups } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Stack() {
  return (
    <section id="stack" className="relative py-20 lg:py-28 border-t border-[var(--color-line)]/60">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          number="02"
          kicker="Tech Stack"
          title="Tools I reach for."
          description="A pragmatic mix of backend muscle, frontend polish, and the infrastructure glue that holds them together."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)] rounded-xl overflow-hidden border border-[var(--color-line)]">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="bg-[var(--color-ink-2)] p-6 lg:p-7 relative group hover:bg-[var(--color-surface)] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-mute)] font-mono">
                  {group.label}
                </div>
                <span className="text-[10px] font-mono text-[var(--color-acid)]/70">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--color-line-2)] bg-[var(--color-ink)]/60 px-2.5 py-1 text-[12px] text-[var(--color-bone)] hover:border-[var(--color-acid)]/50 hover:text-[var(--color-acid)] transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
