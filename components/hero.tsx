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
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20 sm:pt-24"
    >
      {/* base: degradê radial roxo, mais claro no centro-topo e fundo nas bordas */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_130%_85%_at_50%_0%,#2D1B4E_0%,#1F1338_42%,#150C26_100%)]"
      />

      {/* onda orgânica: border-radius + transform animados, blur estático */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-16 h-[320px] w-[320px] bg-[linear-gradient(135deg,var(--plum-glow)_0%,var(--magenta-glow)_48%,var(--accent)_100%)] opacity-55 blur-[48px] will-change-transform motion-safe:animate-blob-a motion-reduce:animate-none sm:-right-32 sm:h-[580px] sm:w-[580px] sm:blur-[80px]"
        style={{ borderRadius: "60% 40% 30% 70% / 70% 30% 70% 30%" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-28 -left-24 h-[280px] w-[280px] bg-[linear-gradient(200deg,var(--accent-dim)_0%,var(--magenta-glow)_55%,var(--plum-glow)_100%)] opacity-45 blur-[52px] will-change-transform motion-safe:animate-blob-b motion-reduce:animate-none sm:-left-28 sm:h-[480px] sm:w-[480px] sm:blur-[85px]"
        style={{ borderRadius: "40% 60% 65% 35% / 40% 45% 55% 60%" }}
      />

      {/* brilho radial roxo/magenta atrás do bloco de título */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[26%] h-[380px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(140,63,190,0.5)_0%,rgba(163,63,156,0.22)_45%,transparent_70%)] blur-[70px] motion-safe:animate-glow-breathe sm:h-[520px] sm:w-[900px]"
      />

      {/* malha técnica sutil, esmaecida no topo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent_75%)] opacity-60"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-20 sm:py-24">
        <Reveal as="div" className="mb-8 w-fit">
          <GlassPanel as="div" variant="pill">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-stone sm:text-xs">
              Disponível para novos projetos
            </span>
          </GlassPanel>
        </Reveal>

        <Reveal
          as="h1"
          delay={80}
          className="max-w-4xl font-heading text-[2.125rem] font-semibold leading-[1.14] tracking-tight text-paper sm:text-5xl lg:text-[4rem] lg:leading-[1.08]"
        >
          Quantos clientes seu negócio está{" "}
          <span className="text-accent">perdendo</span> por não ter um site
          profissional?
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="mt-6 font-heading text-xl font-semibold tracking-tight text-paper sm:text-2xl"
        >
          Mais visibilidade. Mais clientes.{" "}
          <span className="text-accent">Mais vendas.</span>
        </Reveal>

        <Reveal
          as="p"
          delay={220}
          className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-stone sm:text-xl"
        >
          Sem presença digital boa, você perde cliente todo dia. Vamos mudar
          isso.
        </Reveal>

        <Reveal
          as="div"
          delay={280}
          className="mt-11 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4"
        >
          <CtaButton href={getWhatsappLink()}>Iniciar um projeto</CtaButton>
          <CtaButton
            href="#diferenciais"
            variant="ghost"
            external={false}
            className="group"
          >
            Ver diferenciais
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </CtaButton>
        </Reveal>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="relative z-10 mx-auto mb-8 hidden flex-col items-center gap-2 text-stone-dim transition-colors hover:text-paper sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">
          Role para explorar
        </span>
        <span className="h-8 w-px animate-bounce bg-current motion-reduce:animate-none" />
      </a>

      {/* faixa de rótulos em movimento contínuo */}
      <div className="relative z-10 overflow-hidden border-t border-line bg-plum-deep/70 py-4 backdrop-blur-sm">
        <div className="flex w-max animate-marquee items-center gap-10 motion-reduce:animate-none">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 font-heading text-xs uppercase tracking-[0.15em] text-stone-dim sm:text-sm"
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
