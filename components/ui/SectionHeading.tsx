type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-5 border-t border-current/15 pt-5 md:grid-cols-[0.28fr_1fr] md:gap-10">
      <p className={"text-[11px] font-semibold uppercase tracking-[0.24em] " + (light ? "text-white/55" : "text-muted")}>
        {eyebrow}
      </p>
      <div>
        <h2 className="max-w-4xl font-display text-5xl font-medium leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          {title}
        </h2>
        {description ? (
          <p className={"mt-6 max-w-2xl text-sm leading-7 sm:text-base " + (light ? "text-white/60" : "text-muted")}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
