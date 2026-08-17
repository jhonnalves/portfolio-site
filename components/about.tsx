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
    <section
      id="sobre"
      aria-label="Sobre"
      className="relative overflow-hidden border-t border-line bg-[linear-gradient(165deg,#241645_0%,#1B1032_55%,#150C26_100%)] py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(122,63,184,0.35)_0%,transparent_70%)] blur-[80px] sm:h-[520px] sm:w-[520px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionKicker number="01" label="Sobre" />

        <Reveal
          as="h2"
          delay={80}
          className="mt-8 max-w-3xl font-heading text-[1.75rem] font-semibold leading-[1.28] tracking-tight text-paper sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]"
        >
          A Seluc.IA não entrega só um site. Entrega a ferramenta que faz seu
          telefone tocar, seu WhatsApp receber mensagem e sua agenda lotar de{" "}
          <span className="text-accent">cliente novo</span>.
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-stone sm:text-lg"
        >
          Cada projeto é pensado do zero — identidade visual, textos que vendem
          e performance técnica — para seu negócio parecer (e funcionar) como
          uma marca grande, mesmo sendo pequeno. Nosso foco é ajudar pequenos
          negócios locais a terem a presença digital que já merecem.
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-line pt-12 sm:mt-16 sm:grid-cols-3 sm:gap-8">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.number}
              as="div"
              delay={220 + i * 90}
              className="group"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-plum-soft/70 font-heading text-sm font-semibold text-accent shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_22px_-4px_rgba(232,94,44,0.5)] transition-shadow duration-300 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_0_30px_-2px_rgba(232,94,44,0.85)]">
                {pillar.number}
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold text-paper">
                {pillar.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-stone">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
