import { summary } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "5+", label: "Years building software" },
  { value: "6", label: "Industries shipped to" },
  { value: "20+", label: "Production projects" },
  { value: "4", label: "Companies / teams" },
];

const industries = [
  "IT Infrastructure",
  "Education",
  "Logistics",
  "Human Resources",
  "E-Commerce",
  "Financial Services",
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-28 border-t border-[var(--color-line)]/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <SectionHeading
          number="01"
          kicker="About"
          title="Engineering reliable systems, one ship at a time."
        />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
          <div className="space-y-5 text-[15px] leading-relaxed text-[var(--color-fog)]">
            <p>{summary}</p>
            <p>
              Passionate about <span className="text-[var(--color-bone)]">software architecture</span>,{" "}
              <span className="text-[var(--color-bone)]">clean code practices</span>,{" "}
              <span className="text-[var(--color-bone)]">system scalability</span>, and continuous learning.
              Seeking opportunities as a Backend Developer, Full Stack Developer, or Software Engineer within
              innovative organizations across Indonesia.
            </p>

            <div className="pt-2">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-mute)] mb-3 font-mono">
                Industries
              </div>
              <div className="flex flex-wrap gap-2">
                {industries.map((i) => (
                  <span
                    key={i}
                    className="rounded-md border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-3 py-1.5 text-[12px] text-[var(--color-fog)]"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[var(--color-line)] rounded-xl overflow-hidden border border-[var(--color-line)] self-start">
            {stats.map((s) => (
              <div key={s.label} className="bg-[var(--color-ink-2)] p-5 lg:p-6 relative group">
                <div className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-semibold text-[var(--color-acid)] tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-[12px] text-[var(--color-fog)] leading-snug">
                  {s.label}
                </div>
                <span className="absolute top-2 right-2 text-[10px] font-mono text-[var(--color-mute)] opacity-60 group-hover:opacity-100 transition">
                  ▸
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
