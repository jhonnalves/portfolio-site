import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { GlassPanel } from "@/components/glass-panel";

const services = [
  {
    number: "01",
    title: "Sites institucionais",
    description:
      "Presença digital completa pra sua empresa — profissional, rápida e fácil de manter, feita pra passar credibilidade desde o primeiro clique.",
    includes: [
      "Design responsivo mobile-first",
      "SEO técnico básico",
      "Botão de WhatsApp integrado",
    ],
  },
  {
    number: "02",
    title: "Landing pages",
    description:
      "Página única, focada em um objetivo: converter visita em mensagem. Ideal pra campanhas, lançamentos ou um serviço específico que você quer vender mais.",
    includes: [
      "Foco total em conversão",
      "Copy orientada a resultado",
      "Pronta pra rodar tráfego pago",
    ],
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      aria-label="Serviços"
      className="relative border-t border-line bg-ink py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionKicker number="02" label="Serviços" />

        <Reveal
          as="h2"
          delay={80}
          className="mt-8 max-w-2xl font-heading text-3xl font-semibold leading-snug tracking-tight text-paper sm:text-4xl"
        >
          O que eu posso construir pro{" "}
          <span className="text-accent">seu negócio</span>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="mt-5 max-w-xl text-lg leading-relaxed text-stone"
        >
          Sem pacote fechado que não serve pro seu caso. Cada projeto começa
          com uma conversa sobre o problema que você precisa resolver.
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
          {services.map((service, i) => (
            <Reveal key={service.number} as="div" delay={200 + i * 90}>
              <GlassPanel as="article" className="group relative flex h-full flex-col">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink font-heading text-sm font-semibold text-accent shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_18px_-3px_rgba(232,94,44,0.45)] transition-shadow duration-300 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_26px_-2px_rgba(232,94,44,0.8)]">
                  {service.number}
                </span>

                <h3 className="mt-5 font-heading text-xl font-semibold text-paper">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-stone"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
