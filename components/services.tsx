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
      className="relative overflow-hidden bg-[linear-gradient(170deg,#3a2464_0%,#2c1b50_45%,#20143c_100%)] py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(163,63,156,0.4)_0%,transparent_70%)] blur-[80px] sm:h-[520px] sm:w-[520px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(232,94,44,0.22)_0%,transparent_70%)] blur-[80px] sm:h-[460px] sm:w-[460px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionKicker number="02" label="Serviços" />

        <Reveal
          as="h2"
          delay={80}
          className="mt-8 max-w-2xl font-heading text-[1.75rem] font-semibold leading-[1.28] tracking-tight text-paper sm:text-4xl"
        >
          O que a gente constrói pro{" "}
          <span className="text-accent">seu negócio</span>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-stone sm:text-lg"
        >
          Sem pacote fechado que não serve pro seu caso. Cada projeto começa
          com uma conversa sobre o problema que você precisa resolver.
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {services.map((service, i) => (
            <Reveal key={service.number} as="div" delay={200 + i * 90}>
              <GlassPanel
                as="article"
                tone="light"
                className="group relative flex h-full flex-col"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(140deg,var(--accent-warm)_0%,var(--accent-dim)_100%)] font-heading text-sm font-semibold text-white shadow-[0_10px_22px_-8px_rgba(232,94,44,0.75)]">
                  {service.number}
                </span>

                <h3 className="mt-5 font-heading text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-line-ink-soft pt-6">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.9375rem] text-ink-soft"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
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
