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
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-[var(--color-line)]/60 backdrop-blur-md bg-[var(--color-ink)]/70">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-line-2)] bg-[var(--color-surface)] text-[11px] font-bold text-[var(--color-acid)] tracking-tighter">
            {profile.initials}
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[var(--color-acid)] animate-pulse-acid" />
          </span>
          <span className="hidden sm:flex items-baseline gap-1 text-xs text-[var(--color-fog)] group-hover:text-[var(--color-bone)] transition">
            <span className="text-[var(--color-bone)] font-medium">syadat</span>
            <span className="text-[var(--color-mute)]">.dev</span>
          </span>
        </a>

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

        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-1.5 rounded-md border border-[var(--color-acid)]/40 bg-[var(--color-acid-soft)] px-3 py-1.5 text-[12px] font-medium text-[var(--color-acid)] hover:bg-[var(--color-acid)] hover:text-[var(--color-ink)] transition"
        >
          Hire me
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </header>
  );
}
