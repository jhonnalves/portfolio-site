import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";

type Item = {
  title: string;
  description: string;
  icon: ReactNode;
  featured?: boolean;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const items: Item[] = [
  {
    title: "Atendimento direto com quem constrói",
    description:
      "Sem intermediário, sem terceirização e sem ticket de suporte. Você conversa direto com a pessoa que está desenvolvendo o seu projeto, do primeiro orçamento à entrega.",
    featured: true,
    icon: (
      <svg {...iconProps}>
        <path d="M20 15a3 3 0 0 1-3 3H8l-5 4V6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v9Z" />
        <path d="M8 9h8M8 12.5h5" />
      </svg>
    ),
  },
  {
    title: "Código sob medida",
    description:
      "Nada de template genérico. Cada site é construído do zero, pensado pro seu negócio.",
    icon: (
      <svg {...iconProps}>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5.5l-3 13" />
      </svg>
    ),
  },
  {
    title: "Suporte pós-entrega",
    description:
      "Acompanhamento depois do site no ar, pra ajustar o que for preciso conforme seu negócio muda.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 4.5 6v6c0 4.2 3 7.4 7.5 9 4.5-1.6 7.5-4.8 7.5-9V6L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Presença digital de verdade",
    description:
      "Seu negócio aparece onde o cliente já está procurando: Google, redes sociais e WhatsApp.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
      </svg>
    ),
  },
  {
    title: "Pronto pra crescer",
    description:
      "Base tecnológica preparada pra escalar junto com o seu negócio, sem precisar refazer do zero.",
    icon: (
      <svg {...iconProps}>
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M16 7h5v5" />
      </svg>
    ),
  },
];

export function Differentiators() {
  return (
    <section
      id="diferenciais"
      aria-label="Diferenciais"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#160c28_0%,#100819_55%,#140b23_100%)] py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(122,63,184,0.34)_0%,transparent_70%)] blur-[80px] sm:h-[520px] sm:w-[520px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionKicker number="04" label="Diferenciais" />

        <Reveal
          as="h2"
          delay={80}
          className="mt-8 max-w-2xl font-heading text-[1.75rem] font-semibold leading-[1.28] tracking-tight text-paper sm:text-4xl"
        >
          Por que escolher a <span className="text-accent">Seluc.IA</span>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-stone sm:text-lg"
        >
          Não é só sobre entregar um site. É sobre dar pro seu negócio uma base
          sólida pra crescer com menos esforço.
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              as="div"
              delay={200 + i * 70}
              className={item.featured ? "sm:col-span-2" : undefined}
            >
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-accent/35 active:border-accent/35 sm:p-7 ${
                  item.featured
                    ? "bg-[linear-gradient(135deg,rgba(122,63,184,0.22)_0%,rgba(232,94,44,0.1)_100%)] sm:p-8"
                    : "bg-white/[0.035] hover:bg-white/[0.06] active:bg-white/[0.06]"
                }`}
              >
                {item.featured ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(232,94,44,0.28)_0%,transparent_70%)] blur-[30px]"
                  />
                ) : null}

                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-plum-soft/70 text-accent shadow-[0_0_22px_-6px_rgba(232,94,44,0.6)] transition-shadow duration-300 group-hover:shadow-[0_0_30px_-4px_rgba(232,94,44,0.9)] [&_svg]:h-5 [&_svg]:w-5">
                  {item.icon}
                </span>

                <h3
                  className={`relative mt-5 font-heading font-semibold text-paper ${
                    item.featured ? "text-xl sm:text-2xl" : "text-lg"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`relative mt-2.5 leading-relaxed text-stone ${
                    item.featured
                      ? "max-w-xl text-[1.0625rem]"
                      : "text-[0.9375rem]"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
