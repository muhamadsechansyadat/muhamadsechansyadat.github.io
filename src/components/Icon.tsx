type IconProps = { className?: string; size?: number };

const base = (size?: number) => ({
  width: size ?? 18,
  height: size ?? 18,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const ArrowUpRight = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const Mail = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Download = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <path d="M12 4v12" />
    <path d="m7 11 5 5 5-5" />
    <path d="M5 20h14" />
  </svg>
);

export const Github = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

export const Linkedin = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Phone = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const MapPin = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Close = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const ChevronLeft = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ChevronRight = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const Terminal = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <path d="m4 17 6-6-6-6" />
    <path d="M12 19h8" />
  </svg>
);

export const Eye = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Sparkle = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base(size)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </svg>
);
