import Image from "next/image";
import { profile, openTo } from "@/lib/data";
import { ArrowUpRight, Eye, Github, Linkedin, Mail, MapPin } from "./Icon";

export default function Hero() {
  return (
    <section id="top" className="scene-3d relative pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      {/* ── 3D background scene ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Static grid + scanlines */}
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute inset-0 bg-scan opacity-70" />

        {/* Perspective floor that drifts */}
        <div className="scene-plane" />

        {/* Aurora blobs */}
        <div className="aurora absolute -top-32 right-[-6%] h-[460px] w-[460px] rounded-full bg-[var(--color-acid)]/15 blur-[140px]" />
        <div
          className="aurora absolute top-1/3 left-[-12%] h-[360px] w-[360px] rounded-full bg-[#4aa627]/20 blur-[130px]"
          style={{ animationDelay: "-6s" }}
        />

        {/* Floating wireframe shapes */}
        <div
          className="shape-3d ring orbit-a hidden md:block"
          style={{ top: "18%", left: "8%", width: 120, height: 120 }}
        />
        <div
          className="shape-3d hex orbit-b hidden md:block"
          style={{ top: "62%", left: "14%", width: 86, height: 96 }}
        />
        <div
          className="shape-3d orbit-c hidden lg:block"
          style={{ top: "24%", right: "10%", width: 70, height: 70, borderRadius: 14 }}
        />
        <div
          className="shape-3d ring orbit-c hidden lg:block"
          style={{ top: "70%", right: "18%", width: 50, height: 50, animationDuration: "30s" }}
        />
        <div
          className="shape-3d hex orbit-a hidden lg:block"
          style={{ top: "12%", left: "44%", width: 40, height: 44, animationDuration: "26s", animationDelay: "-4s" }}
        />

        {/* Crosshair markers — pure digital HUD */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(182,255,60,0.18)" strokeWidth="0.05" strokeDasharray="0.5 1" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(182,255,60,0.18)" strokeWidth="0.05" strokeDasharray="0.5 1" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-8 grid lg:grid-cols-[1fr_auto] gap-10 sm:gap-12 lg:gap-16 items-center">
        <div className="fade-up">
          {/* Status line */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-2)] bg-[var(--color-surface)]/70 px-3 py-1 text-[11px] text-[var(--color-fog)] mb-6 backdrop-blur-sm">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-acid)] opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-acid)]" />
            </span>
            <span className="font-medium text-[var(--color-bone)]">Open to work</span>
            <span className="text-[var(--color-mute)]">/</span>
            <span>{profile.availability}</span>
          </div>

          {/* Terminal-style intro */}
          <div className="font-mono text-[12px] text-[var(--color-mute)] mb-3">
            <span className="text-[var(--color-acid)]">~</span>{" "}
            <span className="text-[var(--color-fog)]">whoami</span>
            <span className="ml-2 text-[var(--color-acid)] animate-blink">▌</span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[34px] sm:text-5xl lg:text-[64px] leading-[1.05] tracking-[-0.02em] font-semibold text-[var(--color-bone)]">
            {profile.name.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-3">
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-2xl text-[14px] sm:text-[15px] lg:text-base text-[var(--color-fog)] leading-relaxed">
            <span className="text-[var(--color-bone)] font-medium">{profile.role}</span>{" "}
            specializing in <span className="text-[var(--color-acid)]">{profile.focus}</span>.
            {" "}{profile.yearsExperience}+ years shipping scalable systems across IT, education, logistics, HR, e-commerce and financial services.
          </p>

          {/* Meta row */}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-[11.5px] sm:text-[12px] text-[var(--color-mute)]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-[var(--color-acid)]" />
              {profile.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-line-2)]" />
            <span>GMT+7</span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-line-2)]" />
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--color-acid)] transition">
              @muhamadsechansyadat
            </a>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-md bg-[var(--color-acid)] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-ink)] hover:bg-[var(--color-acid-2)] transition shadow-[0_0_0_1px_rgba(182,255,60,0.5),0_0_40px_rgba(182,255,60,0.25)]"
            >
              <Mail size={15} />
              Email me
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#cv"
              className="group inline-flex items-center gap-2 rounded-md border border-[var(--color-line-2)] bg-[var(--color-surface)] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-bone)] hover:border-[var(--color-acid)]/60 hover:text-[var(--color-acid)] transition"
            >
              <Eye size={15} />
              Preview CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-line-2)] bg-transparent px-3 py-2.5 text-[13px] text-[var(--color-fog)] hover:text-[var(--color-bone)] hover:border-[var(--color-line-2)] hover:bg-[var(--color-surface)] transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-line-2)] bg-transparent px-3 py-2.5 text-[13px] text-[var(--color-fog)] hover:text-[var(--color-bone)] hover:border-[var(--color-line-2)] hover:bg-[var(--color-surface)] transition"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
          </div>

          {/* Open to */}
          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
              Open to
            </span>
            {openTo.map((role) => (
              <span
                key={role}
                className="rounded-md border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-2 py-1 text-[11px] text-[var(--color-fog)]"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Profile card — photo inside the futuristic frame */}
        <div className="relative justify-self-center lg:justify-self-end fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="card-tilt relative h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]">
            <div className="relative h-full w-full rounded-2xl border border-[var(--color-line-2)] bg-[var(--color-surface)]/70 overflow-hidden backdrop-blur-sm">
              {/* Subtle grid + gradient inside frame */}
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-acid)]/15 via-transparent to-[#4aa627]/15" />

              {/* HUD top labels */}
              <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between text-[10px] font-mono text-[var(--color-mute)]">
                <span>ID://SE-001</span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-acid)] animate-pulse-acid" />
                  LIVE
                </span>
              </div>

              {/* Photo */}
              <div className="absolute inset-x-0 top-7 bottom-7 flex items-end justify-center">
                <div className="relative h-full w-full">
                  <Image
                    src="/profile.png"
                    alt={profile.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 280px, 320px"
                    className="object-contain object-bottom drop-shadow-[0_10px_30px_rgba(182,255,60,0.25)]"
                  />
                  {/* Scanning line */}
                  <div className="portrait-scan absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-acid)] to-transparent shadow-[0_0_12px_rgba(182,255,60,0.6)]" />
                </div>
              </div>

              {/* Bottom meta */}
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[10px] font-mono text-[var(--color-mute)]">
                <span>v{profile.yearsExperience}.0</span>
                <span>{profile.role.toUpperCase().replace(" ", "_")}</span>
              </div>

              {/* Corner cuts */}
              <span className="absolute top-0 left-0 h-3 w-3 border-l border-t border-[var(--color-acid)]/80" />
              <span className="absolute top-0 right-0 h-3 w-3 border-r border-t border-[var(--color-acid)]/80" />
              <span className="absolute bottom-0 left-0 h-3 w-3 border-l border-b border-[var(--color-acid)]/80" />
              <span className="absolute bottom-0 right-0 h-3 w-3 border-r border-b border-[var(--color-acid)]/80" />
            </div>

            {/* Floating MSS chip behind/under */}
            <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-1.5 rounded-lg border border-[var(--color-line-2)] bg-[var(--color-ink-2)]/90 backdrop-blur px-2.5 py-1.5 text-[10px] font-mono text-[var(--color-fog)]">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-[var(--color-line-2)] bg-[var(--color-surface)] text-[8px] font-bold text-[var(--color-acid)] tracking-tighter">
                {profile.initials}
              </span>
              syadat.dev
            </div>
            <div className="absolute -bottom-3 -right-3 hidden sm:block rounded-lg border border-[var(--color-line-2)] bg-[var(--color-ink-2)]/90 backdrop-blur px-3 py-1.5 text-[10px] font-mono text-[var(--color-fog)]">
              <span className="text-[var(--color-acid)]">●</span> available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
