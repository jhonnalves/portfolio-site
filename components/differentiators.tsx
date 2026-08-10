import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { GlassPanel } from "@/components/glass-panel";

const differentiators = [
  {
    number: "01",
    title: "Atendimento direto comigo",
    description:
      "Sem intermediário, sem terceirização. Você fala direto com quem constrói o seu projeto.",
  },
  {
    number: "02",
    title: "Código limpo e sob medida",
    description:
      "Nada de template genérico. Cada site é construído do zero, pensado pro seu negócio.",
  },
  {
    number: "03",
    title: "Suporte pós-entrega",
    description:
      "Acompanhamento depois do site no ar, pra ajustar o que for preciso conforme seu negócio muda.",
  },
  {
    number: "04",
    title: "Presença digital",
    description:
      "Seu negócio aparece onde o cliente já está procurando: Google, redes sociais, WhatsApp.",
  },
  {
    number: "05",
    title: "Escalabilidade",
    description:
      "Base tecnológica pronta pra crescer junto com o seu negócio, sem precisar refazer do zero.",
  },
];

export function Differentiators() {
  return (
    <section
      id="diferenciais"
      aria-label="Diferenciais"
      className="relative border-t border-line bg-ink py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionKicker number="04" label="Diferenciais" />

        <Reveal
          as="h2"
          delay={80}
          className="mt-8 max-w-2xl font-heading text-3xl font-semibold leading-snug tracking-tight text-paper sm:text-4xl"
        >
          Por que contratar <span className="text-accent">esse trabalho</span>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="mt-5 max-w-xl text-lg leading-relaxed text-stone"
        >
          Não é só sobre entregar um site. É sobre dar pro seu negócio uma
          base sólida pra crescer com menos esforço.
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {differentiators.map((item, i) => (
            <Reveal
              key={item.number}
              as="div"
              delay={200 + i * 70}
              className={
                i === differentiators.length - 1
                  ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)]"
                  : undefined
              }
            >
              <GlassPanel as="article" className="group flex h-full flex-col">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink font-heading text-sm font-semibold text-accent shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_18px_-3px_rgba(232,94,44,0.45)] transition-shadow duration-300 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_26px_-2px_rgba(232,94,44,0.8)]">
                  {item.number}
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone">
                  {item.description}
                </p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
