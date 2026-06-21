type Props = {
  number: string;
  kicker: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ number, kicker, title, description }: Props) {
  return (
    <div className="mb-10 lg:mb-14">
      <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[var(--color-mute)] mb-3 font-mono">
        <span className="text-[var(--color-acid)]">{number}</span>
        <span className="h-px w-8 bg-[var(--color-line-2)]" />
        <span>{kicker}</span>
      </div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl tracking-[-0.02em] font-semibold text-[var(--color-bone)]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-[14px] text-[var(--color-fog)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
