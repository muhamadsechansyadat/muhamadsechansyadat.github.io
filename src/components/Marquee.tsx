const items = [
  "BACKEND",
  "FULL STACK",
  "FRONTEND",
  "LARAVEL",
  "NEXT.JS",
  "GOLANG",
  "NODE.JS",
  "REACT",
  "TYPESCRIPT",
  "POSTGRESQL",
  "DOCKER",
  "REST API",
  "AVAILABLE FOR HIRE",
];

export default function Marquee() {
  const seq = [...items, ...items];
  return (
    <div className="relative border-y border-[var(--color-line)] bg-[var(--color-ink-2)]/70 py-3 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-ink)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-ink)] to-transparent z-10 pointer-events-none" />
      <div className="flex w-max animate-marquee gap-10 font-mono text-[12px] tracking-[0.22em] text-[var(--color-fog)]">
        {seq.map((label, i) => (
          <span key={i} className="inline-flex items-center gap-10">
            <span>{label}</span>
            <span className="text-[var(--color-acid)]/60">◇</span>
          </span>
        ))}
      </div>
    </div>
  );
}
