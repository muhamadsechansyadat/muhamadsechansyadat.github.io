import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight, Eye, Github, Linkedin, Mail, Phone } from "./Icon";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-28 border-t border-[var(--color-line)]/60">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-[var(--color-acid)]/8 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <SectionHeading
          number="06"
          kicker="Get in touch"
          title="Let's build something solid."
          description="Open to backend, full-stack, frontend, and software engineering roles. Reply windows are short — I check email throughout the day."
        />

        <div className="rounded-2xl border border-[var(--color-line-2)] bg-[var(--color-ink-2)] p-5 sm:p-8 lg:p-12 overflow-hidden relative">
          <span className="absolute top-0 left-0 h-3 w-3 border-l border-t border-[var(--color-acid)]/80" />
          <span className="absolute top-0 right-0 h-3 w-3 border-r border-t border-[var(--color-acid)]/80" />
          <span className="absolute bottom-0 left-0 h-3 w-3 border-l border-b border-[var(--color-acid)]/80" />
          <span className="absolute bottom-0 right-0 h-3 w-3 border-r border-b border-[var(--color-acid)]/80" />

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-10 items-center">
            <div>
              <div className="font-mono text-[12px] text-[var(--color-acid)] mb-3">
                $ contact --priority=high
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-[var(--color-bone)]">
                Hiring, collaborating, or just curious?
              </h3>
              <p className="mt-4 text-[14px] text-[var(--color-fog)] max-w-xl leading-relaxed">
                The fastest way to reach me is email. For a quick context check, my CV is one click away — or jump straight to LinkedIn and GitHub.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-md bg-[var(--color-acid)] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-ink)] hover:bg-[var(--color-acid-2)] transition shadow-[0_0_0_1px_rgba(182,255,60,0.5),0_0_40px_rgba(182,255,60,0.25)] max-w-full"
                >
                  <Mail size={15} className="shrink-0" />
                  <span className="truncate">
                    <span className="sm:hidden">Email me</span>
                    <span className="hidden sm:inline">{profile.email}</span>
                  </span>
                  <ArrowUpRight size={14} className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#cv"
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--color-line-2)] bg-[var(--color-surface)] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-bone)] hover:border-[var(--color-acid)]/60 hover:text-[var(--color-acid)] transition"
                >
                  <Eye size={15} />
                  Preview CV
                </a>
              </div>
            </div>

            <div className="grid gap-px bg-[var(--color-line)] rounded-xl overflow-hidden border border-[var(--color-line)]">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group bg-[var(--color-ink-2)] hover:bg-[var(--color-surface)] transition p-5 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line-2)] bg-[var(--color-ink)] text-[var(--color-acid)]">
                    <Linkedin size={16} />
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-mute)]">LinkedIn</div>
                    <div className="text-[13px] text-[var(--color-bone)]">/in/muhamad-sechan-syadat</div>
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-[var(--color-mute)] group-hover:text-[var(--color-acid)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group bg-[var(--color-ink-2)] hover:bg-[var(--color-surface)] transition p-5 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line-2)] bg-[var(--color-ink)] text-[var(--color-acid)]">
                    <Github size={16} />
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-mute)]">GitHub</div>
                    <div className="text-[13px] text-[var(--color-bone)]">@muhamadsechansyadat</div>
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-[var(--color-mute)] group-hover:text-[var(--color-acid)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="group bg-[var(--color-ink-2)] hover:bg-[var(--color-surface)] transition p-5 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line-2)] bg-[var(--color-ink)] text-[var(--color-acid)]">
                    <Phone size={16} />
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-mute)]">Phone</div>
                    <div className="text-[13px] text-[var(--color-bone)]">{profile.phone}</div>
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-[var(--color-mute)] group-hover:text-[var(--color-acid)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
