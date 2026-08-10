import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";

const steps = [
  {
    number: "01",
    title: "Planejamento",
    description:
      "Entendo seu negócio, seu público e seu objetivo antes de escrever qualquer linha de código.",
  },
  {
    number: "02",
    title: "Design & identidade visual",
    description:
      "Defino a linguagem visual — cores, tipografia, hierarquia — alinhada ao que sua marca precisa transmitir.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Construo o site com código limpo, performance otimizada e responsivo em qualquer tela.",
  },
  {
    number: "04",
    title: "Publicação & entrega",
    description:
      "Publico, testo tudo e entrego as chaves — com um repasse rápido de como manter e atualizar.",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      aria-label="Processo"
      className="relative overflow-hidden border-t border-line bg-ink py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,var(--petrol)_0%,transparent_65%)] opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute -top-16 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/[0.12] blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionKicker number="03" label="Processo" />

        <Reveal
          as="h2"
          delay={80}
          className="mt-8 max-w-2xl font-heading text-3xl font-semibold leading-snug tracking-tight text-paper sm:text-4xl"
        >
          Do primeiro contato ao{" "}
          <span className="text-accent">site no ar</span>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="mt-5 max-w-xl text-lg leading-relaxed text-stone"
        >
          Um processo claro, em quatro etapas, pra você saber exatamente o
          que esperar em cada momento do projeto.
        </Reveal>

        <ol className="relative mt-16 list-none space-y-12 border-l border-line pl-8 sm:pl-12">
          {steps.map((step, i) => (
            <Reveal key={step.number} as="li" delay={220 + i * 100} className="relative">
              <span className="absolute -left-[3.25rem] top-0 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink font-heading text-sm font-semibold text-accent shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_-4px_rgba(232,94,44,0.55)] sm:-left-[4.25rem]">
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-semibold text-paper">
                {step.title}
              </h3>
              <p className="mt-2 max-w-lg leading-relaxed text-stone">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
