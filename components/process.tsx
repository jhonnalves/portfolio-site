import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";

const steps = [
  {
    number: "01",
    title: "Planejamento",
    description:
      "Entendemos seu negócio, seu público e seu objetivo antes de escrever qualquer linha de código.",
    deliverable: "Escopo definido",
  },
  {
    number: "02",
    title: "Design & identidade",
    description:
      "Definimos a linguagem visual — cores, tipografia, hierarquia — alinhada ao que sua marca precisa transmitir.",
    deliverable: "Layout aprovado",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Construímos o site com código limpo, performance otimizada e responsivo em qualquer tela.",
    deliverable: "Site em testes",
  },
  {
    number: "04",
    title: "Publicação & entrega",
    description:
      "Publicamos, testamos tudo e entregamos as chaves — com um repasse rápido de como manter e atualizar.",
    deliverable: "Site no ar",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      aria-label="Processo"
      className="relative overflow-hidden border-t border-line bg-[linear-gradient(180deg,#150C26_0%,#221543_50%,#150C26_100%)] py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[380px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(163,63,156,0.28)_0%,transparent_70%)] blur-[80px] sm:h-[440px] sm:w-[720px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionKicker number="03" label="Processo" />

        <Reveal
          as="h2"
          delay={80}
          className="mt-8 max-w-2xl font-heading text-[1.75rem] font-semibold leading-[1.28] tracking-tight text-paper sm:text-4xl"
        >
          Do primeiro contato ao{" "}
          <span className="text-accent">site no ar</span>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-stone sm:text-lg"
        >
          Um processo claro, em quatro etapas, pra você saber exatamente o que
          esperar — e o que recebe — em cada momento do projeto.
        </Reveal>

        <div className="relative mt-14 sm:mt-16">
          {/* trilho vertical (mobile / tablet) */}
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[19px] top-4 w-px bg-[linear-gradient(180deg,rgba(232,94,44,0.6)_0%,rgba(255,255,255,0.16)_22%,rgba(255,255,255,0.14)_82%,transparent_100%)] lg:hidden"
          />
          {/* trilho horizontal (desktop) */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-[19px] hidden h-px bg-[linear-gradient(90deg,rgba(232,94,44,0.6)_0%,rgba(255,255,255,0.16)_22%,rgba(255,255,255,0.14)_82%,transparent_100%)] lg:block"
          />

          <ol className="grid list-none gap-y-11 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {steps.map((step, i) => (
              <Reveal
                key={step.number}
                as="li"
                delay={200 + i * 100}
                className="relative pl-14 lg:flex lg:h-full lg:flex-col lg:pl-0 lg:pt-16"
              >
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-plum-soft font-heading text-sm font-semibold text-accent shadow-[0_0_26px_-4px_rgba(232,94,44,0.65)]">
                  {step.number}
                </span>

                <h3 className="font-heading text-xl font-semibold text-paper">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-lg leading-relaxed text-stone lg:text-[0.9375rem]">
                  {step.description}
                </p>

                <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.08] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-accent-warm lg:mt-auto">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-accent"
                  />
                  {step.deliverable}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
