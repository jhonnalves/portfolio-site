import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";

const pillars = [
  {
    number: "01",
    title: "Mais visibilidade",
    description:
      "Seu negócio aparece pra quem já está procurando por você — no Google, no Instagram, no boca a boca digital.",
  },
  {
    number: "02",
    title: "Mais credibilidade",
    description:
      "Site profissional passa confiança antes mesmo do primeiro contato. É a primeira impressão que fecha negócio.",
  },
  {
    number: "03",
    title: "Mais vendas",
    description:
      "Cada botão, cada texto, cada seção pensada pra guiar o visitante até uma mensagem no seu WhatsApp.",
  },
];

export function About() {
  return (
    <section id="sobre" aria-label="Sobre" className="relative overflow-hidden border-t border-line bg-ink-soft py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-24 right-[-8%] h-[360px] w-[360px] rounded-full bg-accent/[0.08] blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionKicker number="01" label="Sobre" />

        <Reveal
          as="h2"
          delay={80}
          className="mt-8 max-w-3xl font-heading text-3xl font-semibold leading-snug tracking-tight text-paper sm:text-4xl lg:text-[2.75rem]"
        >
          Eu não entrego só um site. Entrego a ferramenta que faz seu telefone
          tocar, seu WhatsApp receber mensagem e sua agenda lotar de{" "}
          <span className="text-accent">cliente novo</span>.
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="mt-6 max-w-xl text-lg leading-relaxed text-stone"
        >
          Cada projeto é pensado do zero — identidade visual, textos que
          vendem e performance técnica — para seu negócio parecer (e
          funcionar) como uma marca grande, mesmo sendo pequeno. Hoje, meu
          foco é ajudar pequenos negócios locais a terem a presença digital
          que já merecem.
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-3 sm:gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.number} as="div" delay={220 + i * 90}>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink font-heading text-sm font-semibold text-accent">
                {pillar.number}
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-paper">
                {pillar.title}
              </h3>
              <p className="mt-2 leading-relaxed text-stone">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
