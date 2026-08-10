import { getWhatsappLink } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { GlassPanel } from "@/components/glass-panel";
import { CtaButton } from "@/components/cta-button";

const marqueeItems = [
  "Sites Institucionais",
  "Landing Pages",
  "Design Autoral",
  "Performance",
  "SEO Técnico",
];

export function Hero() {
  return (
    <section
      id="topo"
      aria-label="Apresentação"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* fundo: degradê de marca navy → marrom-alaranjado */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,#101A2E_0%,#241A16_100%)]"
      />

      {/* formas orgânicas com blur, deriva lenta e assíncrona */}
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-12%] h-[420px] w-[420px] rounded-full bg-accent/35 mix-blend-screen blur-[110px] motion-safe:animate-drift-a motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-[-10%] h-[320px] w-[320px] rounded-full bg-petrol/55 mix-blend-screen blur-[100px] motion-safe:animate-drift-b motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="absolute left-[38%] top-[30%] h-[260px] w-[260px] rounded-full bg-accent-dim/30 mix-blend-screen blur-[100px] motion-safe:animate-drift-c motion-reduce:animate-none"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(var(--ink-line)_1px,transparent_1px),linear-gradient(90deg,var(--ink-line)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent_75%)]"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-24">
        <Reveal as="div" className="mb-7 w-fit">
          <GlassPanel as="div" variant="pill">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-stone">
              Disponível para novos projetos
            </span>
          </GlassPanel>
        </Reveal>

        <Reveal as="h1" delay={80} className="max-w-4xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-paper sm:text-6xl lg:text-[4rem]">
          Quantos clientes seu negócio está{" "}
          <span className="text-accent">perdendo</span> por não ter um site
          profissional?
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="mt-5 font-heading text-xl font-semibold tracking-tight text-paper sm:text-2xl"
        >
          Mais visibilidade. Mais clientes.{" "}
          <span className="text-accent">Mais vendas.</span>
        </Reveal>

        <Reveal as="p" delay={220} className="mt-5 max-w-xl text-lg leading-relaxed text-stone sm:text-xl">
          Sem presença digital boa, você perde cliente todo dia. Vamos mudar
          isso.
        </Reveal>

        <Reveal as="div" delay={280} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CtaButton href={getWhatsappLink()}>Iniciar um projeto</CtaButton>
          <CtaButton href="#diferenciais" variant="ghost" external={false} className="group">
            Ver diferenciais
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </CtaButton>
        </Reveal>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="relative z-10 mx-auto mb-8 hidden flex-col items-center gap-2 text-stone transition-colors hover:text-paper sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Role para explorar</span>
        <span className="h-8 w-px animate-bounce bg-current" />
      </a>

      {/* faixa de rótulos em movimento contínuo */}
      <div className="relative z-10 overflow-hidden border-t border-line bg-ink/70 py-4 backdrop-blur-sm">
        <div className="flex w-max animate-marquee items-center gap-10 motion-reduce:animate-none">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 font-heading text-sm uppercase tracking-[0.15em] text-stone"
            >
              {item}
              <span aria-hidden="true" className="text-accent">
                •
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
