import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)]/60 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11.5px] sm:text-[12px] text-[var(--color-mute)] font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-[var(--color-line-2)] bg-[var(--color-surface)] text-[9px] font-bold text-[var(--color-acid)] tracking-tighter">
            {profile.initials}
          </span>
          <span>
            © {new Date().getUTCFullYear()} {profile.name}. All systems nominal.
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-acid)] animate-pulse-acid" />
            Built with Next.js · Tailwind CSS
          </span>
          <a href="#top" className="hover:text-[var(--color-acid)] transition">
            ↑ top
          </a>
        </div>
      </div>
    </footer>
  );
}
