import { Reveal } from "@/components/reveal";

type SectionKickerProps = {
  number: string;
  label: string;
  /** "dark" = sobre fundo roxo, "light" = sobre fundo claro */
  tone?: "dark" | "light";
};

export function SectionKicker({
  number,
  label,
  tone = "dark",
}: SectionKickerProps) {
  const isLight = tone === "light";

  return (
    <Reveal as="div" className="flex items-center gap-3">
      <span className="font-heading text-sm font-semibold text-accent">
        {number}
      </span>
      <span
        aria-hidden="true"
        className={`h-px w-10 ${isLight ? "bg-line-ink" : "bg-line"}`}
      />
      <span
        className={`text-xs font-medium uppercase tracking-[0.2em] ${
          isLight ? "text-ink-soft" : "text-stone"
        }`}
      >
        {label}
      </span>
    </Reveal>
  );
}
