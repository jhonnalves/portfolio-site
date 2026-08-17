import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { GlassPanel } from "@/components/glass-panel";
import { CtaButton } from "@/components/cta-button";
import { getWhatsappLink } from "@/lib/site-config";

export function Contact() {
  return (
    <section
      id="contato"
      aria-label="Contato"
      className="relative overflow-hidden border-t border-line bg-[radial-gradient(ellipse_110%_80%_at_50%_100%,#33205C_0%,#1D1236_50%,#150C26_100%)] py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_65%_at_50%_100%,black,transparent_75%)] opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-[280px] w-[340px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,94,44,0.35)_0%,rgba(163,63,156,0.2)_45%,transparent_70%)] blur-[70px] sm:h-[420px] sm:w-[680px]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="flex flex-col items-center">
          <SectionKicker number="05" label="Contato" />
        </div>

        <Reveal as="div" delay={80} className="mx-auto mt-8 w-fit">
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
          as="h2"
          delay={140}
          className="mt-8 font-heading text-[2rem] font-semibold leading-[1.18] tracking-tight text-paper sm:text-5xl"
        >
          Bora <span className="text-accent">tirar seu site do papel</span>?
        </Reveal>

        <Reveal
          as="p"
          delay={200}
          className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-stone sm:text-lg"
        >
          Chama a gente no WhatsApp e conta o que você precisa. Sem formulário,
          sem enrolação — só uma conversa direta sobre como fazer seu negócio
          aparecer mais e vender mais.
        </Reveal>

        <Reveal as="div" delay={260} className="mt-10 flex justify-center">
          <CtaButton
            href={getWhatsappLink()}
            size="lg"
            className="w-full sm:w-auto"
          >
            Chamar no WhatsApp
          </CtaButton>
        </Reveal>

        <Reveal as="p" delay={320} className="mt-7 text-sm text-stone-dim">
          Respondemos rápido — geralmente ainda no mesmo dia.
        </Reveal>
      </div>
    </section>
  );
}
