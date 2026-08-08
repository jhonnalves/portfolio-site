import { Reveal } from "@/components/reveal";

type SectionKickerProps = {
  number: string;
  label: string;
};

export function SectionKicker({ number, label }: SectionKickerProps) {
  return (
    <Reveal as="div" className="flex items-center gap-3">
      <span className="font-heading text-sm font-semibold text-accent">
        {number}
      </span>
      <span className="h-px w-10 bg-line" aria-hidden="true" />
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone">
        {label}
      </span>
    </Reveal>
  );
}
